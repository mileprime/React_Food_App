import React from "react";
import Header from "./sharedComponents/header";
import Footer from "./sharedComponents/footer";
import {useState, useEffect} from "react";
import "./orders.css";

function OrdersList () {
    const [order, setOrder] = useState([]);
    // const [show, setShow] = useState(false);

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
        <Header />

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


                  {/* <td>
                    <GoTrash
                    color="red"
                    size={30}
                    onClick={() => deleteFood(item._id)}
                  /></td> */}
                </tr>
            ))}
        
       
        </tbody>
      </table>


        <Footer />
    </div>;
}
export default OrdersList;