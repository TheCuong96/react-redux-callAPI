import React, { Component } from 'react';
import { connect } from 'react-redux';
import ProductItem from './ProductItem';
import ProductList from './ProductList';
// const axios = require('axios').default;
import axios from 'axios';
import CallApiURL from '../util/CallApiURL';
import { actDeleteProductRequest, actFetchProduct, actFetchProductRequest } from '../actions/action';
class ProductListPage extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            // products : []
        }
    }
    
    // componentWillMount() {
        
    //     axios({
    //         method:'GET',
    //         url:'http://localhost:3000/products',
    //         data:null
    //     }).then(res => {
    //         console.log(res);
    //         this.setState({
    //             products: res.data
    //         });

    //     }).catch(err => {
    //         console.log(err);
    //     })
    // }
    
    componentWillMount() {
        // CallApiURL('GET','products',null).then(res => {
        //     // this.setState({
        //     //     products:res.data
        //     // });
        //     this.props.fetchAllProducts(res.data);
        // })
        this.props.fetchAllProducts();

    }
    onDelete = (id) => {
        // console.log(id);
        // // let {products} = this.state
        // let productDelete = this.state.products
        // CallApiURL('DELETE',`products/${id}`,null).then(res => {
        //     // console.log(this.props.products);
        //     if(res.status === 200){
        //         var index = this.findIndex(productDelete,id);
        //         if(index !== -1){
        //             productDelete.splice(index,1);
        //             this.setState({
        //                 products:productDelete
        //             });
        //         }
        //     }
        // })
        this.props.onDeletterProduct(id);
    }
    // findIndex = (productDelete,id) =>{
    //     let result = -1;
    //     productDelete.forEach((productDelete,index)=>{
    //         if(productDelete.id === id){
    //             result = index;
    //         }
    //     })
    //     return result;
    // }

    render() {
        // const products = [
        //     {
        //         id:1,
        //         name:"Iphone",
        //         price:240000,
        //         status:true
        //     },
        //     {
        //         id:2,
        //         name:"samsung",
        //         price:30000,
        //         status:false
        //     }
        // ];
        

        // const products = this.state.products;
        const products = this.props.ReducerProducts; // sau khi đã sử dụng redux
        return (
            <div>
                <ProductList>
                    {this.showDataProduct(products)}
                </ProductList>
            </div>
        );
    }
    showDataProduct = (products) => {
        var result = null;
        if(products.length>0){
            result = products.map((value,index) => {
                return <ProductItem 
                    index = {index}
                    id = {value.id}
                    name = {value.name}
                    price = {value.price}
                    status = {value.status}
                    onDelete = {(id) => this.onDelete(id)}
                />
            })
        }
        return result;
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        ReducerProducts: state.ReducerProducts
    }
}
// const mapDispatchToProps = (dispatch, ownProps) => {
//     return {
//         fetchAllProducts: (products) => {
//             dispatch(actFetchProduct(products))
//         }
//     }
// }
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        fetchAllProducts: () => {
            dispatch(actFetchProductRequest())
        },
        onDeletterProduct : (id) => {
            dispatch(actDeleteProductRequest(id))
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(ProductListPage)