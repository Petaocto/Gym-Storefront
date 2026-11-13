// =====================================================
// IronForge Fitness — Storefront Application
// =====================================================

// ---------- 30 Product Data ----------
const products = [
  {
    id: 1,
    name: "Adjustable Dumbbell Set (5–52.5 lbs)",
    category: "strength",
    price: 349.99,
    originalPrice: 449.99,
    image: "https://images.unsplash.com/photo-1586401100295-7a8096fd231a?w=600&h=450&fit=crop",
    rating: 4.9,
    reviews: 824,
    badge: "sale",
    description: "Replace 15 sets of weights with one sleek pair. Quick-change dial system lets you switch resistance in seconds — from warm-up to max effort.",
    features: ["5–52.5 lb range", "Dial-select mechanism", "Compact tray storage", "Durable steel plates", "Ergonomic grip", "Lifetime warranty"]
  },
  {
    id: 2,
    name: "Olympic Power Rack with Pull-Up Bar",
    category: "strength",
    price: 799.99,
    originalPrice: 999.99,
    image: "https://images.unsplash.com/photo-1638536532686-d610adfc8e5c?w=600&h=450&fit=crop",
    rating: 4.8,
    reviews: 612,
    badge: "sale",
    description: "Commercial-grade power rack built with 11-gauge steel. Features 30 height adjustments, integrated pull-up bar, and Westside hole spacing.",
    features: ["11-gauge steel", "1000 lb capacity", "30 height settings", "Band pegs included", "J-hooks & safeties", "Bolt-down option"]
  },
  {
    id: 3,
    name: "Premium Folding Treadmill",
    category: "cardio",
    price: 1299.99,
    originalPrice: 1599.99,
    image: "https://images.unsplash.com/photo-1576678927484-cc907957088c?w=600&h=450&fit=crop",
    rating: 4.7,
    reviews: 458,
    badge: "hot",
    description: "Whisper-quiet motor with 15% incline, cushioned deck, and 10\" HD touchscreen. Folds flat for easy storage in any home gym.",
    features: ["3.5 HP motor", "15% power incline", "10\" HD display", "Foldable design", "Bluetooth speakers", "Heart-rate grips"]
  },
  {
    id: 4,
    name: "Olympic Barbell & Weight Set (300 lbs)",
    category: "strength",
    price: 549.99,
    originalPrice: 699.99,
    image: "https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?w=600&h=450&fit=crop",
    rating: 4.9,
    reviews: 734,
    badge: "sale",
    description: "Competition-spec 45 lb barbell with knurled grip and 255 lbs of rubber-coated Olympic plates. Ready for serious lifts on day one.",
    features: ["45 lb 7-ft barbell", "Rubber-coated plates", "Chrome sleeves", "IPF spec knurl", "Spring clips included", "300 lb total"]
  },
  {
    id: 5,
    name: "Magnetic Resistance Spin Bike",
    category: "cardio",
    price: 699.99,
    originalPrice: 899.99,
    image: "https://images.unsplash.com/photo-1591291621164-2c6367723315?w=600&h=450&fit=crop",
    rating: 4.8,
    reviews: 382,
    badge: "hot",
    description: "Ultra-smooth magnetic resistance system with 36 lb flywheel. Compatible with all major cycling apps for immersive studio-class rides.",
    features: ["36 lb flywheel", "Magnetic resistance", "App compatible", "Adjustable seat", "Toe-cage pedals", "LCD console"]
  },
  {
    id: 6,
    name: "Flat/Incline/Decline Adjustable Bench",
    category: "strength",
    price: 279.99,
    originalPrice: 349.99,
    image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=600&h=450&fit=crop",
    rating: 4.7,
    reviews: 498,
    badge: null,
    description: "Seven back-pad positions from −20° decline to 85° military press. Heavy-duty steel frame supports up to 1100 lbs.",
    features: ["7 positions", "1100 lb capacity", "Decline to 85°", "Thick padding", "Transport wheels", "Compact footprint"]
  },
  {
    id: 7,
    name: "Battle Ropes (40 ft × 1.5 in)",
    category: "accessories",
    price: 79.99,
    originalPrice: 109.99,
    image: "https://images.unsplash.com/photo-1517963879433-6ad2b056d712?w=600&h=450&fit=crop",
    rating: 4.6,
    reviews: 267,
    badge: null,
    description: "Poly-dacron rope with protective sleeve ends and heavy-duty anchor kit. Build explosive power with wave, slam, and spiral drills.",
    features: ["40 ft length", "1.5 in diameter", "Anchor kit included", "Heat-shrink grips", "Weather-resistant", "Full-body cardio"]
  },
  {
    id: 8,
    name: "Compact Rowing Machine",
    category: "cardio",
    price: 899.99,
    originalPrice: 1099.99,
    image: "https://images.unsplash.com/photo-1519505907962-0a6cb0167c73?w=600&h=450&fit=crop",
    rating: 4.8,
    reviews: 396,
    badge: "sale",
    description: "Air + magnetic hybrid resistance with damper control. Folds upright for space-saving storage and features an ergonomic contoured seat.",
    features: ["Hybrid resistance", "Folds upright", "Performance monitor", "Ergonomic seat", "Adjustable footrests", "Low noise"]
  },
  {
    id: 9,
    name: "Kettlebell Set (5, 10, 15, 20, 25 lbs)",
    category: "strength",
    price: 189.99,
    originalPrice: 249.99,
    image: "https://images.unsplash.com/photo-1517344884509-a0c97ec11bcc?w=600&h=450&fit=crop",
    rating: 4.7,
    reviews: 543,
    badge: null,
    description: "Cast-iron bells with color-coded vinyl coating for floor protection. Wide flat bases prevent rolling — perfect for swings, cleans, and Turkish get-ups.",
    features: ["5 weight tiers", "Vinyl coating", "Flat base design", "Wide handle", "Color-coded", "Cast iron core"]
  },
  {
    id: 10,
    name: "Resistance Bands Set (11-Piece)",
    category: "accessories",
    price: 39.99,
    originalPrice: 59.99,
    image: "https://images.unsplash.com/photo-1598289431512-b97b0917affc?w=600&h=450&fit=crop",
    rating: 4.5,
    reviews: 1208,
    badge: "new",
    description: "Five stackable tube bands up to 150 lbs combined resistance, plus handles, ankle straps, and door anchor. Travel-friendly pouch included.",
    features: ["150 lbs combined", "Snap-proof latex", "Padded handles", "Door anchor", "Ankle straps", "Carry pouch"]
  },
  {
    id: 11,
    name: "Functional Trainer Cable Machine",
    category: "strength",
    price: 1899.99,
    originalPrice: 2299.99,
    image: "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?w=600&h=450&fit=crop",
    rating: 4.9,
    reviews: 214,
    badge: "sale",
    description: "Dual 200 lb weight stacks with adjustable pulleys for 100+ exercises. Compact footprint makes it the centerpiece of any serious home gym.",
    features: ["Dual 200 lb stacks", "Adjustable pulleys", "100+ exercises", "Cable crossover", "Lat pulldown bar", "Low row handle"]
  },
  {
    id: 12,
    name: "Air Assault Fan Bike",
    category: "cardio",
    price: 599.99,
    originalPrice: 749.99,
    image: "https://images.unsplash.com/photo-1591258370814-01f195948456?w=600&h=450&fit=crop",
    rating: 4.6,
    reviews: 312,
    badge: null,
    description: "Unlimited air resistance scales with effort. Dual-action arms engage upper and lower body simultaneously for devastating HIIT sessions.",
    features: ["Air resistance", "Dual-action arms", "Steel frame", "LCD monitor", "Adjustable seat", "Transport wheels"]
  },
  {
    id: 13,
    name: "Premium Yoga Mat (6mm, Non-Slip)",
    category: "accessories",
    price: 49.99,
    originalPrice: null,
    image: "https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?w=600&h=450&fit=crop",
    rating: 4.8,
    reviews: 892,
    badge: "new",
    description: "High-density TPE foam with dual-texture surfaces — smooth for floor poses, textured for grip. Alignment markers help perfect your form.",
    features: ["6mm thickness", "Non-slip texture", "Alignment marks", "Eco-friendly TPE", "Carry strap", "72 × 24 inches"]
  },
  {
    id: 14,
    name: "Hex Dumbbell Set with Rack (5–50 lbs)",
    category: "strength",
    price: 699.99,
    originalPrice: 849.99,
    image: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=600&h=450&fit=crop",
    rating: 4.8,
    reviews: 367,
    badge: null,
    description: "Ten pairs of rubber hex dumbbells on a sturdy 3-tier A-frame rack. Hex ends prevent rolling and chrome contour handles fit any grip.",
    features: ["10 pairs included", "Rubber hex heads", "3-tier rack", "Chrome handles", "Anti-roll design", "5 lb increments"]
  },
  {
    id: 15,
    name: "Foam Roller & Massage Ball Set",
    category: "recovery",
    price: 34.99,
    originalPrice: 49.99,
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=600&h=450&fit=crop",
    rating: 4.6,
    reviews: 678,
    badge: null,
    description: "High-density 18-inch foam roller with trigger-point ridges plus lacrosse ball and peanut ball for targeted deep-tissue myofascial release.",
    features: ["18\" roller", "Trigger-point grid", "Lacrosse ball", "Peanut ball", "EVA foam", "Carry bag"]
  },
  {
    id: 16,
    name: "Wall-Mounted Pull-Up / Chin-Up Bar",
    category: "strength",
    price: 89.99,
    originalPrice: 119.99,
    image: "https://images.unsplash.com/photo-1597452485669-2c7bb5fef90d?w=600&h=450&fit=crop",
    rating: 4.7,
    reviews: 543,
    badge: "new",
    description: "Multi-grip wall-mount station with wide, narrow, neutral, and angled grips. Supports up to 500 lbs and extends 22 inches from the wall.",
    features: ["4 grip positions", "500 lb capacity", "Wall-mounted", "Foam grips", "All hardware incl.", "Powder-coated steel"]
  },
  {
    id: 17,
    name: "Smart Jump Rope with LED Counter",
    category: "accessories",
    price: 29.99,
    originalPrice: 44.99,
    image: "https://images.unsplash.com/photo-1517963879433-6ad2b056d712?w=600&h=450&fit=crop",
    rating: 4.5,
    reviews: 934,
    badge: "new",
    description: "Ball-bearing handles with built-in LED counter display rotations, time, and calories in real time. Adjustable PVC cable fits any height.",
    features: ["LED display", "Ball bearings", "Calorie counter", "Adjustable cable", "Memory function", "Lightweight design"]
  },
  {
    id: 18,
    name: "Plyo Box Set (20/24/30 in)",
    category: "strength",
    price: 199.99,
    originalPrice: 249.99,
    image: "https://images.unsplash.com/photo-1599058917765-a780eda07a3e?w=600&h=450&fit=crop",
    rating: 4.7,
    reviews: 289,
    badge: null,
    description: "Three stackable foam-core plyo boxes with anti-slip vinyl exteriors. Firm enough to land on, soft enough to protect your shins on misses.",
    features: ["3-box set", "Anti-slip vinyl", "Foam core", "Stackable", "Shin-safe design", "High-density foam"]
  },
  {
    id: 19,
    name: "Elliptical Cross Trainer",
    category: "cardio",
    price: 1099.99,
    originalPrice: 1399.99,
    image: "https://images.unsplash.com/photo-1570829460005-c840387bb1ca?w=600&h=450&fit=crop",
    rating: 4.7,
    reviews: 278,
    badge: "sale",
    description: "Whisper-smooth stride with 20-inch path and 25 resistance levels. Dual LCD screens track heart rate, distance, and watts for perfect pacing.",
    features: ["20\" stride length", "25 resistance levels", "Dual LCD screens", "Heart-rate grips", "Transport wheels", "Quiet operation"]
  },
  {
    id: 20,
    name: "Ab Roller Pro with Knee Pad",
    category: "accessories",
    price: 24.99,
    originalPrice: 34.99,
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=450&fit=crop",
    rating: 4.4,
    reviews: 1456,
    badge: null,
    description: "Extra-wide dual wheel for stability, ergonomic foam handles, and thick knee pad. Engages abs, obliques, and lower back in every rep.",
    features: ["Dual-wheel design", "Wide for stability", "Foam grips", "Knee pad included", "Steel axle", "Compact storage"]
  },
  {
    id: 21,
    name: "Percussion Massage Gun Pro",
    category: "recovery",
    price: 199.99,
    originalPrice: 299.99,
    image: "https://images.unsplash.com/photo-1616279969862-30fa6e4a0e82?w=600&h=450&fit=crop",
    rating: 4.8,
    reviews: 1023,
    badge: "hot",
    description: "Brushless motor delivers 3200 percussions/min across 5 speeds. Six interchangeable heads target every muscle group for rapid recovery.",
    features: ["3200 RPM max", "5 speed settings", "6 head attachments", "Ultra-quiet motor", "4-hour battery", "Carrying case"]
  },
  {
    id: 22,
    name: "Adjustable Weight Vest (20 lbs)",
    category: "accessories",
    price: 69.99,
    originalPrice: 89.99,
    image: "https://images.unsplash.com/photo-1550345332-09e3ac987658?w=600&h=450&fit=crop",
    rating: 4.6,
    reviews: 412,
    badge: null,
    description: "Evenly distributed iron-sand pockets with adjustable 1 lb increments. Breathable mesh keeps you cool during runs, pull-ups, and burpees.",
    features: ["1–20 lb adjustable", "Breathable mesh", "Reflective strips", "Velcro closure", "Shoulder padding", "One-size-fits-most"]
  },
  {
    id: 23,
    name: "Smith Machine with Cable Crossover",
    category: "strength",
    price: 2499.99,
    originalPrice: 2999.99,
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600&h=450&fit=crop",
    rating: 4.9,
    reviews: 156,
    badge: "sale",
    description: "All-in-one home gym system — guided Smith bar, dual cable columns, pull-up station, and landmine attachment. Replaces an entire commercial floor.",
    features: ["Smith bar + cables", "Linear bearings", "Pull-up station", "Landmine attach.", "Band pegs", "Plate storage"]
  },
  {
    id: 24,
    name: "Exercise Ball (65 cm, Anti-Burst)",
    category: "accessories",
    price: 22.99,
    originalPrice: null,
    image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=600&h=450&fit=crop",
    rating: 4.5,
    reviews: 786,
    badge: null,
    description: "Anti-burst PVC stability ball rated to 2200 lbs. Great for core work, balance training, stretching, and even as a desk chair alternative.",
    features: ["65 cm diameter", "Anti-burst rated", "2200 lb capacity", "Quick-inflate pump", "Non-slip surface", "PVC material"]
  },
  {
    id: 25,
    name: "Stairmaster Step Climber",
    category: "cardio",
    price: 1799.99,
    originalPrice: 2199.99,
    image: "https://images.unsplash.com/photo-1518310383802-640c2de311b2?w=600&h=450&fit=crop",
    rating: 4.8,
    reviews: 189,
    badge: "hot",
    description: "Revolving staircase with 20 resistance levels and 10 built-in programs. Burns more calories per minute than almost any other cardio machine.",
    features: ["Revolving stairs", "20 levels", "10 programs", "Heart-rate monitor", "Oversized pedals", "300 lb capacity"]
  },
  {
    id: 26,
    name: "Compression Recovery Boots",
    category: "recovery",
    price: 449.99,
    originalPrice: 599.99,
    image: "https://images.unsplash.com/photo-1517963879433-6ad2b056d712?w=600&h=450&fit=crop",
    rating: 4.7,
    reviews: 234,
    badge: "new",
    description: "Sequential pneumatic compression from feet to thighs. Four pressure levels and five program modes reduce soreness and accelerate recovery between sessions.",
    features: ["4 pressure levels", "5 program modes", "Full-leg coverage", "60-min timer", "Rechargeable", "Travel bag included"]
  },
  {
    id: 27,
    name: "Trap / Hex Bar (Open-End Design)",
    category: "strength",
    price: 179.99,
    originalPrice: 229.99,
    image: "https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?w=600&h=450&fit=crop",
    rating: 4.8,
    reviews: 298,
    badge: null,
    description: "Open-end hex bar with raised and low handles for deadlifts, shrugs, and farmer carries. Rackable sleeve ends fit standard power racks.",
    features: ["Dual handles", "Open-end design", "Rackable sleeves", "750 lb capacity", "Chrome finish", "Knurled grips"]
  },
  {
    id: 28,
    name: "Compact Under-Desk Elliptical",
    category: "cardio",
    price: 179.99,
    originalPrice: 229.99,
    image: "https://images.unsplash.com/photo-1576678927484-cc907957088c?w=600&h=450&fit=crop",
    rating: 4.4,
    reviews: 567,
    badge: "new",
    description: "Stay active at work with this whisper-quiet under-desk elliptical. Bluetooth app tracks steps, distance, and calories while you sit.",
    features: ["Under-desk design", "Bluetooth app", "8 resistance levels", "Whisper quiet", "Non-slip pedals", "Compact size"]
  },
  {
    id: 29,
    name: "Infrared Sauna Blanket",
    category: "recovery",
    price: 299.99,
    originalPrice: 399.99,
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=600&h=450&fit=crop",
    rating: 4.6,
    reviews: 345,
    badge: "hot",
    description: "Far-infrared heating blanket reaches 176°F for deep detox sessions. Low-EMF design with auto-shutoff and washable velour insert.",
    features: ["Far-infrared heat", "Up to 176°F", "Low EMF", "Auto shut-off", "Washable insert", "60-min timer"]
  },
  {
    id: 30,
    name: "Gymnastic Ring Set (Wood, 1.25 in)",
    category: "strength",
    price: 59.99,
    originalPrice: 79.99,
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600&h=450&fit=crop",
    rating: 4.7,
    reviews: 421,
    badge: null,
    description: "Birch-wood Olympic rings with numbered cam-buckle straps (15 ft). Premium grip without chalk — perfect for dips, muscle-ups, and ring rows.",
    features: ["Birch wood", "1.25\" diameter", "15 ft straps", "Cam buckles", "Numbered straps", "Non-slip texture"]
  }
];

