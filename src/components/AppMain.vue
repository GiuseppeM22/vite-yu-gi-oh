<script>

import { store } from '../data/yugi'

export default {
    data() {
        return {
            store,
        }
    }
}

</script>

<template>
    <section class="bg_orange">
        <div class="whiteContainer">
            <h3>Found {{ store.cards.length }} Cards</h3>
            <div class="cardsContainer">
                <div v-for="card in store.cards" class="carde">
                    <img :src="card.card_images[0].image_url" alt="">
                    <p class="name">{{ card.name }}</p>
                    <p class="type">{{ card.archetype }}</p>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
.bg_orange {
    background-color: #d48f38;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px;
}

.whiteContainer {
    width: 80%;
    height: 80%;
    background-color: white;

}

h3 {
    background-color: black;
    color: white;
    padding: 20px;
}

.cardsContainer {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
}

.carde {
    width: calc(100% / 5 - 20px);
    background-color: #d48f38;
    margin-bottom: 20px;
    margin: 10px;
}

.carde img {
    max-width: 100%;
}

.name {
    text-align: center;
    color: white;
    margin-top: 10px;
}

.type {
    color: black;
    margin-top: 10px;
    text-align: center;
    margin-bottom: 10px;
}
</style>