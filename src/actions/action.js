const add = (product)=>{
    console.log("add Action:", { type: "ADDTOCART", payload: product.id });

    return{
        type:"ADDTOCART",
        payload: product
    }
}

export const remove = (movie) => {
    console.log("Remove :", { type: "REMOVE", payload: movie.id });
    return {
      type: "REMOVE",
      payload: movie?.id
    };
  };


  
export default add