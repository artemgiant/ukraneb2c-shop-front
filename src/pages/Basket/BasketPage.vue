<template src="./Basket.html"></template>

<!--<script src="./Loader.js"></script>-->

<script setup>
import {computed, ref} from 'vue'
import $axios from "@/lib/axios";
import { useRouter } from 'vue-router'

import * as Yup from 'yup';
import {phoneMask} from "@/lib/phone-mask";

import VueMultiselect from 'vue-multiselect'
import { Form, Field, ErrorMessage } from 'vee-validate';

// STORE
import {useBasketStore} from "@/store/basketStore"
import {useAddressApiStore} from "@/store/Address/AddressApiStore";
import {useAddressStore} from "@/store/Address/AddressStore";

// Components
const basketStore = useBasketStore();
const addressApiStore = useAddressApiStore();
const addressStore = useAddressStore();
const router = useRouter();

const isAgree = ref(true);

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
    delivery_type: null,
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
})

const schema = Yup.object().shape({
  recipient:
          Yup.object().shape({
            first_name: Yup.string().required().min(3).nullable(),
            last_name: Yup.string().required().min(3).nullable(),
            middle_name: Yup.string().required().min(3).nullable(),
            phone: Yup.string().required().nullable(),
            email: Yup.string().email().required().nullable(),
            city: Yup.object().required().nullable(),
            street: Yup.object().required().nullable(),
            flat: Yup.string().required().nullable(),
            house: Yup.string().required().nullable(),
          })
      .strict(),
  address_delivery: Yup.object().shape({
    delivery_type: Yup.string().required().nullable(),
  })
      .strict(),
});

async function onSubmit(values, { resetForm }) {
  // display form values on success
  // alert('SUCCESS!! :-)\n\n' + JSON.stringify(values, null, 4));

  const url = `api/orders/create`;
  await $axios.post(url, form.value).then((res) => {

    for (const [key, product] of Object.entries(basketStore.products)) {
      basketStore.delFromBasket(product)
    }
    resetForm();

    router.push({name:'delivery-info'})

  }).catch(function (error) {
    console.log(error);
    alert(error.message);
  });


}


// DIRECTIVES
const vPhoneMask = {
  beforeMount: phoneMask

}


</script>

<style src="vue-multiselect/dist/vue-multiselect.css"></style>

<style src="./Basket.css" scoped></style>

<style scoped>

.invalid-feedback {
  display: none;
  width: 100%;
  margin-top: 0.25rem;
  font-size: 80%;
  color: #dc3545;
}
.is-invalid~.invalid-feedback, .is-invalid~.invalid-tooltip, .was-validated :invalid~.invalid-feedback, .was-validated :invalid~.invalid-tooltip {
  display: block;
}
.form-control.is-invalid, .was-validated .form-control:invalid {
  border-color: #dc3545;
  padding-right: calc(1.5em + 0.75rem);
  background-image: url(data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' fill='none' stroke='%23dc3545' viewBox='0 0 12 12'%3e%3ccircle cx='6' cy='6' r='4.5'/%3e%3cpath stroke-linejoin='round' d='M5.8 3.6h.4L6 6.5z'/%3e%3ccircle cx='6' cy='8.2' r='.6' fill='%23dc3545' stroke='none'/%3e%3c/svg%3e);
  background-repeat: no-repeat;
  background-position: right calc(0.375em + 0.1875rem) center;
  background-size: calc(0.75em + 0.375rem) calc(0.75em + 0.375rem);
}
.form-control {
  display: block;
  width: 100%;
  padding: 0.375rem 0.75rem;
  font-weight: 400;
  line-height: 1.5;
  color: #495057;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid #ced4da;
  border-radius: 0.25rem;
  transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;
}
</style>

