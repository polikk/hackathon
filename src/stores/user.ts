import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', {
  state: () => ({
    user: loadUserFromLocalStorage(),
  }),
  actions: {
    setUser(user: any) {
      this.user = user;
      localStorage.setItem('user', JSON.stringify(user));
    },
    clearUser() {
      this.user = null;
      localStorage.removeItem('user');
    }
  },
});

function loadUserFromLocalStorage() {
  try {
    const user = localStorage.getItem('user');
    return user ? JSON.parse(user) : null;
  } catch {
    return null;
  }
}
