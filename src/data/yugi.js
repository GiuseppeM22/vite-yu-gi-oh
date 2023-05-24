
import { reactive } from 'vue'

export const store = reactive({
    cards: [],
    api: 'https://db.ygoprodeck.com/api/v7/cardinfo.php?num=50&offset=0',
    archeApi: 'https://db.ygoprodeck.com/api/v7/archetypes.php',
    archetipe: []
})