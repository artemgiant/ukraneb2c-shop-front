<template src="./Basket.html"></template>

<!--<script src="./Loader.js"></script>-->

<script setup>
import VueMultiselect from 'vue-multiselect'
import {computed, ref} from 'vue'
import $axios from "@/lib/axios";


import {useBasketStore} from "@/store/basketStore"
import {useAddressApiStore} from "@/store/Address/AddressApiStore";
import {useAddressStore} from "@/store/Address/AddressStore";
// Components
const basketStore = useBasketStore();
const addressApiStore = useAddressApiStore();
const addressStore = useAddressStore();

const isAgree = ref(false);

const form = ref({
  recipient:{
    phone:null,
    email:null,
    first_name:null,
    last_name:null,
    middle_name:null,
    city:null,
    street:null,
    house:null,
    flat:null,
  },
  address_delivery:{
    delivery_type:'nova_poshta',
    city:null,
    warehouse:null,
  },
  products: basketStore.products
}, {deep: true})



const searchRecipientCity = (query)=> {

    addressApiStore.getCity(query,'meest_courier');
}

const selectedRecipientCity = (object)=> {

    addressApiStore.getStreet('meest_courier',object.id);
}


const searchChangeCity = (query)=> {
  if(query.length>=3)
   addressApiStore.getCity(query,form.value.address_delivery.delivery_type);
}

const asyncWarehouses = (object) => {
  form.value.warehouse = {}
  addressApiStore.getWarehouses(form.value.address_delivery.delivery_type, object.id);
}

const queryWarehouse = ref('');

const searchWarehouses = (q) => {
  queryWarehouse.value = q;
  addressStore.warehouse_number

// если в строке есть только цифры
  if (parseInt(q).toString().length === q.length) {
    addressStore.warehouses = addressStore.warehouses.filter((w) => parseInt(w.warehouse_number) === parseInt(q))
  }

}

const filteredWarehouses = computed(() => {

  return addressStore.warehouses;
  // addressStore.warehouses.filter(warehouse => warehouse.text.includes(queryWarehouse.value))
})

// () {
//     return  this.tickers.filter(ticker => ticker.name.includes(this.filter));
// },

const placeOrder = async () => {
  const url = `api/orders/create`;

  await $axios.post(url, form.value).then((res) => {
    console.log(res);

    // basketStore.products.value = {};

    form.value = {
      recipient: {
        phone: null,
        email: null,
        first_name: null,
        last_name: null,
        middle_name: null,
        city: null,
        street: null,
        house: null,
        flat: null,
      },
      address_delivery: {
        delivery_type: null,
        city: null,
        warehouse: null,
      },
      products: basketStore.products
    };

  }).catch(function (error) {
    console.log(error);
    alert(error.message);
  });
}


</script>

<style src="vue-multiselect/dist/vue-multiselect.css"></style>

<style src="./Basket.css" scoped></style>

