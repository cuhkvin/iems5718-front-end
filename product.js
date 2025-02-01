const products = [
  { id: 1, name: "WangDog hair conditioner 1", price: 100.00, beforePrice: 1000.00, image: "./assets/productImg/wangDog.jpg" },
  { id: 2, name: "WangDog hair conditioner 2", price: 120.00, beforePrice: 800.00, image: "./assets/productImg/wangDog2.jpg" },
  { id: 3, name: "WangDog hair conditioner 3", price: 90.00, beforePrice: 300.00, image: "./assets/productImg/wangDog3.jpg" },
  { id: 4, name: "WangDog hair conditioner 4", price: 150.00, beforePrice: 500.00, image: "./assets/productImg/wangDog4.jpg" },
  { id: 5, name: "WangDog hair conditioner 5", price: 100.00, beforePrice: 1000.00, image: "./assets/productImg/wangDog5.jpg" },
  { id: 6, name: "WangDog hair conditioner 6", price: 120.00, beforePrice: 800.00, image: "./assets/productImg/wangDog6.jpg" }
]

const cardContainer = document.getElementById('cardContainer')
console.log(cardContainer)
products.forEach(item => {
  const card = document.createElement('div')
  card.classList.add('card')
  card.innerHTML = `
  <a href="details.html?id=${item.id}" class="card-link"> 
    <img src="${item.image}" alt="Cart">
    <h4 title="${item.name}">${item.name}</h4>
    <div class="price"><span>$${item.price}</span><span class="del-line">$${item.beforePrice}</span></div>
    <button class="add-to-cart">Add to Cart</button>
  </a>
  `
    cardContainer?.appendChild(card)
  
  
})


const urlParams = new URLSearchParams(window.location.search);
const productId = parseInt(urlParams.get("id"));


const product = products.find((item) => item.id === productId);
console.log("Product", product);
console.log("Product ID:", productId);

if (product) {
  document.getElementById("lastBreadcrumb").textContent = `Product ${product.id}`;
  document.querySelector(".product-details img").src = product.image;
  document.querySelector(".product-info h2").textContent = product.name;
  document.querySelector(".product-info h3").textContent = `$${product.price}`;
  document.querySelector(".product-info p").innerHTML = `<b>${product.name} </b>is a high-quality hair conditioner for your pet.<br><b>${product.name} </b> is a high-quality hair conditioner for your pet.<br><b>${product.name} </b> is a high-quality hair conditioner for your pet.`;
} else {
  document.querySelector(".product-details").innerHTML = "<p>Product not found.</p>";
}