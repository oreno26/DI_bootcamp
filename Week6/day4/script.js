const products = [
  {
    id: 0,
    name: "Deluxe Bicycle",
    url: "https://image.shutterstock.com/image-photo/yellow-black-29er-mountainbike-thick-600w-1498702814.jpg",
    price: 499.98,
  },
  {
    id: 1,
    name: "Super Deluxe bagpack",
    url: "https://image.shutterstock.com/image-photo/yellow-school-backpack-isolated-on-600w-534499549.jpg",
    price: 134.99,
  },
  {
    id: 2,
    name: "Super Duper Scooter",
    url: "https://image.shutterstock.com/image-illustration/yellow-retro-vintage-scooter-isolated-600w-1421727647.jpg",
    price: 1090.95,
  },
  {
    id: 3,
    name: "Smartphone",
    url: "https://image.shutterstock.com/image-vector/concept-touch-screen-smartphone-blank-600w-1433190200.jpg",
    price: 399.99,
  },
];
const box = document.getElementById("box");

// Using a self invoking function, and using the DOM - add the products to the page and make them clickable.
// MANDATORY --> add to each item an id and a class attribute.
(function (parameters) {
  products.forEach((item) => {
    const product = document.createElement("div");
    const img = document.createElement("img");
    const name = document.createTextNode(item.name + " ");
    const price = document.createTextNode(item.price);
    img.src = item.url;
    product.classList.add("product");
    product.setAttribute("id", item.id);
    product.addEventListener("click", addtocart);
    product.appendChild(img);
    product.appendChild(name);
    product.appendChild(price);
    box.appendChild(product);
  });
})();
// The user clicks on the item to add them to his cart. The cart is an array of items, saved in the localstorage.
// Each item is an object containing the name of the product and the price.
const cart = [];

function addtocart(e) {
  const tag = e.currentTarget.id;
  const price = products[tag].price;
  const item = products[tag].name;
  const toAdd = {
    item: item,
    price: price,
  };
  cart.push(toAdd);
  localStorage.setItem("Cart", JSON.stringify(cart));
}
// For now, the user can add only 1 product per category (meaning 1 scooter, 1 bicycle ect...)

// When the user is done with his shopping, he will click on the "Pay button" (which is actually an a tag) 
// and it will redirect him to another HTML page.
//  This HTML page is linked to another Javascript file. Using the DOM display :
// all the items that the user bought : MANDATORY --> use object destructuring
// the total price he needs to pay
// a "Submit payment" Button
// When the button is clicked -> add a successful message on the page, and clear all the items from the local storage.

// // Bonus: the user can add multiple times, the same product.
//  --> Each product item will be an object containing the name of the product, the price and the quantity.