// ---------- State ----------
let cart = [];
let wishlist = [];
let currentFilter = 'all';
let currentSort = 'featured';
let modalQty = 1;
let currentModalProduct = null;

// ---------- DOM Refs ----------
const productsGrid = document.getElementById('productsGrid');
const cartCount = document.getElementById('cartCount');
const wishlistCount = document.getElementById('wishlistCount');
const cartBtn = document.getElementById('cartBtn');
const wishlistBtn = document.getElementById('wishlistBtn');
const cartSidebar = document.getElementById('cartSidebar');
const cartOverlay = document.getElementById('cartOverlay');
const closeCartBtn = document.getElementById('closeCart');
const cartItems = document.getElementById('cartItems');
const cartFooter = document.getElementById('cartFooter');
const cartSubtotal = document.getElementById('cartSubtotal');
const cartShipping = document.getElementById('cartShipping');
const cartTotal = document.getElementById('cartTotal');
const searchInput = document.getElementById('searchInput');
const sortSelect = document.getElementById('sortSelect');
const filterPills = document.querySelectorAll('.pill');
const navbar = document.getElementById('navbar');
const backToTop = document.getElementById('backToTop');
const toast = document.getElementById('toast');
const toastMessage = document.getElementById('toastMessage');
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const navLinks = document.getElementById('navLinks');

