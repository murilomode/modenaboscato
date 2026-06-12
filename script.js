const menuItems = [
  {
    id: "x-bucetao",
    name: "X-Bucetão",
    category: "lanches",
    tag: "Clássico",
    price: 24.9,
    emoji: "🍔",
    theme: "is-hot",
    description: "Pão brioche, hambúrguer 180g, cheddar duplo, bacon crocante e molho da casa.",
    meta: ["180g", "bacon", "cheddar"],
  },
  {
    id: "bucetinha-smash",
    name: "Bucetinha Smash",
    category: "lanches",
    tag: "Smash",
    price: 21.9,
    emoji: "🍔",
    theme: "",
    description: "Dois smash burgers 100g, cheddar, picles e maionese artesanal.",
    meta: ["2 smash", "picles", "maionese"],
  },
  {
    id: "frango-bucetudo",
    name: "Frango Bucetudo",
    category: "lanches",
    tag: "Frango",
    price: 19.9,
    emoji: "🍗",
    theme: "",
    description: "Filezão de frango empanado, queijo prato, alface, tomate e molho rosé.",
    meta: ["empanado", "molho rosé", "queijo"],
  },
  {
    id: "vegetariano-da-p",
    name: "Vegetariano da P",
    category: "lanches",
    tag: "Veggie",
    price: 22.9,
    emoji: "🥬",
    theme: "is-green",
    description: "Hambúrguer de grão-de-bico, queijo coalho grelhado, rúcula e maionese verde.",
    meta: ["grão-de-bico", "rúcula", "coalho"],
  },
  {
    id: "hambuceta",
    name: "Hambuceta",
    category: "lanches",
    tag: "Raiz",
    price: 10,
    emoji: "🍔",
    theme: "",
    description: "Hambúrguer simples da casa, queijo e molho BL no pão tostado.",
    meta: ["simples", "molho BL", "rápido"],
  },
  {
    id: "x-buceta",
    name: "X-Buceta",
    category: "lanches",
    tag: "Raiz",
    price: 12,
    emoji: "🍔",
    theme: "",
    description: "Versão clássica com carne, queijo, salada e molho da casa.",
    meta: ["clássico", "salada", "queijo"],
  },
  {
    id: "buceta-bacon",
    name: "Buceta Bacon",
    category: "lanches",
    tag: "Bacon",
    price: 14,
    emoji: "🥓",
    theme: "is-hot",
    description: "Hambúrguer com bacon crocante, queijo derretido e maionese da casa.",
    meta: ["bacon", "queijo", "maionese"],
  },
  {
    id: "baguete-de-buceta",
    name: "Baguete de Buceta",
    category: "lanches",
    tag: "Baguete",
    price: 13,
    emoji: "🥖",
    theme: "",
    description: "Baguete prensada com carne, queijo, salada e molho verde.",
    meta: ["baguete", "prensado", "molho verde"],
  },
  {
    id: "buceta-duplo",
    name: "Buceta Duplo",
    category: "lanches",
    tag: "Duplo",
    price: 16,
    emoji: "🍔",
    theme: "",
    description: "Dois burgers, queijo em dobro e molho BL.",
    meta: ["2 carnes", "queijo duplo", "molho BL"],
  },
  {
    id: "mega-buceta-burger",
    name: "Mega Buceta Burger",
    category: "lanches",
    tag: "Mega",
    price: 18,
    emoji: "🍔",
    theme: "is-hot",
    description: "Burger grande com bacon, queijo, salada e finalização da chapa.",
    meta: ["grande", "bacon", "chapa"],
  },
  {
    id: "x-taradinho",
    name: "X-Taradinho",
    category: "lanches",
    tag: "Sanduíche",
    price: 12,
    emoji: "🥪",
    theme: "",
    description: "Sanduíche de chapa com queijo, molho da casa e salada crocante.",
    meta: ["chapa", "queijo", "salada"],
  },
  {
    id: "x-cadela",
    name: "X-Cadela",
    category: "lanches",
    tag: "Sanduíche",
    price: 14,
    emoji: "🥪",
    theme: "",
    description: "Sanduíche reforçado com carne, cheddar e cebola dourada.",
    meta: ["cheddar", "cebola", "reforçado"],
  },
  {
    id: "x-enrabado",
    name: "X-Enrabado",
    category: "lanches",
    tag: "Sanduíche",
    price: 16,
    emoji: "🔥",
    theme: "is-hot",
    description: "Sanduíche parrudo com burger duplo, bacon, picles e molho picante.",
    meta: ["duplo", "bacon", "picante"],
  },
  {
    id: "bucetapas",
    name: "Bucetapas",
    category: "acompanhamentos",
    tag: "Batata",
    price: 9.9,
    emoji: "🍟",
    theme: "is-green",
    description: "Batatas rústicas com páprica e queijo ralado.",
    meta: ["rústica", "páprica", "queijo"],
  },
  {
    id: "aneis-de-cebuceta",
    name: "Anéis de Cebuceta",
    category: "acompanhamentos",
    tag: "Cebola",
    price: 11.9,
    emoji: "🧅",
    theme: "",
    description: "Anéis de cebola empanados, crocantes por fora e macios por dentro.",
    meta: ["empanado", "crocante", "porção"],
  },
  {
    id: "mini-bucetoes",
    name: "Mini Bucetões",
    category: "acompanhamentos",
    tag: "Porção",
    price: 17.9,
    emoji: "🍔",
    theme: "",
    description: "Mini burgers da casa para dividir na mesa.",
    meta: ["mini", "para dividir", "molho BL"],
  },
  {
    id: "pastel-de-buceta",
    name: "Pastel de Buceta",
    category: "pasteis",
    tag: "Pastel",
    price: 9,
    emoji: "🥟",
    theme: "",
    description: "Pastel crocante com recheio da casa e molho verde.",
    meta: ["crocante", "molho verde", "clássico"],
  },
  {
    id: "pastel-enrolado",
    name: "Pastel Enrolado",
    category: "pasteis",
    tag: "Pastel",
    price: 11,
    emoji: "🥟",
    theme: "",
    description: "Pastel bem recheado, massa sequinha e finalização na hora.",
    meta: ["bem recheado", "sequinho", "chapa"],
  },
  {
    id: "pastelao-de-buceta",
    name: "Pastelão de Buceta",
    category: "pasteis",
    tag: "Pastelão",
    price: 13,
    emoji: "🥟",
    theme: "is-hot",
    description: "Pastel grande com recheio caprichado e molho da casa.",
    meta: ["grande", "recheado", "molho BL"],
  },
  {
    id: "pastel-caliente",
    name: "Pastel Caliente",
    category: "pasteis",
    tag: "Picante",
    price: 10,
    emoji: "🔥",
    theme: "is-hot",
    description: "Pastel com recheio quente, queijo e toque picante.",
    meta: ["picante", "queijo", "quente"],
  },
  {
    id: "pastel-safadao",
    name: "Pastel Safadão",
    category: "pasteis",
    tag: "Pastel",
    price: 7,
    emoji: "🥟",
    theme: "",
    description: "Pastel simples, crocante e direto ao ponto.",
    meta: ["simples", "crocante", "rápido"],
  },
  {
    id: "pastel-ninfeta",
    name: "Pastel Ninfeta",
    category: "pasteis",
    tag: "Pastel",
    price: 8,
    emoji: "🥟",
    theme: "",
    description: "Pastel leve com queijo, milho e tempero verde.",
    meta: ["leve", "queijo", "tempero verde"],
  },
  {
    id: "pastel-viado",
    name: "Pastel Viado",
    category: "pasteis",
    tag: "Pastel",
    price: 9,
    emoji: "🥟",
    theme: "is-green",
    description: "Pastel colorido da casa com queijo, tomate e orégano.",
    meta: ["queijo", "tomate", "orégano"],
  },
  {
    id: "refrigerante-lata",
    name: "Refrigerante Lata",
    category: "bebidas",
    tag: "Bebida",
    price: 5,
    emoji: "🥤",
    theme: "",
    description: "Coca, Guaraná ou Fanta gelada.",
    meta: ["lata", "gelado", "350ml"],
  },
  {
    id: "cha-de-buceta",
    name: "Chá de Buceta",
    category: "bebidas",
    tag: "Chá",
    price: 6.5,
    emoji: "🧉",
    theme: "is-green",
    description: "Chá da casa com limão, hortelã e bastante gelo.",
    meta: ["limão", "hortelã", "gelado"],
  },
  {
    id: "buceta-tonica",
    name: "Buceta Tônica",
    category: "bebidas",
    tag: "Tônica",
    price: 7,
    emoji: "🥤",
    theme: "",
    description: "Água tônica com infusão de gengibre e laranja.",
    meta: ["gengibre", "laranja", "tônica"],
  },
  {
    id: "suco-gozado",
    name: "Suco Gozado",
    category: "bebidas",
    tag: "Suco",
    price: 6,
    emoji: "🧃",
    theme: "",
    description: "Suco gelado da fruta disponível no dia.",
    meta: ["gelado", "fruta", "natural"],
  },
  {
    id: "bucetinha-bebida",
    name: "Bucetinha",
    category: "bebidas",
    tag: "Bebida",
    price: 7,
    emoji: "🥤",
    theme: "is-green",
    description: "Bebida verde da casa, cítrica e bem gelada.",
    meta: ["cítrica", "verde", "gelada"],
  },
  {
    id: "agua-mineral",
    name: "Água Mineral",
    category: "bebidas",
    tag: "Água",
    price: 4,
    emoji: "💧",
    theme: "",
    description: "Água mineral sem gás.",
    meta: ["500ml", "gelada", "sem gás"],
  },
  {
    id: "agua-de-buceta",
    name: "Água de Buceta",
    category: "bebidas",
    tag: "Água",
    price: 5,
    emoji: "💧",
    theme: "",
    description: "Água com gás, limão e gelo.",
    meta: ["com gás", "limão", "gelo"],
  },
  {
    id: "esperma-suave",
    name: "Esperma Suave",
    category: "bebidas",
    tag: "Drink",
    price: 8,
    emoji: "🥛",
    theme: "",
    description: "Bebida cremosa sem álcool com baunilha e gelo.",
    meta: ["cremoso", "baunilha", "sem álcool"],
  },
  {
    id: "b-porrada",
    name: "B. Porrada",
    category: "bebidas",
    tag: "Bebida",
    price: 6,
    emoji: "🥤",
    theme: "is-hot",
    description: "Bebida cítrica forte, gelada e servida no copo da casa.",
    meta: ["cítrico", "forte", "gelado"],
  },
  {
    id: "mate-erotico",
    name: "Mate Erótico",
    category: "bebidas",
    tag: "Mate",
    price: 5,
    emoji: "🧉",
    theme: "",
    description: "Mate gelado com limão.",
    meta: ["mate", "limão", "gelado"],
  },
  {
    id: "bucetoffee",
    name: "Bucetoffee",
    category: "sobremesas",
    tag: "Sobremesa",
    price: 12.9,
    emoji: "🍮",
    theme: "",
    description: "Banoffee da casa com doce de leite, banana e farofa crocante.",
    meta: ["banana", "doce de leite", "crocante"],
  },
  {
    id: "doce-da-p",
    name: "Doce da P",
    category: "sobremesas",
    tag: "Sobremesa",
    price: 13.9,
    emoji: "🍫",
    theme: "is-hot",
    description: "Brownie quente com sorvete de creme.",
    meta: ["brownie", "sorvete", "quente"],
  },
];

