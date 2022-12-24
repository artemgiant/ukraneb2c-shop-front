 import {defineStore} from "pinia"
 import {ref, watch} from "vue";
 import  {useProductApiStore} from "./ProductApiStore";

 export const useProductStore = defineStore('productStore', () => {

     const products = ref([]);
     const total  = ref(0);
     const length = ref(10);
     const page  = ref(1);

     watch(page, (page, prevPage) => {
         useProductApiStore().getProducts();
     })

     watch(length, (page, prevPage) => {
         useProductApiStore().getProducts();
     })


     return {
         products,
         total,
         length,
         page
     }

 })
