import * as ActionTyle from "../constants/ActionTyle";
import CallApiURL from "../util/CallApiURL";


export const actFetchProductRequest = () =>{
    return (dispatch) => {
        return CallApiURL('GET','products',null).then(res =>{
            dispatch(actFetchProduct(res.data));
        })
    }
}

export const actFetchProduct = (products) =>{
    return {
        type: ActionTyle.FETCH_PRODUCT,
        products
    }
}

export const actDeleteProductRequest = (id) =>{
    return dispatch => {
        return CallApiURL('DELETE',`products/${id}`,null).then(res => {
            dispatch(actDeleteProduct(id))
        })
    }
}

export const actDeleteProduct = (id) =>{
    return {
        type: ActionTyle.DELETE_PRODUCT,
        id
    }
}