const state = {
  filter: "todos",
  cart: [],
  discount: 0,
};

const currency = new Intl.NumberFormat("pt-BR", {
  style: "currency",
  currency: "BRL",
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});

const header = document.querySelector("[data-header]");
const nav = document.querySelector("[data-nav]");
const menuToggle = document.querySelector("[data-menu-toggle]");
const megaMenu = document.querySelector("[data-mega-menu]");
const loader = document.querySelector("[data-loader]");
const loaderCount = document.querySelector("[data-loader-count]");
const menuGrid = document.querySelector("[data-menu-grid]");
const filterButtons = document.querySelectorAll("[data-filter]");
const cartDrawer = document.querySelector("[data-cart-drawer]");
const cartItems = document.querySelector("[data-cart-items]");
const cartCount = document.querySelector("[data-cart-count]");
const subtotalOutput = document.querySelector("[data-subtotal]");
const discountOutput = document.querySelector("[data-discount]");
const totalOutput = document.querySelector("[data-grand-total]");
const couponForm = document.querySelector("[data-coupon-form]");
const couponNote = document.querySelector("[data-coupon-note]");
const comboForm = document.querySelector("[data-combo-form]");
const comboTotal = document.querySelector("[data-combo-total]");
const chaosBar = document.querySelector("[data-chaos-bar]");
const chaosLabel = document.querySelector("[data-chaos-label]");
const checkoutNote = document.querySelector("[data-checkout-note]");
const toast = document.querySelector("[data-toast]");
const manifestLinks = document.querySelectorAll("[data-manifest-link]");
const manifestPanels = document.querySelectorAll("[data-manifest-panel]");

