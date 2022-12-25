<template src="./Store.html">
</template>


<script setup>

import {computed,watch,ref} from 'vue'

import {useProductApiStore} from "@/store/Product/ProductApiStore"
import {useProductStore} from "@/store/Product/ProductStore"
import {useBasketStore} from "@/store/basketStore"

// Components
import Card from "@/components/Card.vue";

const productApiStore = useProductApiStore();
const productStore = useProductStore();
const basketStore = useBasketStore();

productApiStore.getProducts()

// Pagination
const startIndex = computed(() => (productStore.page - 1) * productStore.length)
const endIndex = computed(() => productStore.page * productStore.length)
const maxPage = computed(() => {
  return (productStore.total / productStore.length) > 10 ? 10 : Math.ceil(productStore.total / productStore.length);
})
const previousPage = computed(() => productStore.page > 0 ? productStore.page - 1 : 1)
const nextPage = computed(() => {
  const maxPage = (productStore.total / productStore.length) > 10 ? 10 :  Math.ceil(productStore.total / productStore.length);
  return maxPage > productStore.page ? productStore.page + 1 : maxPage
})


const addToBasket = (product) => {
  // console.clear()
  const exits =  basketStore.products.find(p => p.id === product.id)
  if (exits) {
    basketStore.products.find(p => {
      if(p.id === product.id){
        console.log(p)
        p.quantity++;
      }
    })
  } else {
    product.quantity = 1;
    basketStore.products.push(product)
  }
};


</script>


<!--<script >-->

<!--import {useProductApiStore} from "@/store/Product/ProductApiStore"-->
<!--import {useProductStoPiniare} from "@/store/Product/ProductStore"-->

<!--// Components-->
<!--import Card from "@/components/Card.vue";-->

<!--export default {-->
<!--  components: {Card},-->
<!--  data(){-->
<!--    return {-->
<!--      products: {},-->
<!--      totalCount:0,-->
<!--      page:1,-->
<!--      length:10,-->
<!--    }-->
<!--  },-->
<!--  mounted() {-->
<!--    useProductApiStore().getProducts()-->

<!--    const productStore = useProductStore();-->
<!--     this.products =  useProductStore().products;-->
<!--     console.log( useProductStore().total);-->
<!--     this.totalCount =  useProductStore().total;-->
<!--  },-->

<!--  computed: {-->
<!--    startIndex() {-->
<!--      return (this.page - 1) * this.length;-->
<!--    },-->
<!--    endIndex() {-->
<!--      return  this.page * this.length;-->
<!--    },-->
<!--  },-->
<!--  methods:{-->
<!--    test(){-->

<!--    }-->
<!--  }-->
<!--}-->
<!--</script>-->
