export default function appReducer(state, action) {
  switch (action.type) {
    case "ADD_PRODUCT":
      const newStateAfterAdd = {
        ...state,
        products: [...state.products, action.payload],
      };
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
      return newStateAfterEdit;

    case "REMOVE_PRODUCT":
    // Modify the logic to match and remove the product based on id
    const newStateAfterRemove = {
      ...state,
      products: state.products.filter((product) => product.id !== action.payload),
    };
    return newStateAfterRemove;

    default:
      return state;
  }
}