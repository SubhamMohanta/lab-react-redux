import {ADD_TO_CART} from "./actionType"
export const addToCart = () =>{
    return {
        type: ADD_TO_CART,
        payload: item
    }
}