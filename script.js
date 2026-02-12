// --- POLVE 2026: Premium App Logic ---

// Product Data
const products = [
    // --- POLVORONES ---
    {
        id: 'polv-blanca',
        name: 'Polvorones - Bolsita Blanca',
        category: 'polvorones',
        image: 'https://placehold.co/600x600/FFF7ED/A855F7?text=3+Polvorones',
        description: 'La dosis perfecta de amor. 3 polvorones suaves y caseros en presentación transparente.',
        displayPrice: false
    },
    {
        id: 'polv-negra',
        name: 'Polvorones - Bolsa Negra Premium',
        category: 'polvorones',
        image: 'https://placehold.co/600x600/1F2937/FFF?text=10+Polvorones',
        description: 'Elegancia y sabor para compartir. 10 polvorones en nuestra exclusiva bolsa mate.',
        displayPrice: false
    },

    // --- PALOMITAS GOURMET ---
    { id: 'palo-clasica', name: 'Clásicas Mantequilla', category: 'palomitas', price: 55, image: 'https://placehold.co/600x600/FEF3C7/F59E0B?text=Mantequilla' },
    { id: 'palo-salada', name: 'Salada Natural', category: 'palomitas', price: 55, image: 'https://placehold.co/600x600/F3F4F6/9CA3AF?text=Salada' },
    { id: 'palo-queso', name: 'Queso', category: 'palomitas', price: 60, image: 'https://placehold.co/600x600/FEF3C7/F59E0B?text=Queso' },
    { id: 'palo-chorizo', name: 'Chorizo', category: 'palomitas', price: 60, image: 'https://placehold.co/600x600/FECACA/DC2626?text=Chorizo' },
    { id: 'palo-guacamole', name: 'Guacamole', category: 'palomitas', price: 60, image: 'https://placehold.co/600x600/D1FAE5/059669?text=Guacamole' },

    // $65 Varieties
    { id: 'palo-takis', name: 'Takis Fuego', category: 'palomitas', price: 65, image: 'https://placehold.co/600x600/7F1D1D/FFF?text=Takis' },
    { id: 'palo-esquites', name: 'Esquites', category: 'palomitas', price: 65, image: 'https://placehold.co/600x600/FEF3C7/D97706?text=Esquites' },
    { id: 'palo-flamin', name: 'Flamin Hot', category: 'palomitas', price: 65, image: 'https://placehold.co/600x600/EF4444/FFF?text=Flamin+Hot' },
    { id: 'palo-queso-especias', name: 'Queso y Especias', category: 'palomitas', price: 65, image: 'https://placehold.co/600x600/FEF3C7/B45309?text=Queso+Especias' },
    { id: 'palo-habanero-limon', name: 'Habanero Limón', category: 'palomitas', price: 65, image: 'https://placehold.co/600x600/A7F3D0/047857?text=Habanero' },
    { id: 'palo-sal-limon', name: 'Sal y Limón', category: 'palomitas', price: 65, image: 'https://placehold.co/600x600/ECFCCB/65A30D?text=Sal+Limon' },
    { id: 'palo-salsas-negras', name: 'Salsas Negras', category: 'palomitas', price: 65, image: 'https://placehold.co/600x600/D1D5DB/1F2937?text=Salsas+Negras' },
    { id: 'palo-jamron', name: 'Jamón Serrano', category: 'palomitas', price: 65, image: 'https://placehold.co/600x600/FECACA/991B1B?text=Jamon' },
    { id: 'palo-crema-cheddar', name: 'Crema y Cheddar', category: 'palomitas', price: 65, image: 'https://placehold.co/600x600/FEF3C7/EA580C?text=Crema+Cheddar' },
    { id: 'palo-regias', name: 'Regias Norteñas', category: 'palomitas', price: 65, image: 'https://placehold.co/600x600/FEE2E2/B91C1C?text=Regias' },

    // Classics/Sweet $65
    { id: 'palo-caramelo-g', name: 'Caramelo Gourmet', category: 'palomitas', price: 65, image: 'https://placehold.co/600x600/FEF3C7/D97706?text=Caramelo' },
    { id: 'palo-chocolate', name: 'Chocolate', category: 'palomitas', price: 65, image: 'https://placehold.co/600x600/78350F/FFF?text=Chocolate' },
    { id: 'palo-mora', name: 'Mora Azul', category: 'palomitas', price: 65, image: 'https://placehold.co/600x600/DBEAFE/2563EB?text=Mora+Azul' },
    { id: 'palo-algodon', name: 'Algodón de Azúcar', category: 'palomitas', price: 65, image: 'https://placehold.co/600x600/FCE7F3/EC4899?text=Algodon' },
    { id: 'palo-manzana', name: 'Manzana Verde', category: 'palomitas', price: 65, image: 'https://placehold.co/600x600/DCFCE7/16A34A?text=Manzana' },
    { id: 'palo-berry', name: 'Berry\'s Mix', category: 'palomitas', price: 65, image: 'https://placehold.co/600x600/FAE8FF/A855F7?text=Berrys' },

    // Enchilados $65
    { id: 'palo-pina', name: 'Piña Enchilada', category: 'palomitas', price: 65, image: 'https://placehold.co/600x600/FEF9C3/EAB308?text=Pina+Enchilada' },
    { id: 'palo-sandia', name: 'Sandía Enchilada', category: 'palomitas', price: 65, image: 'https://placehold.co/600x600/FECACA/EF4444?text=Sandia' },
    { id: 'palo-mango', name: 'Mango Habanero', category: 'palomitas', price: 65, image: 'https://placehold.co/600x600/FEF3C7/F97316?text=Mango+Hab' },
    { id: 'palo-tamarindo', name: 'Tamarindo Enchilado', category: 'palomitas', price: 65, image: 'https://placehold.co/600x600/92400E/FFF?text=Tamarindo' }
];

