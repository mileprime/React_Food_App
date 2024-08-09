import React, {useEffect} from "react";
import Header from "./sharedComponents/header";
import Footer from "./sharedComponents/footer";
import {useState} from "react";
import {Modal, Button} from 'react-bootstrap';
import {ToastContainer, toast} from "react-toastify";
import {GoTrash} from "react-icons/go";
import "./login.css";
import NewItem from "./newFoodModal";

function Admin() {
    const [food, setFood] = useState([]);
    const [show, setShow] = useState(false);
    let fetchFoodList = async () => {
        
        let list = await fetch("http://localhost:4000/api/food/list");
        let item = await list.json();
        setFood(item.data);
        console.log(item);
            
       
    }


    useEffect(()=>{
        fetchFoodList();
    }, []);


    let deleteFood = async (id) => {
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
    
        await fetch("http://localhost:4000/api/food/remove", {
          method: "DELETE",
          headers: myHeaders,
          body: JSON.stringify({ id: id }),
        })
          .then((response) => {
            return response.json();
          })
          .then((res) => {
            // featch food
            fetchFoodList();
            // show tasot msg
            toast("Deleted Successfully");
            console.log(res);
          })
          .catch((error) => {
            console.log(error);
          });
      };

    return (
        <div>
            <Header />
            <div className="page-container">
                <Button onClick={()=>setShow(true)}>New Item</Button>
                <Modal show={show} onHide={
        ()=>setShow(false)
      }>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
      <NewItem fetchFoodList={fetchFoodList} closeModal={()=>setShow(false)} />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={  ()=>setShow(false)}>
            Close
          </Button>
          <Button variant="primary" onClick={  ()=>setShow(false)}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
               
            <table class="table">
        <thead class="thead-dark">
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Name</th>
            <th scope="col">Description</th>
            <th scope="col">Category</th>
            <th scope="col">Price</th>
            <th scope="col">Image</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
            {food.map((item)=> (
                  <tr key={item._id}>
                  <th scope="row">{item._id}</th>
                  <td>{item.name}</td>
                  <td>{item.description}</td>
                  <td>{item.category}</td>
                  <td>{item.price}</td>
                  <td>{item.image}</td>
                  <td>
                    <GoTrash
                    color="red"
                    size={30}
                    onClick={() => deleteFood(item._id)}
                  /></td>
                </tr>
            ))}
        
       
        </tbody>
      </table>
      </div>

            <Footer />
            <ToastContainer />
        </div>
    )
}

export default Admin;