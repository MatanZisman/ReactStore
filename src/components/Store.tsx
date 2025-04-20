import {create} from "zustand";
import {CartItem} from "@/types/CartItem";

type CartState = {
  cart: CartItem[];
  addToCart: (product: CartItem) => void;
  removeFromCart: (product: CartItem) => void;
  clearCart: () => void;
  getCartCount: () => number;
  getCartQuantity: () => number;
  cartIsEmpty: () => boolean;
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
      return { cart };
    });
  },

  removeFromCart: (product: CartItem) => {
    set((state) => {
      let cart = state.cart.filter(
        (item) => item.name !== product.name,
      );
      localStorage.setItem("cart", JSON.stringify(cart));
      return { cart };
    });
  },

  clearCart: () => {
    localStorage.removeItem("cart");
    set({ cart: [] });
  },

  getCartCount: () => get().cart.length,

  cartIsEmpty: () => get().cart.length === 0,

  getCartQuantity: () => {
    return get().cart.reduce((total, item) => total + item.quantity, 0);
  },  

  increaseQuantity: (product: CartItem) => {
    set((state) => {
      let cart = [...state.cart];
      const item = cart.find((item) => item.name === product.name);
      if (item) {
        item.quantity = item.quantity + 1;
      }
      localStorage.setItem("cart", JSON.stringify(cart));
      return { cart: cart };
    });
  },

  decreaseQuantity: (product: CartItem) => {
    set((state) => {
      let cart = [...state.cart];
      const item = cart.find((item) => item.name === product.name);

      if (!item) return { cart };

      if (item.quantity === 1) {
        cart = cart.filter((i) => i.name !== item.name);
      } else {
        item.quantity -= 1;
      }

      localStorage.setItem("cart", JSON.stringify(cart));
      return { cart };
    });
  },
}));