function money(value) {
  return currency.format(value);
}

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("is-visible");
  window.clearTimeout(showToast.timer);
  showToast.timer = window.setTimeout(() => {
    toast.classList.remove("is-visible");
  }, 2400);
}

function updateHeader() {
  header.classList.toggle("is-scrolled", window.scrollY > 18);
}

function setMenu(open) {
  document.body.classList.toggle("menu-open", open);
  header.classList.toggle("is-open", open);
  nav.classList.toggle("is-open", open);
  megaMenu.classList.toggle("is-open", open);
  megaMenu.setAttribute("aria-hidden", String(!open));
  menuToggle.setAttribute("aria-expanded", String(open));
}

function runLoader() {
  if (!loader || !loaderCount) return;

  let progress = 0;
  const interval = window.setInterval(() => {
    progress = Math.min(100, progress + 10 + Math.ceil(Math.random() * 8));
    loaderCount.textContent = `${progress}%`;
    loader.style.setProperty("--loader-progress", `${progress}%`);

    if (progress >= 100) {
      window.clearInterval(interval);
      window.setTimeout(() => {
        document.body.classList.add("is-loaded");
      }, 220);
    }
  }, 46);
}

function renderMenu() {
  const items =
    state.filter === "todos"
      ? menuItems
      : menuItems.filter((item) => item.category === state.filter);

  menuGrid.innerHTML = items
    .map(
      (item) => `
        <article class="menu-card reveal ${item.theme}" data-emoji="${item.emoji}">
          <span class="item-tag">${item.tag}</span>
          <h3>${item.name}</h3>
          <p>${item.description}</p>
          <div class="item-meta">
            ${item.meta.map((meta) => `<span>${meta}</span>`).join("")}
          </div>
          <div class="card-foot">
            <strong>${money(item.price)}</strong>
            <button type="button" data-add="${item.id}">Adicionar</button>
          </div>
        </article>
      `
    )
    .join("");

  menuGrid.querySelectorAll("[data-add]").forEach((button) => {
    button.addEventListener("click", () => addToCart(button.dataset.add));
  });

  observeReveals(menuGrid.querySelectorAll(".reveal"));
}

