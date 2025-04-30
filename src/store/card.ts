// useMap2DStore.ts
import { defineStore } from 'pinia'
import {baseUrl} from "@/utils/global";
import axios from "axios";

export const useCardStore = defineStore('map2d', {
    state: () => ({
        count: 3,
        cards: [],
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
        queryCards(){
            axios.get("/interface/api/cards/")
            .then(res => {
                this.cards = res.data
                console.log(this.cards)
                return this.cards;
            })
            return null
        },
        setCards(cards: Array<object>) {
            this.cards = Array.from(cards)
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