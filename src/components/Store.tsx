import { create } from 'zustand';
import { CartItem } from '../types/CartItem';

type CartState = {
  cart: CartItem[];
  addToCart: (product: CartItem) => void;
  removeFromCart: (product: CartItem) => void;
  clearCart: () => void;
  getCartCount: () => number;
  getCartQuantity: () => number;
  decreaseQuantity: (product: CartItem) => void;
  increaseQuantity: (product: CartItem) => void;
};

export const useCartStore = create<CartState>((set, get) => ({
    cart: (() => {
    try {
      const storedCart = localStorage.getItem('cart');
      return storedCart ? JSON.parse(storedCart) : [];
    } catch {
      return [];
    }
    })(), 

    addToCart: (product: CartItem) => {
        set((state) => {
          const cart = [...state.cart];
          const existing = cart.find((item) => item.name === product.name);
      
          let updatedCart: CartItem[];
      
          if (existing) {
            existing.quantity += 1; 
            updatedCart = cart;
          } else {
            updatedCart = [...cart, { ...product, quantity: 1 }];
          }
      
          localStorage.setItem("cart", JSON.stringify(updatedCart));
          return { cart: updatedCart };
        });
      },

    removeFromCart: (product: CartItem) => {
        set((state) => {
            const updatedCart = state.cart.filter((item) => item.name !== product.name);
            localStorage.setItem('cart', JSON.stringify(updatedCart));
            return {cart: updatedCart};
        })
    },

    clearCart: () => {
        localStorage.removeItem('cart');
        set({ cart: [] })
    },

    getCartCount: () =>  get().cart.length,

    getCartQuantity: () => {
      let quantity = 0;
      get().cart.forEach((item => {
        if(item) {
        quantity = quantity + item.quantity
        }
      }))
      return quantity;
    },

    increaseQuantity: (product: CartItem) => {
        set((state) => { 
            const updatedCart = [...state.cart];
            const item = updatedCart.find((item) => item.name === product.name);
            if (item) {item.quantity = item.quantity + 1;}
            localStorage.setItem("cart", JSON.stringify(updatedCart))
            return { cart: updatedCart };  
            }     
        )},

    decreaseQuantity: (product: CartItem) => {
        set((state) => {
            const cart = [...state.cart];
            const item = cart.find((item) => item.name === product.name);
        
            if (!item) return { cart };
        
                let updatedCart: CartItem[];
        
            if (item.quantity === 1) {

                updatedCart = cart.filter((i) => i.name !== item.name);

            } else {

                item.quantity -= 1;
                updatedCart = cart;
            }
        
            localStorage.setItem("cart", JSON.stringify(updatedCart));
            return { cart: updatedCart };
        });
        },

    
          
}));

