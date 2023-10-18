const initialState = {
    cart: []

}


const updateCart = (state = initialState, action) => {
    console.log("Reducer Action:", action);

    switch (action.type) {
        case "ADDTOCART":
            return {
                ...state,
                cart: [...state.cart, action.payload]
            };
        case "REMOVE":
            return {
                ...state,
                cart: state.cart.filter(item => item.id !== action.payload)
            };

        default:
            return state;
    }
};


export default updateCart