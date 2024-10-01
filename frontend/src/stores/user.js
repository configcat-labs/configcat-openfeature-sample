import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', {
  state: () => ({
    authenticated: false,
    user: null
  }),
  actions: {
    setUser(user) {
      this.user = user,
      this.authenticated = true;
    }
  },
});