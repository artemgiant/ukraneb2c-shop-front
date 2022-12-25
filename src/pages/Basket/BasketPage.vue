<template src="./Basket.html">
</template>


<script setup>
import VueMultiselect from 'vue-multiselect'

import {ref} from 'vue'

const selected = ref(null);
const options = ref(['list', 'of', 'optsions']);


import {useBasketStore} from "@/store/basketStore"
import {useAddressApiStore} from "@/store/Address/AddressApiStore";
// Components
const basketStore = useBasketStore();
const addressApiStore = useAddressApiStore();


const selectedCountries = ref([]);
const countries = ref([{
  "name": "Åland Islands",
  "code": "AX"
}]);

const limitText = (count) => {
  return `and ${count} other countries`;
}
const asyncFind = (query)=> {
 console.log('ajax')
  const url = '';

  const cities = addressApiStore.getCity(query,'nova_poshta');

  console.log(cities);

}

</script>

<style src="vue-multiselect/dist/vue-multiselect.css"></style>


<style scoped>


/*.container-qty {*/
/*  display: flex;*/
/*  width: 100%;*/
/*  flex-direction: column;*/
/*  justify-content: center;*/
/*  align-items: center;*/
/*}*/

.quantity {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
}
.quantity__minus,
.quantity__plus {
  display: block;
  width: 22px;
  height: 23px;
  margin: 0;
  background: #dee0ee;
  text-decoration: none;
  text-align: center;
  line-height: 23px;
}
.quantity__minus:hover,
.quantity__plus:hover {
  background: #575b71;
  color: #fff;
}
.quantity__minus {
  border-radius: 3px 0 0 3px;
}
.quantity__plus {
  border-radius: 0 3px 3px 0;
}
.quantity__input {
  width: 32px;
  height: 19px;
  margin: 0;
  padding: 0;
  text-align: center;
  border-top: 2px solid #dee0ee;
  border-bottom: 2px solid #dee0ee;
  border-left: 1px solid #dee0ee;
  border-right: 2px solid #dee0ee;
  background: #fff;
  color: #8184a1;
}
.quantity__minus:link,
.quantity__plus:link {
  color: #8184a1;
}
.quantity__minus:visited,
.quantity__plus:visited {
  color: #fff;
}

.disabled , [disabled]{
  pointer-events: none;
  opacity: 0.5;
}
.w-50{
  width: 50%;
}

</style>

