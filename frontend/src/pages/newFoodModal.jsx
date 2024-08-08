import React, {useState} from "react";
import "./login.css";
import {Button} from 'react-bootstrap';




function NewItem(){
    const [newName, setNewName] = useState("");
    const [newDescription, setNewDescription] = useState("");
    const [newPrice, setNewPrice] = useState("");
    const [newImage, setNewImage] = useState("");
    const [newCategory, setNewCategory] = useState("");

    const newitem = async () => {
        try {
            const formdata = new FormData();
            formdata.append("name",newName);
            formdata.append("description",newDescription);
            formdata.append("price",newPrice.toString());
            formdata.append("image",newImage);
            formdata.append("category",newCategory);


            let newFood = await fetch("http://localhost:4000/api/food/add", {
                method: "POST",
                body: formdata,
            });
let data=await newFood.json()
           console.log(data)

        } catch (error) {

            console.log(error)
        }
    }


    return (
        <div className="flex">
    
         <label for="name">Name</label>
         <input value={newName} onChange={(e) => setNewName(e.target.value)} type="text" placeholder="enter name"/>

         <label for="category">Category</label>
         <input value={newCategory} onChange={(e) => setNewCategory(e.target.value)} type="text" placeholder="enter category"/>
         <label for="description">Description</label>
         <input value={newDescription} onChange={(e) => setNewDescription(e.target.value)} type="text" placeholder="enter description"/>
         <label for="price">Price</label>
         <input value={newPrice} onChange={(e) => setNewPrice(e.target.value)} type="number" placeholder="enter price"/>
         <label for="Image">Image</label>
         <input  onChange={(e) => setNewImage(e.target.files[0])} type="file" />
         <Button onClick={newitem}>Add New Food</Button>
        </div>
    )
}
export default NewItem;