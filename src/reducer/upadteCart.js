const initialState={
    cart:[]

}
const updateCart=(state=initialState, action)=>{
    switch(action.type){
        case "ADDTOCART":
            
            return{

                ...state,cart:[...state.cart, action.payload]

            }
        

        case "REMOVE":
            
                {state.cart = state.cart.filter(i => i.id !==action.payload.id)

                return{
                    ...state
                }
            }
        default:
            return state

    }
}

export default updateCart