// App State
let cart = JSON.parse(localStorage.getItem('polve_cart')) || [];
let userType = localStorage.getItem('polve_user_type') || 'escuela'; // 'escuela' or 'trabajo'
let currentFilter = 'todos';
let searchQuery = '';

// DOM Elements
const cartCountEl = document.querySelector('.cart-count');
const cartItemsListEl = document.querySelector('.cart-items-list');
const productsGrid = document.querySelector('.products-grid');
const filterBtns = document.querySelectorAll('.filter-btn');
const globalSearchInput = document.getElementById('global-search');

// --- HELPER STRINGS ---
function getProductDescription(p) {
    if (p.description) return p.description;
    // Elegant default descriptions
    const flavor = p.name.split(' ')[0];
    return `La explosión perfecta de sabor ${flavor.toLowerCase()}. Crujiente, fresca y hecha con pasión artesanal.`;
}

// --- CORE UTILS ---

function formatPrice(price) {
    return `$${price}.00`;
}

// --- CART LOGIC ---

function saveCart() {
    localStorage.setItem('polve_cart', JSON.stringify(cart));
    updateCartUI();
}

function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    const existing = cart.find(item => item.id === productId);

    if (existing) {
        existing.qty++;
    } else {
        cart.push({ ...product, qty: 1 });
    }

    saveCart();
    // Subtle notification - Could use a toast in future, for now rely on UI badge update
}

function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    saveCart();
}

function updateCartUI() {
    if (!cartCountEl) return;

    const count = cart.reduce((acc, item) => acc + item.qty, 0);
    cartCountEl.textContent = count;
    cartCountEl.style.display = count > 0 ? 'flex' : 'none'; // Hide if 0

    if (cartItemsListEl) {
        if (cart.length === 0) {
            cartItemsListEl.innerHTML = '<div style="padding:1rem; text-align:center; color:#888; font-style:italic; font-size:0.9rem;">Tu selección está vacía</div>';
        } else {
            cartItemsListEl.innerHTML = cart.map(item => `
                <div class="cart-item-row" style="display:flex; justify-content:space-between; align-items:center; border-bottom:1px dashed #eee; padding:0.5rem 0;">
                    <span style="font-size:0.9rem;">${item.name} <small style="color:#888;">x${item.qty}</small></span>
                    <button onclick="removeFromCart('${item.id}')" style="background:none; border:none; color:red; cursor:pointer;">&times;</button>
                </div>
            `).join('');
        }
    }
}

function getUserTypeLabel() {
    return userType === 'escuela' ? 'de la escuela' : 'del trabajo';
}

function getWhatsAppLink() {
    const phone = "5215574123521";
    let message = "";

    if (cart.length === 0) {
        message = `Hola POLVE, soy ${getUserTypeLabel()}, y me gustaría cotizar un pedido especial.`;
    } else {
        const itemsList = cart.map(item => `- ${item.name} (${item.qty})`).join('%0A');
        message = `Hola POLVE, soy ${getUserTypeLabel()}, y me gustaría cotizar mi selección:%0A${itemsList}`;

        // Upsell Logic
        const hasPopcorn = cart.some(item => item.category === 'palomitas');
        const hasPolvoron = cart.some(item => item.category === 'polvorones');

        if (hasPopcorn && !hasPolvoron) {
            message += `%0A%0APD: ¿Me puedes agregar polvorones por $40 extra por favor? ¡Se ven deliciosos!`;
        }
    }

    return `https://wa.me/${phone}?text=${message}`;
}

