
import { reactive } from 'vue'

export const store = reactive({
    cards: [],
    api: 'https://db.ygoprodeck.com/api/v7/cardinfo.php?archetype=',
    archeApi: 'https://db.ygoprodeck.com/api/v7/archetypes.php',
    archetipe: [],
})

// https://db.ygoprodeck.com/api/v7/cardinfo.php? += "archetype=" + archetipoSelezionato nell'AppHeader
// es. https://db.ygoprodeck.com/api/v7/cardinfo.php?archetype=Blue-Eyes
