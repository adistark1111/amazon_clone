import { ADD_TO_CART, EMPTY_CART, REMOVE_FROM_CART, UPDATE_CART } from "./constant"

export const addToCart = (data) => {
    console.warn("action is called", data)
    return {
        type: ADD_TO_CART,
        data
    }
}
export const removeToCart = (data) => {
    console.warn("action removeToCart", data)
    return {
        type: REMOVE_FROM_CART,
        data
    }
}
export const emptyCart = () => {
    console.warn("action emptyCart",)
    return {
        type: EMPTY_CART,
    }
}
// export const updateCart = (data) => {
//     console.warn("action updateCart", data)
//     return {
//     type: UPDATE_CART,
//     data
//     }
// }