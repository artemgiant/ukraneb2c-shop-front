import {defineStore} from "pinia"
import $axios from "@/lib/axios";
import {useProductStore} from "./ProductStore";
// import {ref} from "vue";

export const useProductApiStore = defineStore('productApiStore', () => {


    const productStore = useProductStore();

    const getProducts = async () => {

        $axios.get('/products').then((res)=>{
            productStore.products = res.data.products;
        })

        console.log('test')
    }

    return {
        getProducts
    }

})
