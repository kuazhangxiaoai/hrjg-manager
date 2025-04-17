// useMap2DStore.ts
import { defineStore } from 'pinia'

export const useCardStore = defineStore('map2d', {
    state: () => ({
        count: 3,
        cards: ['A', 'B', 'C'],
    }),

    getters:{
        getCards(state){
            return state.cards
        },
    },

    actions: {
        setCount(count: bigint) {
            this.count = count
        },
        setCards(cards: object) {
            this.cards = cards
        },
        addCard(card: object){
            this.cards.push(card)
            this.count++
        },
        removeCard(cardId: string){
            let removedIndex = 0;
            for (let index = 0; index < this.cards.length; index++) {
                if (this.cards[index].id === cardId){
                    removedIndex = index
                }
            }
            this.cards.splice(removedIndex, 1)
        }
    }
})