//actions/index.jsx
export const addCart = (product) => {
  return {
    type: "ADDITEM",
    payload: product,
  };
};
export const delCart = (product) => {
  return {
    type: "DELITEM",
    payload: product,
  };
};
export const delCart0 = (product) => {
  return {
    type: "DELITEM0",
    payload: product,
  };
};
export const delAll = () => {
  return {
    type: "DELALLITEM",
  };
};
