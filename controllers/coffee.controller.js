'use strict';
const axios=require('axios');
const coffeeModel=require('../models/coffee.model');

// Endpoint for testing
const home=(req,res)=>{
// provide your logic here
}
// Call the coffee api here and return the results
const retreiveItemsController= async(req,res)=>{
    // provide your logic here
    let url =`https://coffeepedias.herokuapp.com/coffee-list/`;
    await axios.get(url).then((response)=>{
        res.send(response.data);
    })

};
// Get favorite coffee from MongoDB
const getFavoriteCoffee=(req,res)=>{
    // provide your logic here
    coffeeModel.find({},(err,data)=>{
res.send(data);     
    }
    )
}
// Create new fav coffee endpoint
const createItemController=(req,res)=>{
    // provide logic here
const {title,description,ingredients,img}=req.body;
const newCoffe=new coffeeModel({
title:title,
description:description,
ingredients:ingredients,
img:img,
})
newCoffe.save();
res.send(newCoffe);
console.log('item added');

};

// update coffee from MongoDB
const updateItemController=(req,res)=>{
    // provide logic here
    const {title,description,ingredients,img}=req.body;
    const id=req.params.id;
    coffeeModel.find({_id:id},(err,data)=>{
        if (err) {
            res.send(err)

        } else {

            data[0].title = title;
            data[0].ingredients = ingredients;
          

            data[0].save();
            res.send(data);
            console.log('item updated');
        }

    })
};

// delete coffee from MongoDB
const deleteItemController=(req,res)=>{
    // provide your logic here
    const id=req.params.id
    coffeeModel.findOneAndDelete({_id:id},(err,data)=>{
if (err){
    res.send(err)
}else{
   res.send(data)
}

    })
};

module.exports={
    home,
    getFavoriteCoffee,
    createItemController,
    updateItemController,
    deleteItemController,
    retreiveItemsController
};