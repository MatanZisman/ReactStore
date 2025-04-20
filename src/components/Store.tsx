import {create} from "zustand";
import {CartItem} from "@/types/CartItem";

type CartState = {
  cart: CartItem[];
  inWallet: number;
  addToCart: (product: CartItem) => void;
  removeFromCart: (product: CartItem) => void;
  clearCart: () => void;
  cartIsEmpty: () => boolean;
  getCartCount: () => number;
  getCartQuantity: () => number;
  setWallet: (product: CartItem) => void;
  decreaseQuantity: (product: CartItem) => void;
  increaseQuantity: (product: CartItem) => void;
};

export const useCartStore = create<CartState>((set, get) => ({
  cart: (() => {
    try {
      const storedCart = localStorage.getItem("cart");
      return storedCart ? JSON.parse(storedCart) : [];
    } catch {
      return [];
    }
  })(),
  inWallet: (() => { return 2000000 })(),

  setWallet: (product: CartItem) => {
    set((state) => {
      const cart = state.cart;
      let inWallet = state.inWallet;
      const existing = cart.find((item) => item.name === product.name)

      if (existing) {
        inWallet = inWallet - ( existing.quantity * existing.price);
      }
      return {inWallet};
    })
  },

  getWallet: () => get().inWallet,

  addToCart: (product: CartItem) => {
    set((state) => {
      let cart = [...state.cart];
      const existing = cart.find((item) => item.name === product.name);

      if (existing) {
        existing.quantity += 1;
      } else {
        cart = [...cart, { ...product, quantity: 1 }];
      }

      localStorage.setItem("cart", JSON.stringify(cart));
      return {cart};
    });
  },

  removeFromCart: (product: CartItem) => {
    set((state) => {
      let cart = state.cart.filter(
        (item) => item.name !== product.name,
      );
      localStorage.setItem("cart", JSON.stringify(cart));
      return {cart};
    });
  },

  clearCart: () => {
    localStorage.removeItem("cart");
    set({ cart: [] });
  },

  getCartCount: () => get().cart.length,

  cartIsEmpty: () => get().cart.length === 0,

  getCartQuantity: () => {
    let quantity = 0;
    get().cart.forEach((item) => {
      if (item) {
        quantity = quantity + item.quantity;
      }
    });
    return quantity;
  },

  increaseQuantity: (product: CartItem) => {
    set((state) => {
      let cart = [...state.cart];
      const item = cart.find((item) => item.name === product.name);
      if (item) {
        item.quantity = item.quantity + 1;
      }
      localStorage.setItem("cart", JSON.stringify(cart));
      return {cart};
    });
  },

  decreaseQuantity: (product: CartItem) => {
    set((state) => {
      let cart = [...state.cart];
      const item = cart.find((item) => item.name === product.name);

      if (!item) return {cart};

      if (item.quantity === 1) {
        cart = cart.filter((i) => i.name !== item.name);
      } else {
        item.quantity -= 1;
      }

      localStorage.setItem("cart", JSON.stringify(cart));
      return {cart};
    });
  },
}));
