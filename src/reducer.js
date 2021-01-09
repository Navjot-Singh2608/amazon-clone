export const initialState = {
  basket: [
    {
      id: "7765437",
      title:
        "All-new Echo Show 10 (3rd Gen) | HD smart display with motion and Alexa | Glacier White",
      price: 345.99,
      rating: 5,
      image:
        "https://images-na.ssl-images-amazon.com/images/I/51YLCGyRYpL._AC_SX679_.jpg"
    }
  ],
  user: null
};

export const getBasketTotal = (basket) =>
  basket?.reduce((amount, item) => item.price + amount, 0);

const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case "ADD_TO_BASKET":
      return { ...state, basket: [...state.basket, action.item] };

    case "REMOVE_FROM_BASKET":
      let newBasket = [...state.basket];
      const index = newBasket.findIndex(
        (basketItem) => basketItem.id === action.id
      );
      if (index >= 0) {
        newBasket.splice(index, 1);
      } else {
      }

      //   newBasket.filter((basket) => basket.id !== action.id);
      return { ...state, basket: newBasket };
    case "SET_USER":
      return {
        ...state,
        user: action.user
      };

    default:
      return state;
  }
};

export default reducer;