// Modal
const productModal = document.getElementById('productModal');
const modalOverlay = document.getElementById('modalOverlay');
const modalClose = document.getElementById('modalClose');

// ---------- Render Products ----------
function renderProducts() {
    let filtered = [...products];

    // Filter
    if (currentFilter !== 'all') {
        filtered = filtered.filter(p => p.category === currentFilter);
    }

    // Search
    const query = searchInput.value.toLowerCase().trim();
    if (query) {
        filtered = filtered.filter(p =>
            p.name.toLowerCase().includes(query) ||
            p.category.toLowerCase().includes(query) ||
            p.description.toLowerCase().includes(query)
        );
    }

    // Sort
    switch (currentSort) {
        case 'price-low': filtered.sort((a, b) => a.price - b.price); break;
        case 'price-high': filtered.sort((a, b) => b.price - a.price); break;
        case 'rating': filtered.sort((a, b) => b.rating - a.rating); break;
        case 'name': filtered.sort((a, b) => a.name.localeCompare(b.name)); break;
    }

    if (filtered.length === 0) {
        productsGrid.innerHTML = `
            <div style="grid-column:1/-1;text-align:center;padding:80px 20px;color:var(--text-muted)">
                <i class="fas fa-search" style="font-size:48px;margin-bottom:16px;opacity:0.3;display:block"></i>
                <p style="font-size:18px;margin-bottom:8px">No equipment found</p>
                <span>Try adjusting your search or filters</span>
            </div>`;
        return;
    }

    productsGrid.innerHTML = filtered.map((p, i) => {
        const isWishlisted = wishlist.includes(p.id);
        const inCart = cart.find(c => c.id === p.id);
        const stars = '★'.repeat(Math.floor(p.rating)) + (p.rating % 1 >= 0.5 ? '½' : '');
        let badgeHTML = '';
        if (p.badge === 'sale') badgeHTML = '<span class="badge badge-sale">Sale</span>';
        else if (p.badge === 'new') badgeHTML = '<span class="badge badge-new">New</span>';
        else if (p.badge === 'hot') badgeHTML = '<span class="badge badge-hot">🔥 Hot</span>';

        const discount = p.originalPrice ? Math.round((1 - p.price / p.originalPrice) * 100) : 0;

        return `
        <div class="product-card" style="animation-delay:${i * 0.05}s" data-id="${p.id}">
            <div class="product-image-container">
                <img src="${p.image}" alt="${p.name}" loading="lazy">
                <div class="product-badges">${badgeHTML}</div>
                <div class="product-quick-actions">
                    <button class="quick-action-btn ${isWishlisted ? 'wishlisted' : ''}"
                            onclick="toggleWishlist(${p.id}, event)"
                            title="${isWishlisted ? 'Remove from wishlist' : 'Add to wishlist'}">
                        <i class="${isWishlisted ? 'fas' : 'far'} fa-heart"></i>
                    </button>
                    <button class="quick-action-btn" onclick="openModal(${p.id})" title="Quick view">
                        <i class="fas fa-eye"></i>
                    </button>
                </div>
            </div>
            <div class="product-info">
                <span class="product-category">${p.category}</span>
                <h3 class="product-name">${p.name}</h3>
                <div class="product-rating">
                    <span class="product-stars">${stars}</span>
                    <span>${p.rating} (${p.reviews})</span>
                </div>
                <div class="product-price-row">
                    <div class="product-price">
                        <span class="current-price">$${p.price.toFixed(2)}</span>
                        ${p.originalPrice ? `<span class="original-price">$${p.originalPrice.toFixed(2)}</span>` : ''}
                    </div>
                    <button class="add-to-cart-btn ${inCart ? 'added' : ''}"
                            onclick="addToCart(${p.id}, event)"
                            title="${inCart ? 'In cart' : 'Add to cart'}">
                        <i class="fas ${inCart ? 'fa-check' : 'fa-plus'}"></i>
                    </button>
                </div>
            </div>
        </div>`;
    }).join('');
}

