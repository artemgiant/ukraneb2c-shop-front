import {defineStore} from "pinia"
import $axios from "@/lib/axios";

import {ref,computed} from 'vue'

export const useAddressStore = defineStore('addressStore', () => {

    const cities = ref([]);
    const citiesRecipient = ref([]);
    const warehouses = ref([]);
    const streets = ref([]);


    return {
        cities,
        citiesRecipient,
        warehouses,
        streets
    }

})
