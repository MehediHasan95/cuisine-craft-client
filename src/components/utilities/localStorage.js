const addToDb = (id) => {
  let bookMaekRecipes = getBookMarkRecipes();
  // add quantity
  const quantity = bookMaekRecipes[id];
  if (!quantity) {
    bookMaekRecipes[id] = 1;
  } else {
    const newQuantity = quantity + 1;
    bookMaekRecipes[id] = newQuantity;
  }
  localStorage.setItem("bookmark-recipes", JSON.stringify(bookMaekRecipes));
};

const removeFromDb = (id) => {
  const bookMarkRecipes = getBookMarkRecipes();
  if (id in bookMarkRecipes) {
    delete bookMarkRecipes[id];
    localStorage.setItem("bookmark-recipes", JSON.stringify(bookMarkRecipes));
  }
};

const getBookMarkRecipes = () => {
  let shoppingCart = {};
  //get the shopping cart from local storage
  const storedRecipes = localStorage.getItem("bookmark-recipes");
  if (storedRecipes) {
    shoppingCart = JSON.parse(storedRecipes);
  }
  return shoppingCart;
};

const deleteShoppingCart = () => {
  localStorage.removeItem("bookmark-recipes");
};

export { addToDb, removeFromDb, getBookMarkRecipes, deleteShoppingCart };