// ---------- Cart ----------
function addToCart(id, event) {
    if (event) event.stopPropagation();
    const product = products.find(p => p.id === id);
    const existing = cart.find(c => c.id === id);
    if (existing) {
        existing.qty += 1;
    } else {
        cart.push({ ...product, qty: 1 });
    }
    updateCartUI();
    renderProducts();
    showToast(`${product.name} added to cart!`);
}

function removeFromCart(id) {
    cart = cart.filter(c => c.id !== id);
    updateCartUI();
    renderProducts();
}

function changeCartQty(id, delta) {
    const item = cart.find(c => c.id === id);
    if (!item) return;
    item.qty += delta;
    if (item.qty <= 0) {
        removeFromCart(id);
        return;
    }
    updateCartUI();
}

function updateCartUI() {
    const total = cart.reduce((s, c) => s + c.qty, 0);
    cartCount.textContent = total;

    if (cart.length === 0) {
        cartItems.innerHTML = `
            <div class="empty-cart">
                <i class="fas fa-shopping-bag"></i>
                <p>Your cart is empty</p>
                <span>Add some equipment to get started!</span>
            </div>`;
        cartFooter.style.display = 'none';
        return;
    }

    cartFooter.style.display = 'block';
    cartItems.innerHTML = cart.map(item => `
        <div class="cart-item">
            <img src="${item.image}" alt="${item.name}" class="cart-item-img">
            <div class="cart-item-details">
                <h4>${item.name}</h4>
                <span class="item-price">$${(item.price * item.qty).toFixed(2)}</span>
                <div class="cart-item-controls">
                    <button class="qty-btn" onclick="changeCartQty(${item.id}, -1)">−</button>
                    <span>${item.qty}</span>
                    <button class="qty-btn" onclick="changeCartQty(${item.id}, 1)">+</button>
                    <button class="remove-item-btn" onclick="removeFromCart(${item.id})">
                        <i class="fas fa-trash-alt"></i>
                    </button>
                </div>
            </div>
        </div>
    `).join('');

    const subtotal = cart.reduce((s, c) => s + c.price * c.qty, 0);
    const shipping = subtotal >= 99 ? 0 : 9.99;
    cartSubtotal.textContent = `$${subtotal.toFixed(2)}`;
    cartShipping.textContent = shipping === 0 ? 'FREE' : `$${shipping.toFixed(2)}`;
    cartTotal.textContent = `$${(subtotal + shipping).toFixed(2)}`;
}

