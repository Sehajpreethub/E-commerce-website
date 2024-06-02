document.addEventListener('DOMContentLoaded', () => {
    let slideIndex = 0;
    showSlides();

    function showSlides() {
        let slides = document.querySelectorAll('.slide');
        for (let i = 0; i < slides.length; i++) {
            slides[i].style.display = 'none';
        }
        slideIndex++;
        if (slideIndex > slides.length) {
            slideIndex = 1;
        }
        slides[slideIndex - 1].style.display = 'block';
        setTimeout(showSlides, 3000); // Change slide every 3 seconds
    }

    let cart = [];
    const cartButton = document.getElementById('cart-button');
    const cartCount = document.getElementById('cart-count');
    const cartModal = document.getElementById('cart-modal');
    const cartItems = document.getElementById('cart-items');
    const closeButton = document.getElementsByClassName('close')[0];
    const checkoutButton = document.getElementById('checkout-button');

    const buttons = document.querySelectorAll('.product button, .featured-list button');
    
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const id = button.getAttribute('data-id');
            const name = button.getAttribute('data-name');
            const price = button.getAttribute('data-price');

            addToCart({ id, name, price });
        });
    });

    cartButton.addEventListener('click', () => {
        displayCart();
        cartModal.style.display = 'block';
    });

    closeButton.addEventListener('click', () => {
        cartModal.style.display = 'none';
    });

    window.addEventListener('click', (event) => {
        if (event.target == cartModal) {
            cartModal.style.display = 'none';
        }
    });

    checkoutButton.addEventListener('click', () => {
        alert('Proceeding to checkout!');
        cart = [];
        updateCartCount();
        displayCart();
        cartModal.style.display = 'none';
    });

    function addToCart(product) {
        cart.push(product);
        updateCartCount();
    }

    function updateCartCount() {
        cartCount.innerText = cart.length;
    }

    function displayCart() {
        cartItems.innerHTML = '';
        cart.forEach(item => {
            const itemElement = document.createElement('div');
            itemElement.innerText = ${item.name} - ${item.price};
            cartItems.appendChild(itemElement);
        });
    }
    document.addEventListener('DOMContentLoaded', function() {
        const menuIcon = document.querySelector('.menu-icon');
        const navUl = document.querySelector('nav ul');
    
        menuIcon.addEventListener('click', function() {
            navUl.classList.toggle('show');
        });
    });
    document.addEventListener('DOMContentLoaded', () => {
    const cartButton = document.getElementById('cart-button');
    const cartModal = document.getElementById('cart-modal');
    const closeBtn = document.querySelector('.close');
    const cartCount = document.getElementById('cart-count');
    const cartItems = document.getElementById('cart-items');
    const cartTotal = document.getElementById('cart-total');
    const checkoutButton = document.getElementById('checkout');
    const addToCartButtons = document.querySelectorAll('.product button');
    let cart = [];

    addToCartButtons.forEach(button => {
        button.addEventListener('click', () => {
            const productId = button.getAttribute('data-id');
            const productName = button.getAttribute('data-name');
            const productPrice = parseFloat(button.getAttribute('data-price'));

            const existingProduct = cart.find(item => item.id === productId);
            if (existingProduct) {
                existingProduct.quantity++;
            } else {
                cart.push({ id: productId, name: productName, price: productPrice, quantity: 1 });
            }

            cartCount.textContent = cart.reduce((total, item) => total + item.quantity, 0);
            updateCart();
            showModal();
        });
    });

    closeBtn.addEventListener('click', () => {
        cartModal.style.display = 'none';
    });

    window.addEventListener('click', (event) => {
        if (event.target === cartModal) {
            cartModal.style.display = 'none';
        }
    });

    function updateCart() {
        cartItems.innerHTML = '';
        cart.forEach(item => {
            const itemElement = document.createElement('div');
            itemElement.textContent = ${item.name} - ${item.quantity} x Rs ${item.price};
            cartItems.appendChild(itemElement);
        });

        const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
        cartTotal.textContent = Total: Rs {total.toFixed(2)};
    }

    function showModal() {
        cartModal.style.display = 'block';
        setTimeout(() => {
            cartModal.style.display = 'none';
        }, 2000);
    }
});




});