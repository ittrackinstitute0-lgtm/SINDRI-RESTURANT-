/**
 * SINDRI RESTAURANT - INTERACTIVE SCRIPT
 * Handles Menu filtering, Dish Quick View Modals,
 * Live Cart Drawer with Pakistani Rupee (PKR / Rs.) calculations,
 * Table Reservation logic, and Scroll Animations.
 */

document.addEventListener('DOMContentLoaded', () => {
  // =========================================================================
  // AUTHENTIC PAKISTANI DISHES DATA (NO DUMMY DISHES, REAL PKR PRICES)
  // =========================================================================
  const dishes = [
    {
      id: 1,
      name: "Sindhi Shahi Mutton Biryani",
      urduName: "سندھی مٹن بریانی",
      category: "signature",
      price: 1650,
      image: "assets/images/biryani.jpg",
      spiceLevel: "🌶️🌶️🌶️ Medium-Hot",
      spiceCount: 3,
      badge: "House Signature",
      serves: "Serves 1-2 persons",
      description: "Authentic long-grain Basmati rice infused with fragrant saffron, tender bone-in goat mutton, dried sour plums (Aloo Bukhara), marinated golden potatoes, and roasted cumin.",
      ingredients: "Premium Aged Basmati Rice, Goat Mutton, Aloo Bukhara (Plums), Fried Onions (Birista), Green Chilies, Mint, Saffron Kewra Water, Sindhi Garam Masala.",
      pairing: "Kachumber Salad & Zeera Mint Raita"
    },
    {
      id: 2,
      name: "Nalli Nihari Khaas",
      urduName: "شاہی نلی نہاری",
      category: "signature",
      price: 1850,
      image: "assets/images/nihari.jpg",
      spiceLevel: "🌶️🌶️ Aromatic Mild-Hot",
      spiceCount: 2,
      badge: "Overnight Slow Cook",
      serves: "Serves 1-2 persons",
      description: "A royal recipe simmered for 12 hours overnight. Velvety shank cuts steeped in spiced bone marrow gravy, enriched with mace, nutmeg, and stone flowers. Topped with hot bone marrow.",
      ingredients: "Prime Beef Shank, Bone Marrow, Nihari Masala (Star Anise, Mace, Nutmeg, Pipli), Pure Desi Ghee, Ginger Julienne, Green Chilies, Lemon Wedges.",
      pairing: "Tandoori Roghani Naan"
    },
    {
      id: 3,
      name: "Shahi Koyla Karahi (Desi Murg)",
      urduName: "شاہی کوئلہ کڑاہی",
      category: "karahi",
      price: 2450,
      image: "assets/images/karahi.jpg",
      spiceLevel: "🌶️🌶️🌶️ Desi Spicy",
      spiceCount: 3,
      badge: "Live Charcoal Smoke",
      serves: "Serves 3-4 persons (1 Kg)",
      description: "Cooked in traditional heavy cast iron wok over high flames with ripe red tomatoes, ginger slivers, and green chillies, infused with the smoky essence of live embers and desi ghee.",
      ingredients: "Fresh Country Chicken (Desi Murg), Ripe Plum Tomatoes, Green Chilies, Ginger, Crushed Black Peppercorn, Desi Ghee, Smoked with Charcoal Ember.",
      pairing: "Garlic Butter Naan & Mint Raita"
    },
    {
      id: 4,
      name: "Mutton Handi Lazeez",
      urduName: "مٹن ہانڈی لذیذ",
      category: "karahi",
      price: 2750,
      image: "assets/images/handi.jpg",
      spiceLevel: "🌶️🌶️ Mild & Creamy",
      spiceCount: 2,
      badge: "Clay Pot Cooked",
      serves: "Serves 3-4 persons",
      description: "Boneless prime mutton cubes gently simmered in an unglazed earthenware Handi with creamy strained yogurt, blended cashews, white pepper, and fenugreek leaves (Kasuri Methi).",
      ingredients: "Boneless Mutton, Fresh Milk Cream, Cashew Paste, Greek Yogurt, Kasuri Methi, Cardamom, White Pepper, Pure Butter.",
      pairing: "Sesame Roghani Naan"
    },
    {
      id: 5,
      name: "Balochi Sajji with Fragrant Rice",
      urduName: "بلوچی سجی مع چاول",
      category: "signature",
      price: 2200,
      image: "assets/images/sajji.jpg",
      spiceLevel: "🌶️ Mild & Smoky",
      spiceCount: 1,
      badge: "Balochistan Heritage",
      serves: "Serves 3-4 persons (Full Bird)",
      description: "Whole skinless chicken skewered and roasted slowly on glowing wood embers, seasoned only with rock salt, carom seeds, and raw papaya. Stuffed and served on spiced basmati rice.",
      ingredients: "Whole Farm Chicken, Black Rock Salt, Ajwain, Cumin, Lemon Juice, Long Grain Pulao Rice, Sindri Special Tangy Chutney.",
      pairing: "Kandahari Naan & Vinegar Onion Salad"
    },
    {
      id: 6,
      name: "Peshawari Chapli Kabab (Twin Patties)",
      urduName: "پشاوری چپلی کباب",
      category: "bbq",
      price: 1350,
      image: "assets/images/kebab.jpg",
      spiceLevel: "🌶️🌶️🌶️ Spicy & Juicy",
      spiceCount: 3,
      badge: "Peshawar Bazaar Recipe",
      serves: "2 Large Pieces (Serves 2)",
      description: "Coarsely ground beef hand-kneaded with crushed whole coriander, wild pomegranate seeds (Anardana), fresh tomatoes, and green chilies, shallow-fried on heavy iron flat tawa.",
      ingredients: "Minced Beef with Marrow Fat, Wild Pomegranate Seeds (Anardana), Coarse Coriander, Crushed Red Chili Flakes, Fresh Tomatoes, Scallions, Maize Flour.",
      pairing: "Fresh Mint Tamarind Chutney & Naan"
    },
    {
      id: 7,
      name: "Royal Mutton Seekh Kebab",
      urduName: "سیخ کباب سلطانی",
      category: "bbq",
      price: 1480,
      image: "assets/images/kebab.jpg",
      spiceLevel: "🌶️🌶️ Medium Spice",
      spiceCount: 2,
      badge: "Sigri Grilled",
      serves: "4 Skewers (Serves 2)",
      description: "Mouth-melting minced goat meat blended with caramelized brown onions, fresh mint leaves, green chilies, and royal Mughal spices, flame-roasted on flat steel skewers over red hot charcoal.",
      ingredients: "Fresh Goat Mince, Mint Leaves, Brown Onions, Green Cardamom, Nutmeg, Desi Ghee Basting, Papaya Marinade.",
      pairing: "Laccha Paratha & Coriander Dip"
    },
    {
      id: 8,
      name: "Tandoori Roghani & Garlic Butter Naan",
      urduName: "روغنی نان و کلچہ",
      category: "tandoor",
      price: 220,
      image: "assets/images/naan.jpg",
      spiceLevel: "Gentle Sweet & Savory",
      spiceCount: 0,
      badge: "Tandoor Fresh",
      serves: "Per Basket (2 Breads)",
      description: "Traditional leavened flatbreads patted by hand and baked against the scalding terracotta walls of our clay tandoor. Brushed with warm desi ghee, toasted sesame, and fresh minced garlic.",
      ingredients: "Fine Flour, Milk, Eggs, Yeast, Ghee Glaze, White Sesame Seeds, Kalonji (Nigella Seeds), Fresh Garlic.",
      pairing: "Complements all Karahis & Handis"
    },
    {
      id: 9,
      name: "Karak Doodh Patti & Leaf Biscuit Platter",
      urduName: "سندھڑی خاص کڑک چائے اور بسکٹ",
      category: "beverages",
      price: 480,
      image: "assets/images/entrance_hero.png",
      spiceLevel: "Cardamom Fragrant",
      spiceCount: 0,
      badge: "Entrance Welcome Ritual",
      serves: "Serves 1-2 persons",
      description: "Our signature Pakistani welcome tradition! Fresh buffalo milk slow-brewed on low flame with crushed green cardamom and strong black tea leaves. Served with our handmade leaf-grooved butter biscuits.",
      ingredients: "Full-Fat Buffalo Milk, Premium Black Tea Leaves, Green Cardamom Pods, Saffron Strings, Fresh Baked Almond Butter Leaf Biscuits.",
      pairing: "Traditional High-Tea & Welcome Starter"
    },
    {
      id: 10,
      name: "Kashmiri Noon Chai (Pink Tea)",
      urduName: "کشمیری گلابی چائے",
      category: "beverages",
      price: 550,
      image: "assets/images/kashmiri_chai.jpg",
      spiceLevel: "Rich, Creamy & Nutty",
      spiceCount: 0,
      badge: "Kashmiri Royal",
      serves: "Serves 1 person",
      description: "Brewed for hours with special Kashmiri green tea leaves, sea salt, clotted cream froth (balai), and crushed pistachios and almonds. Naturally turns a gentle velvety rose-pink.",
      ingredients: "Kashmiri Green Tea Leaves, Baking Soda, Whole Milk, Crushed Almonds & Pistachios, Saffron, Salted Cream Foam.",
      pairing: "Bakery Nankhatai or Kulcha"
    },
    {
      id: 11,
      name: "Shahi Kheer & Zafrani Gulab Jamun",
      urduName: "شاہی کھیر اور گلاب جامن",
      category: "desserts",
      price: 650,
      image: "assets/images/dessert.jpg",
      spiceLevel: "Sweet & Saffron Infused",
      spiceCount: 0,
      badge: "Clay Kasora Meetha",
      serves: "Serves 2 persons",
      description: "Slow-reduced milk pudding layered with crushed rice, cardamom, and rose water in unglazed clay bowls, accompanied by hot, golden-brown gulab jamuns soaked in saffron sugar syrup.",
      ingredients: "Slow-Cooked Whole Milk, Basmati Rice, Green Cardamom, Kewra Essence, Khoya (Mawa), Saffron Syrup, Pistachio Garnish, Silver Vark.",
      pairing: "Ideal finale after Karahi & Biryani"
    },
    {
      id: 12,
      name: "Peshawari Shinwari Namkeen Tikka",
      urduName: "شنواری نمکین ٹکہ",
      category: "bbq",
      price: 1950,
      image: "assets/images/kebab.jpg",
      spiceLevel: "🌶️ Pure Natural Salted",
      spiceCount: 1,
      badge: "Shinwari Tribe Tradition",
      serves: "Serves 2 persons",
      description: "The pride of Khyber Pass: Fresh cuts of mutton loin grilled over smoldering white charcoal with no artificial marinades—seasoned purely with natural fat, coarse rock salt, and green chilies.",
      ingredients: "Fresh Mountain Lamb Ribs/Loin, Lamb Fat Skewers, Coarse Mountain Salt, Whole Green Chilies.",
      pairing: "Tandoori Roghani Naan & Lemon Wedges"
    }
  ];

  // =========================================================================
  // STATE MANAGEMENT (CART & CURRENT MODAL)
  // =========================================================================
  let cart = [];
  const GST_RATE = 0.16; // 16% Provincial Services Sales Tax in Pakistan

  // DOM Elements
  const menuGrid = document.getElementById('menuGrid');
  const filterBtns = document.querySelectorAll('.filter-btn');
  const cartIconBtn = document.getElementById('cartIconBtn');
  const cartDrawer = document.getElementById('cartDrawer');
  const cartCloseBtn = document.getElementById('cartCloseBtn');
  const cartItemsList = document.getElementById('cartItemsList');
  const cartBadge = document.getElementById('cartBadge');
  const cartSubtotalEl = document.getElementById('cartSubtotal');
  const cartTaxEl = document.getElementById('cartTax');
  const cartTotalEl = document.getElementById('cartTotal');
  const dishModal = document.getElementById('dishModal');
  const dishModalClose = document.getElementById('dishModalClose');
  const reservationForm = document.getElementById('reservationForm');
  const siteHeader = document.getElementById('siteHeader');
  const mobileToggle = document.getElementById('mobileToggle');
  const navLinks = document.getElementById('navLinks');
  const backToTopBtn = document.getElementById('backToTopBtn');
  const toastNotice = document.getElementById('toastNotice');
  const toastMessage = document.getElementById('toastMessage');

  // =========================================================================
  // RENDER MENU CARDS
  // =========================================================================
  function renderMenu(items) {
    if (!menuGrid) return;
    menuGrid.innerHTML = '';

    items.forEach(dish => {
      const card = document.createElement('div');
      card.className = 'dish-card filtered-in';
      card.setAttribute('data-id', dish.id);
      card.setAttribute('data-category', dish.category);

      card.innerHTML = `
        <div class="dish-image-wrap">
          <img src="${dish.image}" alt="${dish.name}" loading="lazy">
          <span class="badge-dusty-pink dish-floating-tag">
            <i class="fa-solid fa-star"></i> ${dish.badge}
          </span>
          <span class="dish-spice-meter">
            ${dish.spiceLevel}
          </span>
        </div>
        <div class="dish-info">
          <div class="dish-header">
            <div class="dish-title-group">
              <h3>${dish.name}</h3>
              <span class="urdu-subtitle">${dish.urduName}</span>
            </div>
            <div class="dish-price">
              <span class="currency">Rs.</span>${dish.price.toLocaleString()}
            </div>
          </div>
          <p class="dish-description">${dish.description}</p>
          <div class="dish-meta-row">
            <span class="dish-serves">
              <i class="fa-solid fa-users" style="color: var(--ancient-gold);"></i> ${dish.serves}
            </span>
            <div class="dish-actions">
              <button class="dish-quick-view-btn" data-action="quick-view" data-id="${dish.id}" title="View Dish Story & Ingredients">
                <i class="fa-solid fa-eye"></i>
              </button>
              <button class="btn btn-caramel btn-sm" data-action="add-cart" data-id="${dish.id}">
                <i class="fa-solid fa-plus"></i> Add
              </button>
            </div>
          </div>
        </div>
      `;

      menuGrid.appendChild(card);
    });
  }

  // Initial render
  renderMenu(dishes);

  // =========================================================================
  // CATEGORY FILTERING
  // =========================================================================
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filterCategory = btn.getAttribute('data-filter');
      if (filterCategory === 'all') {
        renderMenu(dishes);
      } else {
        const filtered = dishes.filter(d => d.category === filterCategory);
        renderMenu(filtered);
      }
    });
  });

  // =========================================================================
  // DISH QUICK VIEW MODAL
  // =========================================================================
  function openDishModal(dishId) {
    const dish = dishes.find(d => d.id === parseInt(dishId));
    if (!dish) return;

    document.getElementById('modalDishImage').src = dish.image;
    document.getElementById('modalDishImage').alt = dish.name;
    document.getElementById('modalDishTag').innerHTML = `<i class="fa-solid fa-crown"></i> ${dish.badge}`;
    document.getElementById('modalDishTitle').textContent = dish.name;
    document.getElementById('modalDishUrdu').textContent = dish.urduName;
    document.getElementById('modalDishPrice').textContent = `Rs. ${dish.price.toLocaleString()}`;
    document.getElementById('modalDishDesc').textContent = dish.description;
    document.getElementById('modalDishIngredients').textContent = dish.ingredients;
    document.getElementById('modalDishPairing').textContent = dish.pairing;
    document.getElementById('modalDishSpice').textContent = dish.spiceLevel;

    // Hook modal Add to Cart button
    const modalAddBtn = document.getElementById('modalAddToCartBtn');
    modalAddBtn.onclick = () => {
      addToCart(dish.id);
      closeModal();
    };

    dishModal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    dishModal.classList.remove('active');
    document.body.style.overflow = '';
  }

  if (dishModalClose) {
    dishModalClose.addEventListener('click', closeModal);
  }

  if (dishModal) {
    dishModal.addEventListener('click', (e) => {
      if (e.target === dishModal) closeModal();
    });
  }

  // Delegate clicks on Menu Grid
  if (menuGrid) {
    menuGrid.addEventListener('click', (e) => {
      const quickViewBtn = e.target.closest('[data-action="quick-view"]');
      const addCartBtn = e.target.closest('[data-action="add-cart"]');

      if (quickViewBtn) {
        const id = quickViewBtn.getAttribute('data-id');
        openDishModal(id);
      } else if (addCartBtn) {
        const id = addCartBtn.getAttribute('data-id');
        addToCart(parseInt(id));
      }
    });
  }

  // =========================================================================
  // SHOPPING CART (PKR CALCULATIONS)
  // =========================================================================
  function addToCart(dishId) {
    const dish = dishes.find(d => d.id === dishId);
    if (!dish) return;

    const existingIndex = cart.findIndex(item => item.id === dishId);
    if (existingIndex > -1) {
      cart[existingIndex].qty += 1;
    } else {
      cart.push({ ...dish, qty: 1 });
    }

    updateCartUI();
    showToast(`Added ${dish.name} to Dastarkhwan order!`);
  }

  function changeQty(dishId, delta) {
    const item = cart.find(i => i.id === dishId);
    if (!item) return;

    item.qty += delta;
    if (item.qty <= 0) {
      cart = cart.filter(i => i.id !== dishId);
    }
    updateCartUI();
  }

  function updateCartUI() {
    const totalItems = cart.reduce((acc, item) => acc + item.qty, 0);
    cartBadge.textContent = totalItems;

    if (cart.length === 0) {
      cartItemsList.innerHTML = `
        <div class="empty-cart-message">
          <i class="fa-solid fa-bowl-food"></i>
          <h4>Your Dastarkhwan is Empty</h4>
          <p>Explore our royal dishes and add your favorites to feast!</p>
        </div>
      `;
      cartSubtotalEl.textContent = 'Rs. 0';
      cartTaxEl.textContent = 'Rs. 0';
      cartTotalEl.textContent = 'Rs. 0';
      return;
    }

    cartItemsList.innerHTML = '';
    let subtotal = 0;

    cart.forEach(item => {
      const itemTotal = item.price * item.qty;
      subtotal += itemTotal;

      const itemEl = document.createElement('div');
      itemEl.className = 'cart-item';
      itemEl.innerHTML = `
        <img src="${item.image}" alt="${item.name}" class="cart-item-thumb">
        <div class="cart-item-details">
          <h4>${item.name}</h4>
          <div class="price">Rs. ${item.price.toLocaleString()} x ${item.qty} = Rs. ${itemTotal.toLocaleString()}</div>
        </div>
        <div class="cart-item-qty">
          <button class="qty-btn" onclick="window.changeItemQty(${item.id}, -1)">-</button>
          <span>${item.qty}</span>
          <button class="qty-btn" onclick="window.changeItemQty(${item.id}, 1)">+</button>
        </div>
      `;
      cartItemsList.appendChild(itemEl);
    });

    const tax = Math.round(subtotal * GST_RATE);
    const total = subtotal + tax;

    cartSubtotalEl.textContent = `Rs. ${subtotal.toLocaleString()}`;
    cartTaxEl.textContent = `Rs. ${tax.toLocaleString()}`;
    cartTotalEl.textContent = `Rs. ${total.toLocaleString()}`;
  }

  // Global helper for inline cart button clicks
  window.changeItemQty = changeQty;

  // Drawer Toggle
  if (cartIconBtn) {
    cartIconBtn.addEventListener('click', () => {
      cartDrawer.classList.add('active');
    });
  }

  if (cartCloseBtn) {
    cartCloseBtn.addEventListener('click', () => {
      cartDrawer.classList.remove('active');
    });
  }

  // Direct checkout button
  const checkoutBtn = document.getElementById('checkoutBtn');
  if (checkoutBtn) {
    checkoutBtn.addEventListener('click', () => {
      if (cart.length === 0) {
        showToast("Please add items to your cart first!");
        return;
      }

      const total = cartTotalEl.textContent;
      const orderSummary = cart.map(i => `${i.qty}x ${i.name} (Rs. ${i.price * i.qty})`).join('%0A');
      const waText = `Assalam-o-Alaikum Sindri Restaurant!%0A%0AI would like to place an order:%0A${orderSummary}%0A%0ATotal: ${total}%0APlease confirm my order!`;

      // Simulating order confirmation
      showToast("Order dispatched! Opening WhatsApp confirmation...");
      setTimeout(() => {
        window.open(`https://wa.me/923001234567?text=${waText}`, '_blank');
      }, 1000);
    });
  }

  // =========================================================================
  // TOAST NOTIFICATIONS
  // =========================================================================
  let toastTimeout;
  function showToast(message) {
    if (!toastNotice || !toastMessage) return;
    toastMessage.textContent = message;
    toastNotice.classList.add('show');

    clearTimeout(toastTimeout);
    toastTimeout = setTimeout(() => {
      toastNotice.classList.remove('show');
    }, 3800);
  }

  // =========================================================================
  // RESERVATION FORM HANDLING
  // =========================================================================
  if (reservationForm) {
    reservationForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const name = document.getElementById('resName').value;
      const guests = document.getElementById('resGuests').value;
      const date = document.getElementById('resDate').value;
      const time = document.getElementById('resTime').value;
      const tableType = document.getElementById('resType').value;

      const bookingId = 'SNDR-' + Math.floor(1000 + Math.random() * 9000);

      showToast(`Shukriya, ${name}! Your table for ${guests} guests (${tableType}) is reserved. Booking Ref: ${bookingId}`);

      reservationForm.reset();
    });
  }

  // =========================================================================
  // SCROLL EFFECTS & NAVBAR
  // =========================================================================
  window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll > 60) {
      siteHeader.classList.add('scrolled');
      backToTopBtn.classList.add('visible');
    } else {
      siteHeader.classList.remove('scrolled');
      backToTopBtn.classList.remove('visible');
    }

    // Scroll Spy for nav links
    const sections = document.querySelectorAll('section[id]');
    sections.forEach(section => {
      const sectionHeight = section.offsetHeight;
      const sectionTop = section.offsetTop - 120;
      const sectionId = section.getAttribute('id');
      const navLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);

      if (navLink && currentScroll >= sectionTop && currentScroll < sectionTop + sectionHeight) {
        document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
        navLink.classList.add('active');
      }
    });
  });

  // Back to top click
  if (backToTopBtn) {
    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // Mobile menu toggle
  if (mobileToggle) {
    mobileToggle.addEventListener('click', () => {
      navLinks.classList.toggle('active');
      const icon = mobileToggle.querySelector('i');
      if (navLinks.classList.contains('active')) {
        icon.classList.remove('fa-bars');
        icon.classList.add('fa-xmark');
      } else {
        icon.classList.remove('fa-xmark');
        icon.classList.add('fa-bars');
      }
    });
  }

  // Close mobile menu on link click
  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('active');
      if (mobileToggle) {
        const icon = mobileToggle.querySelector('i');
        icon.classList.remove('fa-xmark');
        icon.classList.add('fa-bars');
      }
    });
  });

  // =========================================================================
  // SCROLL REVEAL OBSERVER
  // =========================================================================
  const observerOptions = {
    threshold: 0.15,
    rootMargin: "0px 0px -40px 0px"
  };

  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersectEvent || entry.isIntersecting) {
        entry.target.classList.add('revealed');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  document.querySelectorAll('.reveal-item, .reveal-item-left, .reveal-item-right, .reveal-item-scale, .section-header').forEach(el => {
    revealObserver.observe(el);
  });

  // Quick Action Buttons (e.g. from Entrance story or Hero)
  const welcomeChaiOrderBtn = document.getElementById('welcomeChaiOrderBtn');
  if (welcomeChaiOrderBtn) {
    welcomeChaiOrderBtn.addEventListener('click', () => {
      addToCart(9); // ID 9 is the Karak Doodh Patti & Leaf Biscuit Platter
    });
  }

  // Newsletter form submission
  const newsletterForm = document.getElementById('newsletterForm');
  if (newsletterForm) {
    newsletterForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const input = newsletterForm.querySelector('input');
      if (input.value) {
        showToast("Khushamdeed! You're subscribed to Sindri Royal Dawat updates.");
        input.value = '';
      }
    });
  }
});
