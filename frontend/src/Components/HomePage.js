import axios from 'axios';
import React, { Component } from 'react';
import { Row,Col} from 'react-bootstrap';
import HomeCard from './HomeCard';


const backendUrl= process.env.REACT_APP_BACKEND_URL;

export class HomePage extends Component {
constructor(props) {
    super(props)

    this.state = {
         apiData:[],
         showCoffeeCard:false,
    }
}
// ------------------------ git api data ----------------
componentDidMount= ()=>{
let url=`${backendUrl}/retreive`;
axios.get(url).then((response)=>{
this.setState({
    apiData:response.data,
    showCoffeeCard:true,
})
})
}

// ------------------------ add to Fav -------------- 
addToFav (item){
    // console.log(item);
let url =`${backendUrl}/create`;
// let bodyData={
//     title:item.title,
//     img:item.img,
//     ingredients:item.ingredients,
// }
axios.post(url).then((response)=>{
    console.log(response.data);
})
}

    render() {
        console.log(this.state);
        return (
            <>
                <h1>Coffee List</h1>
                <Row>
                    {
                        this.state.showCoffeeCard &&
                        this.state.apiData.map((item, idx) => {
                            return (
                            <Col key={idx}>
                            <HomeCard
                            item={item}
                            addToFav={this.addToFav}
                            />
                            </Col>

                            )
                        })
                    }

                </Row>



            </>
        )
    }
}

export default HomePage
