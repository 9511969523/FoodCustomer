
import React, { useState, useEffect } from 'react'
import { Button, Card, Col, Container, Row, Modal } from 'react-bootstrap'
import axios from 'axios'

const AllFood = () => {
    //All Food
    const [AllFood, setAllFood] = useState([])
    const [showdelete, setshowdelete] = useState(false)
    const [selectedFood, setselectedFood] = useState({})



    //AllFood

    useEffect(() => {
        axios.get("http://localhost:5000/api/allfood")
            .then((result) => {
                console.log("Data", result.data)
                setAllFood(result.data)
            }).catch((err) => {
                console.log(err)
            }, [])
    })
    const deleteFood = async () => {
        const FoodIdData = {
            Foodid: selectedFood._id
        }
        try {
            const deleteResult = await axios.delete("http://localhost:5000/api/deleteFood", { data: FoodIdData })
            console.log(deleteResult)
            setshowdelete(false)
        } catch (error) {
            console.log(error)
        }
    }

  

    return (
        <>
            <Container className="allfood">
                <div className='PW'><h1>GUJARATHI NASHTA CORNER</h1></div>
                <Row>
                    {
                        AllFood.map((Food) => {
                            return (

                                <Col className='col-container' sm={12} md={6} lg={4}>

                                    <Card>

                                        <Card.Img className='card-Image' src={`http://localhost:5000${Food.FoodImage}`} />

                                        <Card.Body className='Change'  >
                                            <p><h3>{Food.FoodName}</h3></p>
                                            <p><h4>{Food.FoodType}</h4></p>
                                            <p><h4>{Food.FoodCategory}</h4></p>
                                            <p><h4>₹{Food.FoodPrice}</h4></p>
                                        </Card.Body>
                                        <Card.Footer className='Footer'>
                                            <button onClick={() => {
                                                setselectedFood(Food)
                                                setshowdelete(true)
                                            }}>delete</button>
                                            <button>update</button>
                                        </Card.Footer>
                                    </Card>
                                </Col>
                            )
                        })
                    }
                </Row>
            </Container>

            <Modal show={showdelete} onHide={() => setshowdelete(false)}>
                <Modal.Header closeButton>Delete Food</Modal.Header>
                <Modal.Body>
                    <h4> Are You Sure You Want TO Delete This Food</h4>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant='danger' onClick={() => deleteFood()}>Yes</Button>
                    <Button variant='primary' onClick={() => setshowdelete(false)}>No</Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default AllFood