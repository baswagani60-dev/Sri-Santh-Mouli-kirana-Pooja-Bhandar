function showStore(storeId) {
    const stores = document.querySelectorAll(".store");
    stores.forEach(store => store.classList.add("hidden"));
    document.getElementById(storeId).classList.remove("hidden");
}

let cart = {};

function addToCart(product, price) {
    if (cart[product]) {
        cart[product].qty++;
    } else {
        cart[product] = { price: price, qty: 1 };
    }
    displayCart();
}

function changeQty(product, change) {
    cart[product].qty += change;
    if (cart[product].qty <= 0) {
        delete cart[product];
    }
    displayCart();
}

function displayCart() {
    const cartDiv = document.getElementById("cartItems");
    cartDiv.innerHTML = "";
    let total = 0;

    for (let product in cart) {
        let item = cart[product];
        total += item.price * item.qty;

        cartDiv.innerHTML += `
            <div class="cart-item">
                <span>${product} - ₹${item.price}</span>
                <div>
                    <button class="qty-btn" onclick="changeQty('${product}', -1)">−</button>
                    ${item.qty}
                    <button class="qty-btn" onclick="changeQty('${product}', 1)">+</button>
                </div>
            </div>
        `;
    }

    document.getElementById("totalPrice").textContent = total;
}

function orderWhatsApp() {
    let message = "Order Details:%0A";
    let total = 0;

    for (let product in cart) {
        let item = cart[product];
        total += item.price * item.qty;
        message += `${product} x${item.qty} - ₹${item.price * item.qty}%0A`;
    }

    message += "Total: ₹" + total;
    window.open("https://wa.me/9573842107?text=" + message);
}
