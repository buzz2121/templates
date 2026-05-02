document.addEventListener('DOMContentLoaded', () => {
    // ═══════════════════════════════════════════════════════════
    // CART STATE
    // ═══════════════════════════════════════════════════════════
    let cart = JSON.parse(localStorage.getItem('aurel-cart')) || [];

    // ═══════════════════════════════════════════════════════════
    // UI ELEMENTS
    // ═══════════════════════════════════════════════════════════
    const cartToggle = document.getElementById('cart-toggle');
    const cartDrawer = document.getElementById('cart-drawer');
    const cartClose = document.getElementById('cart-close');
    const cartItemsContainer = document.getElementById('cart-items');
    const cartTotalDisplay = document.getElementById('cart-total');
    const cartCountBadge = document.querySelector('.cart-count');
    const checkoutBtn = document.getElementById('checkout-btn');
    const checkoutOverlay = document.getElementById('checkout-overlay');
    const modalClose = document.getElementById('modal-close');
    const checkoutForm = document.getElementById('checkout-form');
    const checkoutFormContainer = document.getElementById('checkout-form-container');
    const orderSuccess = document.getElementById('order-success');
    const checkoutSuccessClose = document.getElementById('success-close');

    // ═══════════════════════════════════════════════════════════
    // CART CORE FUNCTIONS
    // ═══════════════════════════════════════════════════════════

    const saveCart = () => {
        localStorage.setItem('aurel-cart', JSON.stringify(cart));
        updateCartUI();
    };

    const updateCartUI = () => {
        // Clear container
        cartItemsContainer.innerHTML = '';

        if (cart.length === 0) {
            cartItemsContainer.innerHTML = '<p class="text-white/20 text-center py-20 font-sans">Your basket is empty.</p>';
            cartTotalDisplay.textContent = '$0.00';
            cartCountBadge.classList.add('hidden');
            checkoutBtn.disabled = true;
            return;
        }

        let subtotal = 0;
        let totalItems = 0;

        cart.forEach(item => {
            const itemTotal = item.price * item.qty;
            subtotal += itemTotal;
            totalItems += item.qty;

            const itemEl = document.createElement('div');
            itemEl.className = 'cart-item';
            itemEl.innerHTML = `
                <img src="${item.image}" class="cart-item-img object-cover rounded" alt="${item.name}">
                <div class="cart-item-info">
                    <h4 class="cart-item-title">${item.name}</h4>
                    <p class="cart-item-price">$${item.price.toFixed(2)}</p>
                    <div class="cart-item-qty">
                        <button class="qty-btn" data-id="${item.id}" data-action="decrease">-</button>
                        <span class="text-cream text-xs font-sans">${item.qty}</span>
                        <button class="qty-btn" data-id="${item.id}" data-action="increase">+</button>
                    </div>
                </div>
                <button class="text-white/20 hover:text-gold text-xs uppercase tracking-widest font-sans self-start mt-1 remove-btn" data-id="${item.id}">Remove</button>
            `;
            cartItemsContainer.appendChild(itemEl);
        });

        cartTotalDisplay.textContent = `$${subtotal.toFixed(2)}`;
        cartCountBadge.textContent = totalItems;
        cartCountBadge.classList.remove('hidden');
        checkoutBtn.disabled = false;
    };

    const addToCart = (dish) => {
        const existingItem = cart.find(item => item.id === dish.id);
        if (existingItem) {
            existingItem.qty += 1;
        } else {
            cart.push({ ...dish, qty: 1 });
        }
        saveCart();
        openCart();

        // Subtle animation on cart icon
        gsap.fromTo('#cart-toggle svg', { scale: 1 }, { scale: 1.3, duration: 0.1, yoyo: true, repeat: 1 });
    };

    const updateQty = (id, action) => {
        const item = cart.find(item => item.id === id);
        if (item) {
            if (action === 'increase') {
                item.qty += 1;
            } else if (action === 'decrease') {
                item.qty -= 1;
                if (item.qty <= 0) {
                    cart = cart.filter(i => i.id !== id);
                }
            }
            saveCart();
        }
    };

    const removeFromCart = (id) => {
        cart = cart.filter(item => item.id !== id);
        saveCart();
    };

    // ═══════════════════════════════════════════════════════════
    // DRAWER & MODAL TOGGLES
    // ═══════════════════════════════════════════════════════════

    const openCart = () => {
        cartDrawer.classList.add('open');
        document.body.style.overflow = 'hidden';
    };

    const closeCart = () => {
        cartDrawer.classList.remove('open');
        if (!checkoutOverlay.classList.contains('open')) {
            document.body.style.overflow = '';
        }
    };

    const openCheckout = () => {
        closeCart();
        checkoutOverlay.classList.add('open');
        document.body.style.overflow = 'hidden';
        
        // Modal Entrance
        gsap.from('.checkout-modal', {
            y: 40,
            opacity: 0,
            duration: 0.8,
            ease: "power4.out"
        });
    };

    const closeCheckout = () => {
        checkoutOverlay.classList.remove('open');
        document.body.style.overflow = '';
        
        // Reset form success if needed
        setTimeout(() => {
            orderSuccess.classList.add('hidden');
            checkoutFormContainer.classList.remove('hidden');
            checkoutForm.reset();
        }, 500);
    };

    // ═══════════════════════════════════════════════════════════
    // EVENT LISTENERS
    // ═══════════════════════════════════════════════════════════

    // Toggle Cart
    cartToggle?.addEventListener('click', openCart);
    cartClose?.addEventListener('click', closeCart);

    // Add buttons
    document.querySelectorAll('.add-to-cart-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const card = e.target.closest('.dish-card');
            const id = card.dataset.id;
            const name = card.dataset.name;
            const price = parseFloat(card.dataset.price);
            const image = card.dataset.image;

            addToCart({ id, name, price, image });
        });
    });

    // Delegated QTY and Remove events
    cartItemsContainer.addEventListener('click', (e) => {
        if (e.target.classList.contains('qty-btn')) {
            updateQty(e.target.dataset.id, e.target.dataset.action);
        }
        if (e.target.classList.contains('remove-btn')) {
            removeFromCart(e.target.dataset.id);
        }
    });

    // Checkout toggles
    checkoutBtn?.addEventListener('click', openCheckout);
    modalClose?.addEventListener('click', closeCheckout);
    checkoutSuccessClose?.addEventListener('click', closeCheckout);

    // Form Submission
    checkoutForm?.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Simulated order placement
        const btn = checkoutForm.querySelector('button[type="submit"]');
        btn.disabled = true;
        btn.textContent = 'Processing...';

        setTimeout(() => {
            // Success state
            gsap.to(checkoutFormContainer, {
                opacity: 0,
                y: -20,
                duration: 0.5,
                onComplete: () => {
                    checkoutFormContainer.classList.add('hidden');
                    orderSuccess.classList.remove('hidden');
                    gsap.from(orderSuccess, { opacity: 0, y: 20, duration: 0.5 });
                    
                    // Clear cart
                    cart = [];
                    saveCart();
                }
            });
        }, 2000);
    });

    // Initial load
    updateCartUI();
});
