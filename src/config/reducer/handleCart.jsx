import React from "react";

const cart = [
  // {
  //   id: 1,
  //   title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
  //   price: 109.95,
  //   description:
  //     "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
  //   category: "men's clothing",
  //   image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
  //   rating: {
  //     rate: 3.9,
  //     count: 120,
  //   },
  // },
  // {
  //   id: 2,
  //   title: "Mens Casual Premium Slim Fit T-Shirts ",
  //   price: 22.3,
  //   description:
  //     "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
  //   category: "men's clothing",
  //   image:
  //     "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
  //   rating: {
  //     rate: 4.1,
  //     count: 259,
  //   },
  // },
  // {
  //   id: 3,
  //   title: "Mens Cotton Jacket",
  //   price: 55.99,
  //   description:
  //     "great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.",
  //   category: "men's clothing",
  //   image: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
  //   rating: {
  //     rate: 4.7,
  //     count: 500,
  //   },
  // },
];

const handleCart = (state = cart, action) => {
  const product = action.payload;
  switch (action.type) {
    case "ADDITEM":
      // check if product is already exist
      const exist = state.find((x) => x.id === product.id);
      if (exist) {
        // increase quantity
        return state.map((x) =>
          x.id === product.id ? { ...x, qty: x.qty + 1 } : x
        );
      } else {
        const product = action.payload;
        return [
          ...state,
          {
            ...product,
            qty: 1,
          },
        ];
      }
      break;

    case "DELITEM":
      const exist1 = state.find((x) => x.id === product.id);
      if (exist1.qty === 1) {
        return state.filter((x) => x.id !== exist1.id);
      } else {
        return state.map((x) =>
          x.id === product.id ? { ...x, qty: x.qty - 1 } : x
        );
      }
      break;

    case "DELITEM0":
      const exist0 = state.find((x) => x.id === product.id);
      return state.filter((x) => x.id !== exist0.id);

    case "DELALLITEM":
      return []
      break;
    default:
      return state;
      break;
  }
};

export default handleCart;
