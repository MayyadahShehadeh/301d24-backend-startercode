import axios from 'axios';
import React, { Component } from 'react'
import { Row,Col,Card,Button,Modal,Form } from 'react-bootstrap';
const backendUrl= process.env.REACT_APP_BACKEND_URL;

export class FavPage extends Component {

constructor(props) {
    super(props)

    this.state = {
         favData:[],
         showCards:false,
         showForm:false,
         title:'',
         ingredients:'',
         id:0

    }
}
componentDidMount = ()=>{
let url=`${backendUrl}/fav-list`;
axios.get(url).then((response)=>{
this.setState({
favData:response.data,
showCards:true

})
})
}
//  ------------------------------ delete ------------------- 
// deleteFavData = (e)=>{
// let url=`${backendUrl}/delete/${e._id}`;
// axios.delete(url).then((response)=>{
//     this.setState({
//         favData:response.data,
//     })
// })

// }
// -------------------------------------------
handleClose = (e=>this.setState({showForm:false}))

//  -------------------------------------------------
showUpdate = (item) =>{
    this.setState({
        showForm:true,
        title: item.title,
        ingredients: item.ingredients,
        id:item._id
    })
}


updataFavData=()=>{

     axios.put(`${backendUrl}/update/`).then((response)=>{


     })

}

    render() {
        console.log(this.state);
        return (
            <>
            <h1>Fav list</h1>

            <Modal show={this.state.show} onHide={this.handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>coffee update</Modal.Title>
        </Modal.Header>
        <Modal.Body>
                        <Form>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>title</Form.Label>
                                <Form.Control type="text" defaultValue={this.state.title} />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="text" defaultValue={this.state.ingredients} />
                            </Form.Group>
                        </Form>
        </Modal.Body>
        <Modal.Footer>
        <Button as="input" type="submit" value="Submit" />

          <Button variant="secondary" onClick={this.handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>


            <Row>

            {this.state.showCards &&
                this.state.favData.map((item,idx)=>{
                    return(

                        <Col key={idx}>
                    <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={item.img} />
                    <Card.Body>
                        <Card.Title>{item.title}</Card.Title>
                        <Card.Text>
                           {item.ingredients}
                        </Card.Text>
                        <Button variant="primary" onClick={this.deleteFavData(item)}>
                            delete</Button>
                            <Button variant="primary" onClick={this.showUpdate(item)}>
                            update</Button>
                    </Card.Body>
                </Card> 

</Col>

                    )
                })
            }
            </Row>



            </>
        )
    }
}

export default FavPage;
