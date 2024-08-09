import React from "react";
import Header from "./sharedComponents/header";
import Footer from "./sharedComponents/footer";
import {useState, useEffect} from "react";
import "./orders.css";
import Select from "react-select";
import { ToastContainer, toast } from "react-toastify";

function OrdersList () {
    const [order, setOrder] = useState([]);
    const [selectedId, setSelectedId] = useState(null);
    const [selectedOption, setSelectedOption] = useState("");
    const options = [
        {value: "Delivered", label: "Delivered"},
        {value: "Processing", label: "Processing"},
        {value: "Out For Delivery", label: "Out For Delivery"}
    ];
   let handleChange = async (selectedOption) => {
    let status = selectedOption.value;

    await updateStatus( selectedId,status)
    console.log(selectedOption,selectedId, "selected option");
   }
   let updateStatus = async (orderId, status)=>{
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    await fetch("http://localhost:4000/api/order/status", {
        method: "POST",
        headers: myHeaders,
        body: JSON.stringify({orderId: orderId, status: status}),
    })
    .then((res) => res.json())
    .then((res) => {
        //fetch orders aga
        fetchOrderList()
        //send toast msg
        toast("Status updated successfully")
    })
    .catch((error) => {
        console.log(error);
    })
   }

    let fetchOrderList = async () => {

        let list = await fetch("http://localhost:4000/api/order/list");
        let item = await list.json();
        setOrder(item.data);
        console.log(item);
    }

    useEffect(()=>{
        fetchOrderList();
    }, []);

    
return <div>
        <Header isAdmin={true}/>

        <table class="table">
        <thead class="thead-dark">
          <tr>
            <th scope="col">UserID</th>
            <th scope="col">Address</th>
            <th scope="col">Amount</th>
            <th scope="col">Date</th>
            <th scope="col">Items</th>
            <th scope="col">Payment</th>
            <th scope="col">Status</th>
            <th scope="col">*</th>
          </tr>
        </thead>
        <tbody>
            {order.map((item,index)=> (
                  <tr key={item._id}>
                    <td>{index}</td>
                  <td scope="row">{item.address.street}</td>
                <td>{item.amount}</td>
                  <td>{item.date}</td>
                     <td>{item.items.map(item=>(item.name + ", "))}</td>
                  <td>{item.payment}</td>
                  <td>
                    <div className={`tag_order ${item.status.toLowerCase() === "processing" 
                        ? "orange_tag" 
                        : item.status.toLowerCase() === "delivered" 
                        ? "green_tag" 
                        : "blue_tag"}`}>
                             {item.status}
                    </div>
                   </td>
                   <td>
                   <Select
        value={selectedOption}
        onChange={(e)=>{
            updateStatus(item._id, e.value);
        }}
        options={options}
      />
                   </td>

                </tr>
            ))}
        
       
        </tbody>
      </table>


        <Footer />
        <ToastContainer/>
        
    </div>;
}
export default OrdersList;