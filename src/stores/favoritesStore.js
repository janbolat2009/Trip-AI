import { defineStore } from 'pinia'

export const useFavoritesStore = defineStore('favorites', {
  state: () => ({
    favorites: []
  }),
  actions: {
    toggle(tour) {
      const exists = this.favorites.find(t => t.title === tour.title)
      if (exists) {
        this.favorites = this.favorites.filter(t => t.title !== tour.title)
      } else {
        this.favorites.push(tour)
      }
    },
    isFavorite(tour) {
      return this.favorites.some(t => t.title === tour.title)
    }
  }
})
