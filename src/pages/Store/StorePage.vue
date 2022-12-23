<template src="./Store.html">
</template>


<script setup>

import {useProductApiStore} from "@/store/Product/ProductApiStore"
import {useProductStore} from "@/store/Product/ProductStore"
// Components
import Card from "@/components/Card.vue";


const productApiStore = useProductApiStore();
productApiStore.getProducts()

const productStore = useProductStore();
const products = productStore.products;



</script>