function addToCart(id, customItem) {
  const item = customItem || menuItems.find((current) => current.id === id);
  const existing = state.cart.find((current) => current.id === item.id);

  if (existing) {
    existing.quantity += 1;
  } else {
    state.cart.push({ ...item, quantity: 1 });
  }

  renderCart();
  showToast(`${item.name} entrou no carrinho.`);
}

function changeQuantity(id, direction) {
  const item = state.cart.find((current) => current.id === id);
  if (!item) return;

  item.quantity += direction;
  if (item.quantity <= 0) {
    state.cart = state.cart.filter((current) => current.id !== id);
  }

  renderCart();
}

function getSubtotal() {
  return state.cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
}

function renderCart() {
  const subtotal = getSubtotal();
  const fee = subtotal > 0 ? 6 : 0;
  const discount = Math.min(state.discount, subtotal);
  const total = Math.max(0, subtotal + fee - discount);
  const quantity = state.cart.reduce((sum, item) => sum + item.quantity, 0);

  cartCount.textContent = quantity;
  subtotalOutput.textContent = money(subtotal);
  discountOutput.textContent = money(discount);
  totalOutput.textContent = money(total);

  if (state.cart.length === 0) {
    cartItems.innerHTML = '<p class="empty-cart">Seu carrinho ainda esta limpo demais.</p>';
    return;
  }

  cartItems.innerHTML = state.cart
    .map(
      (item) => `
        <article class="cart-line">
          <div>
            <strong>${item.name}</strong>
            <span>${money(item.price)} cada</span>
          </div>
          <div class="qty">
            <button type="button" data-qty="${item.id}" data-dir="-1">-</button>
            <strong>${item.quantity}</strong>
            <button type="button" data-qty="${item.id}" data-dir="1">+</button>
          </div>
        </article>
      `
    )
    .join("");

  cartItems.querySelectorAll("[data-qty]").forEach((button) => {
    button.addEventListener("click", () => {
      changeQuantity(button.dataset.qty, Number(button.dataset.dir));
    });
  });
}

