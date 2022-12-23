<template src="./Store.html"></template>


<script lang="ts" setup>


import {useProductApiStore} from "@/store/Product/ProductApiStore"

// import  useExampleStore from  "@/store/example";

const productApiStore = useProductApiStore();
productApiStore.getProducts()

</script>
