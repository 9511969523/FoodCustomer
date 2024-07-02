import React, { useState } from 'react'
import axios from 'axios'
import { Form } from 'react-bootstrap'

const AddFood = () => {
    const [AllFood, setAllFood] = useState([])

    const [FoodName, setFoodName] = useState("")
    const [FoodType, setFoodType] = useState("")
    const [FoodCategory, setFoodCategory] = useState("")
    const [FoodImage, setFoodImage] = useState("")
    const [FoodPrice, setFoodPrice] = useState(0)

    const addData = async () => {
        const FoodData = {
            FoodName: FoodName,
            FoodType: FoodType,
            FoodCategory: FoodCategory,
            FoodImage: FoodImage,
            FoodPrice: Number(FoodPrice),
        }
        try {
            let res = await axios.post("http://localhost:5000/api/addfood", FoodData)
            setAllFood(res.data)
            alert("Added")
        } catch (error) {
            console.log(error)
        }
    }
    //Upload Image
    async function uploadImage(e) {
        const imgData = new FormData();
        imgData.append("image", e.target.files[0]);
        axios
            .post("http://localhost:5000/uploadfile", imgData)
            .then((res) => {
                console.log("Response:", res.data);
                setFoodImage(res.data.filepath);
                alert("Uploaded")
            })
            .catch((err) => {
                console.log("Error:", err);
            });
    }
    return (
        <div>
            <Form>
                <h1>FILL YOUR DETAILS</h1>
                <Form.Control onChange={(e) => setFoodName(e.target.value)} type='text' placeholder='FoodName' />
                <Form.Control onChange={(e) => setFoodType(e.target.value)} type='text' placeholder='FoodType' />
                <Form.Control onChange={(e) => setFoodCategory(e.target.value)} type='text' placeholder='FoodCategory' />
                <Form.Control onChange={uploadImage} type='file' placeholder='FoodImage' />
                <Form.Control onChange={(e) => setFoodPrice(e.target.value)} type='text' placeholder='FoodPrice' />
                <button onClick={() => { addData() }}>SUBMIT</button>
            </Form>

        </div>
    )
}

export default AddFood