function openCart() {
    cartSidebar.classList.add('open');
    cartOverlay.classList.add('open');
    document.body.style.overflow = 'hidden';
}
function closeCart() {
    cartSidebar.classList.remove('open');
    cartOverlay.classList.remove('open');
    document.body.style.overflow = '';
}

// ---------- Wishlist ----------
function toggleWishlist(id, event) {
    if (event) event.stopPropagation();
    const idx = wishlist.indexOf(id);
    const product = products.find(p => p.id === id);
    if (idx > -1) {
        wishlist.splice(idx, 1);
        showToast(`Removed from wishlist`);
    } else {
        wishlist.push(id);
        showToast(`${product.name} added to wishlist ❤️`);
    }
    wishlistCount.textContent = wishlist.length;
    renderProducts();
}

// ---------- Modal ----------
function openModal(id) {
    currentModalProduct = products.find(p => p.id === id);
    modalQty = 1;
    const p = currentModalProduct;

    document.getElementById('modalImage').src = p.image;
    document.getElementById('modalImage').alt = p.name;
    document.getElementById('modalCategory').textContent = p.category;
    document.getElementById('modalName').textContent = p.name;

    const stars = '★'.repeat(Math.floor(p.rating)) + (p.rating % 1 >= 0.5 ? '½' : '');
    document.getElementById('modalRating').innerHTML = `
        <span style="color:#fbbf24">${stars}</span>
        <span style="color:var(--text-muted);font-size:14px">${p.rating} · ${p.reviews} reviews</span>
    `;

    document.getElementById('modalDescription').textContent = p.description;
    document.getElementById('modalPrice').textContent = `$${p.price.toFixed(2)}`;

    const origEl = document.getElementById('modalOriginalPrice');
    const discEl = document.getElementById('modalDiscount');
    if (p.originalPrice) {
        origEl.textContent = `$${p.originalPrice.toFixed(2)}`;
        origEl.style.display = '';
        const disc = Math.round((1 - p.price / p.originalPrice) * 100);
        discEl.textContent = `-${disc}%`;
        discEl.style.display = '';
    } else {
        origEl.style.display = 'none';
        discEl.style.display = 'none';
    }

    let badgesHTML = '';
    if (p.badge === 'sale') badgesHTML = '<span class="badge badge-sale">Sale</span>';
    else if (p.badge === 'new') badgesHTML = '<span class="badge badge-new">New</span>';
    else if (p.badge === 'hot') badgesHTML = '<span class="badge badge-hot">🔥 Hot</span>';
    document.getElementById('modalBadges').innerHTML = badgesHTML;

    document.getElementById('modalFeatures').innerHTML = `
        <ul>${p.features.map(f => `<li>${f}</li>`).join('')}</ul>
    `;

    document.getElementById('modalQty').textContent = modalQty;
    document.getElementById('modalAddToCart').onclick = () => {
        for (let i = 0; i < modalQty; i++) addToCart(p.id);
        closeModal();
    };

    productModal.classList.add('open');
    modalOverlay.classList.add('open');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    productModal.classList.remove('open');
    modalOverlay.classList.remove('open');
    document.body.style.overflow = '';
    currentModalProduct = null;
}

