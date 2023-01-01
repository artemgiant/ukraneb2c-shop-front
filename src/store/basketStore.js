import {defineStore} from "pinia"
import {ref, watch, computed} from "vue";

export const useBasketStore = defineStore('basketStore', ()=>{
    const products = ref([]);

    const productsData = localStorage.getItem("basket:products");

    if (productsData && Object.keys(JSON.parse(productsData)).length)
        products.value = JSON.parse(productsData);

    watch(products, () => {
        console.log('change products')

        localStorage.setItem("basket:products", JSON.stringify(products.value));
    },{ deep: true })


    const delFromBasket = (product) => {
        products.value =  products.value.filter(p => p.id !== product.id)
    }

    const count = computed(() => {
        return products.value.reduce((accumulator, object) => {
            return accumulator + object.quantity;
        }, 0)
    })

    const sum = computed(() => {
        return products.value.reduce((accumulator, object) => {
            return accumulator + (parseInt(object.price) * object.quantity) ;
        }, 0)
    })




    return {products,
    delFromBasket,count,sum}
})
