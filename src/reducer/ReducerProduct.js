// const ProductsInitialState = [
//     {
//         id:1,
//         name:'Iphone 6 plus',
//         price:4000000,
//         status:true
//     },
//     {
//         id:2,
//         name:'Samsung galaxy s7',
//         price:787878787,
//         status:false
//     },
//     {
//         id:3,
//         name:'oppo',
//         price:555555,
//         status:true
//     }
// ]
import * as ActionTyle from "../constants/ActionTyle";
const ProductsInitialState = [];

 const findIndex = (productDelete,id) =>{
    let result = -1;
    productDelete.forEach((productDelete,index)=>{
        if(productDelete.id === id){
            result = index;
        }
    })
    return result;
}
const ReducerProducts = (state = ProductsInitialState, action) => {
    var index = -1;
    var {id} = action;
    switch (action.type) {
        case ActionTyle.FETCH_PRODUCT:
            state = action.products;
            return [...state];
        case ActionTyle.DELETE_PRODUCT:
            index = findIndex(state,id);
            state.splice(index,1)
            return [...state];
        default: return [...state];
    }
}
export default ReducerProducts;