function changeModalQty(delta) {
    modalQty = Math.max(1, modalQty + delta);
    document.getElementById('modalQty').textContent = modalQty;
}

// ---------- Filter & Sort ----------
function filterByCategory(cat) {
    currentFilter = cat;
    // Update pills
    filterPills.forEach(pill => {
        pill.classList.toggle('active', pill.dataset.filter === cat);
    });
    // Update nav
    document.querySelectorAll('.nav-links a').forEach(a => {
        a.classList.toggle('active', a.dataset.filter === cat);
    });
    renderProducts();
    document.getElementById('products').scrollIntoView({ behavior: 'smooth' });
}

filterPills.forEach(pill => {
    pill.addEventListener('click', () => filterByCategory(pill.dataset.filter));
});

document.querySelectorAll('.nav-links a').forEach(a => {
    a.addEventListener('click', e => {
        e.preventDefault();
        filterByCategory(a.dataset.filter);
    });
});

sortSelect.addEventListener('change', () => {
    currentSort = sortSelect.value;
    renderProducts();
});

searchInput.addEventListener('input', () => renderProducts());

// ---------- Toast ----------
let toastTimer;
function showToast(msg) {
    toastMessage.textContent = msg;
    toast.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => toast.classList.remove('show'), 2500);
}

// ---------- Checkout ----------
function checkout() {
    showToast('🎉 Checkout initiated! (Demo)');
    closeCart();
}

// ---------- Newsletter ----------
function handleNewsletter(e) {
    e.preventDefault();
    const input = e.target.querySelector('input');
    showToast(`Subscribed with ${input.value}! 🎉`);
    input.value = '';
}

// ---------- Scroll Effects ----------
window.addEventListener('scroll', () => {
    // Navbar
    navbar.classList.toggle('scrolled', window.scrollY > 50);
    // Back to top
    backToTop.classList.toggle('show', window.scrollY > 600);
});

backToTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// ---------- Cart Events ----------
cartBtn.addEventListener('click', openCart);
closeCartBtn.addEventListener('click', closeCart);
cartOverlay.addEventListener('click', closeCart);
modalOverlay.addEventListener('click', closeModal);
modalClose.addEventListener('click', closeModal);

// Esc key
document.addEventListener('keydown', e => {
    if (e.key === 'Escape') {
        closeCart();
        closeModal();
    }
});

// ---------- Mobile Menu ----------
mobileMenuBtn.addEventListener('click', () => {
    navLinks.classList.toggle('mobile-open');
});

// ---------- Init ----------
renderProducts();
