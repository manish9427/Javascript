import { productsData } from "./productData.js";

// Get the container element where the products will be displayed
const productsContainer = document.getElementById("products-container");

// Loop through the products data and create an HTML element for each product
for (let i = 0; i < productsData.length; i++) {
  const product = productsData[i];

  // Create a div to hold each product
  const productDiv = document.createElement("div");
  productDiv.classList.add("product");

  // Create an image element for the product image
  const image = document.createElement("img");
  image.src = product.image;
  productDiv.appendChild(image);

  // Create a heading element for the product name
  const name = document.createElement("h2");
  name.textContent = product.name;
  productDiv.appendChild(name);

  // Create a paragraph element for the product description
  const description = document.createElement("p");
  description.textContent = product.description;
  productDiv.appendChild(description);

  // Create a paragraph element for the product price
  const price = document.createElement("p");
  price.textContent = "$" + product.price;
  productDiv.appendChild(price);

  // Add the product div to the container
  productsContainer.appendChild(productDiv);
}