function quoteCart() {
    window.open(getWhatsAppLink(), '_blank');
}

function quoteProduct(productId) {
    const product = products.find(p => p.id === productId);
    const message = `Hola POLVE, soy ${getUserTypeLabel()}, y me gustaría cotizar: ${product.name}.`;
    const phone = "5215574123521";
    window.open(`https://wa.me/${phone}?text=${message}`, '_blank');
}

// --- SEARCH & FILTER ---

function handleSearch(e) {
    const term = e.target.value.toLowerCase();
    searchQuery = term;

    // If on catalog, re-render. If on other pages, redirect to catalog? 
    // For simplicity, we assume search works dynamically on catalog page.
    // If not on catalog page, we could redirect:
    if (!productsGrid && term.length > 2) {
        window.location.href = `catalogo.html?search=${encodeURIComponent(term)}`;
        return;
    }

    renderProducts();
}

function renderProducts() {
    if (!productsGrid) return;
    productsGrid.innerHTML = '';

    let filtered = products;

    // 1. Filter by Category
    if (currentFilter !== 'todos') {
        filtered = filtered.filter(p => p.category === currentFilter);
    }

    // 2. Filter by Search Query
    if (searchQuery) {
        filtered = filtered.filter(p =>
            p.name.toLowerCase().includes(searchQuery) ||
            (p.description && p.description.toLowerCase().includes(searchQuery))
        );
    }

    if (filtered.length === 0) {
        productsGrid.innerHTML = '<div style="grid-column: 1/-1; text-align:center; padding: 4rem; color: #888;">No encontramos productos con esa descripción. Intenta con "mantequilla" o "polvorones".</div>';
        return;
    }

    filtered.forEach(p => {
        const priceHTML = (p.price !== undefined && p.price !== null)
            ? `<span class="product-price">${formatPrice(p.price)}</span>`
            : '<span class="product-price" style="opacity:0;">Consultar</span>';

        const card = document.createElement('div');
        card.className = 'product-card';
        card.innerHTML = `
            <div class="product-image-container">
                <img src="${p.image}" alt="${p.name}" class="product-image">
            </div>
            <div class="product-info">
                <div class="product-category">${p.category}</div>
                <h3 class="product-title">${p.name}</h3>
                ${priceHTML}
                <div class="product-actions">
                    <button class="btn-card primary" onclick="addToCart('${p.id}')">Añadir</button>
                    <button class="btn-card secondary" onclick="quoteProduct('${p.id}')">Cotizar</button>
                </div>
            </div>
        `;
        productsGrid.appendChild(card);
    });
}

function setFilter(filter) {
    currentFilter = filter;

    filterBtns.forEach(btn => {
        if (btn.dataset.filter === filter) btn.classList.add('active');
        else btn.classList.remove('active');
    });

    renderProducts();
}

function toggleUserType(type) {
    userType = type;
    localStorage.setItem('polve_user_type', type);
    // Visual update for buttons
    document.getElementById('btn-school')?.classList.toggle('active', type === 'escuela');
    document.getElementById('btn-work')?.classList.toggle('active', type === 'trabajo');
}

// --- INIT ---

document.addEventListener('DOMContentLoaded', () => {
    // Check URL Params for Search
    const urlParams = new URLSearchParams(window.location.search);
    const searchParam = urlParams.get('search');

    if (globalSearchInput) {
        globalSearchInput.addEventListener('input', handleSearch);
        if (searchParam) {
            globalSearchInput.value = searchParam;
            searchQuery = searchParam.toLowerCase();
        }
    }

    // Navbar Scroll Effect
    window.addEventListener('scroll', () => {
        const nav = document.getElementById('navbar');
        if (window.scrollY > 50) nav.classList.add('scrolled');
        else nav.classList.remove('scrolled');
    });

    if (filterBtns.length > 0) {
        filterBtns.forEach(btn => {
            btn.addEventListener('click', () => setFilter(btn.dataset.filter));
        });
        renderProducts(); // First render
    }

    toggleUserType(userType); // Set initial visual state
    updateCartUI();
});
