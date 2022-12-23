import {defineStore} from "pinia"
import $axios from "@/lib/axios";
import {useProductStore} from "./ProductStore";

export const useProductApiStore = defineStore('productApiStore', () => {


    const getProducts = async () => {

        const productStore = useProductStore();

        $axios.get('/api/products').then((res)=>{
            console.log(res.data)
            productStore.products.push(...res.data.products)
        })  .catch(function (error) {
            console.log(error);
            alert(error.message);
        });
    }

    return {
        getProducts
    }

})
