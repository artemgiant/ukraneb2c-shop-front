<template src="./Product.html">
</template>


<script setup>
import { useRoute } from 'vue-router'
import { ref} from "vue";
// STORE
import {useProductApiStore} from "@/store/Product/ProductApiStore";
import {useBasketStore} from "@/store/basketStore"


const route = useRoute()
const productApiStore = useProductApiStore();
const basketStore = useBasketStore();
const product = ref({});

 productApiStore.getProduct(route.params.id).then(data => {
   product.value = {...data.products[0],quantity:1}
 });


</script>


<style scoped>
.disabled , [disabled]{
  pointer-events: none;
  opacity: 0.5;
}
</style>
