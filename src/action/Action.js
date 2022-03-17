
export const addWishList = (name) => {
    return {
        type: "WISH_LIST_ADDER",
        payload: name
    }
}

export const removeWishList = (id) => {
    return {
        type: "WISH_LIST_REMOVER",
        payload: id
    }
}