function openCart() {
  document.body.classList.add("cart-open");
  cartDrawer.classList.add("is-open");
  cartDrawer.setAttribute("aria-hidden", "false");
}

function closeCart() {
  document.body.classList.remove("cart-open");
  cartDrawer.classList.remove("is-open");
  cartDrawer.setAttribute("aria-hidden", "true");
}

function updateCombo() {
  const values = [...comboForm.querySelectorAll("input:checked")].map((input) => Number(input.value));
  const total = values.reduce((sum, value) => sum + value, 0);
  const chaos = Math.min(100, Math.round((total / 64) * 100));

  comboTotal.textContent = money(total);
  chaosBar.style.width = `${chaos}%`;

  if (chaos < 58) {
    chaosLabel.textContent = "Caos moderado. Ainda cabe dignidade.";
  } else if (chaos < 82) {
    chaosLabel.textContent = "Caos alto. A chapa ja esta julgando suas escolhas.";
  } else {
    chaosLabel.textContent = "Caos maximo. Pedido digno de sirene.";
  }

  return total;
}

function finalizeOrder() {
  if (state.cart.length === 0) {
    openCart();
    showToast("Adicione pelo menos um item antes de fechar o pedido.");
    return;
  }

  const total = totalOutput.textContent;
  checkoutNote.textContent = `Pedido recebido por ${total}. A casa prepara o retorno do atendimento.`;
  showToast("Pedido fechado. A chapa ja recebeu o recado.");
}

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.18 }
);

function observeReveals(elements = document.querySelectorAll(".reveal")) {
  elements.forEach((element) => revealObserver.observe(element));
}

document.addEventListener("pointermove", (event) => {
  const x = `${Math.round((event.clientX / window.innerWidth) * 100)}%`;
  const y = `${Math.round((event.clientY / window.innerHeight) * 100)}%`;
  document.documentElement.style.setProperty("--mx", x);
  document.documentElement.style.setProperty("--my", y);
});

window.addEventListener("scroll", updateHeader, { passive: true });

menuToggle.addEventListener("click", () => {
  setMenu(!nav.classList.contains("is-open"));
});

nav.addEventListener("click", (event) => {
  if (event.target.matches("a")) setMenu(false);
});

megaMenu.addEventListener("click", (event) => {
  if (event.target.matches("a")) setMenu(false);
});

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    filterButtons.forEach((current) => current.classList.remove("is-active"));
    button.classList.add("is-active");
    state.filter = button.dataset.filter;
    renderMenu();
  });
});

document.querySelectorAll("[data-cart-open]").forEach((button) => {
  button.addEventListener("click", openCart);
});

document.querySelector("[data-cart-close]").addEventListener("click", closeCart);

cartDrawer.addEventListener("click", (event) => {
  if (event.target === cartDrawer) closeCart();
});

couponForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const value = new FormData(couponForm).get("coupon").trim().toUpperCase();

  if (value === "PRIMEIRAFOME") {
    state.discount = 12;
    couponNote.textContent = "Cupom aplicado: R$ 12 de desconto.";
  } else {
    state.discount = 0;
    couponNote.textContent = "Cupom nao encontrado. Tente PRIMEIRAFOME.";
  }

  renderCart();
});

comboForm.addEventListener("change", updateCombo);

comboForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const total = updateCombo();
  addToCart("combo-personalizado", {
    id: `combo-personalizado-${Date.now()}`,
    name: "Combo personalizado",
    category: "combo",
    tag: "Combo",
    price: total,
    emoji: "💥",
    theme: "is-hot",
    description: "Pedido montado no laboratorio do combo.",
    meta: ["custom"],
  });
  openCart();
});

document.querySelectorAll("[data-finalize]").forEach((button) => {
  button.addEventListener("click", finalizeOrder);
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeCart();
    setMenu(false);
  }
});

const manifestObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;

      const current = entry.target.dataset.manifestPanel;
      manifestLinks.forEach((link) => {
        link.classList.toggle("is-active", link.dataset.manifestLink === current);
      });
    });
  },
  { rootMargin: "-35% 0px -45% 0px", threshold: 0.01 }
);

runLoader();
renderMenu();
renderCart();
updateHeader();
updateCombo();
observeReveals();
manifestPanels.forEach((panel) => manifestObserver.observe(panel));
