const STORAGE_KEY = {
  CART_ITEMS: "cart_items",
  SESSIONS: "sessions",
  USERS: "users",
};

function getQueryParams(key) {
  let uri = window.location.search.substring(1);
  let params = new URLSearchParams(uri);

  return params.get(key);
}

function getPaginatedProducts({ pageIndex, pageSize, sortBy, filterBy }) {
  console.log(PRODUCTS);
  const startIndex = pageIndex * pageSize;
  const endIndex = startIndex + pageSize;

  const data = PRODUCTS.slice(startIndex, endIndex);

  return {
    pageIndex,
    total: PRODUCTS.length,
    data: data,
  };
}

const commonStorage = {
  getItem(key) {
    const data = localStorage.getItem(key);

    try {
      return JSON.parse(data);
    } catch (err) {
      return null;
    }
  },
  setItem(key, value) {
    const stringifiedData = JSON.stringify(value);
    localStorage.setItem(key, stringifiedData);
  },
  removeItem(key) {
    localStorage.removeItem(key);
  },
};

const cartService = {
  getCartItems() {
    const cartItems = commonStorage.getItem(STORAGE_KEY.CART_ITEMS);

    if (!cartItems) {
      return [];
    }

    return cartItems;
  },
  addCartItem(item) {
    const cartItems = commonStorage.getItem(STORAGE_KEY.CART_ITEMS);

    if (cartItems) {
      cartItems.push(item);
      commonStorage.setItem(STORAGE_KEY.CART_ITEMS, cartItems);
    } else {
      const newCart = [item];
      commonStorage.setItem(STORAGE_KEY.CART_ITEMS, newCart);
    }
  },
  removeCartItem(item) {
    const cartItems = commonStorage.getItem(STORAGE_KEY.CART_ITEMS);

    if (cartItems) {
      const newCart = cartItems.filter(
        (itemInCart) => itemInCart.id !== item.id
      );
      commonStorage.setItem(STORAGE_KEY.CART_ITEMS, newCart);
    }
  },
  clearCart() {
    commonStorage.removeItem(STORAGE_KEY.CART_ITEMS);
  },
};
const authService = {
  getSession() {
    const session = commonStorage.getItem(STORAGE_KEY.SESSIONS);

    return session;
  },
  getUser(username) {
    const users = commonStorage.getItem(STORAGE_KEY.USERS);

    if (!users) {
      return null;
    }

    const user = users.find((user) => user.username === username);

    return user;
  },
  register({ username, password }) {
    if (!username || !password) {
      return { ok: false };
    }

    let users = commonStorage.getItem(STORAGE_KEY.USERS);

    const newUser = { username, password, createdAt: new Date().getTime() };

    if (users) {
      users.push(newUser);
    } else {
      users = [newUser];
    }

    commonStorage.setItem(STORAGE_KEY.USERS, users);

    return {
      ok: true,
      user: {
        username: newUser.username,
        createdAt: newUser.createdAt,
      },
    };
  },
  login({ username, password }) {
    if (!username || !password) {
      return { ok: false };
    }

    const user = this.getUser(username);

    if (!user) {
      return { ok: false };
    }

    if (user.password !== password) {
      return { ok: false };
    }

    commonStorage.setItem(STORAGE_KEY.SESSIONS, {
      username: username,
      loggedAt: new Date().getTime(),
    });

    return {
      ok: true,
      user: {
        username: username,
      },
    };
  },
  logout() {
    commonStorage.setItem(STORAGE_KEY.SESSIONS, null);
  },
};
