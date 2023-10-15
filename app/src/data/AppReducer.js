export default function appReducer(state, action) {
    switch (action.type) {
      case "ADD_PRODUCT":
        const newStateAfterAdd = {
          ...state,
          products: [...state.products, action.payload],
        };
        console.log("New state after adding product:", newStateAfterAdd);
        return newStateAfterAdd;
  
      case "EDIT_PRODUCT":
        const updatedProduct = action.payload;
        const updatedProducts = state.products.map((product) => {
          if (product.id === updatedProduct.id) {
            return updatedProduct;
          }
          return product;
        });
        const newStateAfterEdit = {
          ...state,
          products: updatedProducts,
        };
        console.log("New state after editing product:", newStateAfterEdit);
        return newStateAfterEdit;
  
      case "REMOVE_PRODUCT":
        const newStateAfterRemove = {
          ...state,
          products: state.products.filter((product) => product.id !== action.payload),
        };
        console.log("New state after removing product:", newStateAfterRemove);
        return newStateAfterRemove;
  
      default:
        return state;
    }
  }