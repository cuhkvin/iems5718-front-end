const menuItems = [
  { id: 1, name: "HOME" },
  { id: 2, name: "New" },
  { id: 3, name: "Discover" },
  { id: 4, name: "Animals" },
  { id: 5, name: "Amuseables" },
  { id: 6, name: "Bags & Charms" },
  { id: 7, name: "Baby & Books" },
  { id: 8, name: "Personalized" },
];

const menuList = document.getElementById('menuList');
const leftMenu = document.getElementById('leftMenu');
console.log(menuList,'menuList')
console.log(leftMenu,'leftMenu')
menuItems.forEach(item => {
  const li = document.createElement('li');
  li.textContent = `${item.name}`;
  const li2 = document.createElement('li');
  li2.innerHTML = `
    <a href="index.html" class="card-link"> 
     ${item.name}
    </a>
  `;
  menuList.appendChild(li);
  leftMenu.appendChild(li2);
});

 const cart = [
  { id: 1, name: "Prod2", quantity: 1, price: 100.00,image: "./assets/productImg/wangDog.jpg" },
  { id: 2, name: "Prod3", quantity: 2, price: 50.00,image: "./assets/productImg/wangDog.jpg" },
  { id: 3, name: "Prod2", quantity: 1, price: 100.00,image: "./assets/productImg/wangDog.jpg" },
  { id: 4, name: "Prod3", quantity: 2, price: 50.00,image: "./assets/productImg/wangDog.jpg" },
  { id: 5, name: "Prod2", quantity: 1, price: 100.00,image: "./assets/productImg/wangDog.jpg" },
  { id: 6, name: "Prod3", quantity: 2, price: 50.00,image: "./assets/productImg/wangDog.jpg" },
  { id: 7, name: "Prod2", quantity: 1, price: 100.00,image: "./assets/productImg/wangDog.jpg" },
  { id: 8, name: "Prod3", quantity: 2, price: 50.00,image: "./assets/productImg/wangDog.jpg" }
];

const cartItems = document.getElementById('cartItems');
const cartDropTotal = document.getElementById('cartDropTotal');

function updateCart() {
  let total = 0;
  cartItems.innerHTML = '';

  cart.forEach(item => {
      total += item.quantity * item.price;
      const li = document.createElement('li');
      li.innerHTML = `
          <div class="cart-item">
            <img src="${item.image}" class="cart-img" >
            <span>${item.name}</span>
          </div>
          <span class="quantity-ctrl">
              <button onclick="cutQuantity(${item.id})">-</button>
              <span >${item.quantity}</span>
              <button onclick="addQuantity(${item.id})">+</button>
          </span>
          <span>$${item.price.toFixed(2)}</span>
      `;
      cartItems.appendChild(li);
  });

  cartDropTotal.textContent = total.toFixed(2);
}

function addQuantity(productId) {
  const product = cart.find(item => item.id === productId);
  if (product) {
      product.quantity++;
      updateCart();
  }
}

function cutQuantity(productId) {
  const product = cart.find(item => item.id === productId);
  if (product && product.quantity > 0) {
      product.quantity--;
      if (product.quantity === 0) {
          const index = cart.indexOf(product);
          cart.splice(index, 1);
      }
      updateCart();
  }
}
updateCart();