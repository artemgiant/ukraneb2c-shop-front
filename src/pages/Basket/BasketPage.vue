<template src="./Basket.html"></template>


<script setup>
import VueMultiselect from 'vue-multiselect'
import {computed, ref} from 'vue'


import {useBasketStore} from "@/store/basketStore"
import {useAddressApiStore} from "@/store/Address/AddressApiStore";
import {useAddressStore} from "@/store/Address/AddressStore";
// Components
const basketStore = useBasketStore();
const addressApiStore = useAddressApiStore();
const addressStore = useAddressStore();




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
  delivery_address:{
    delivery_type:null,
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
   addressApiStore.getCity(query,form.value.delivery_address.delivery_type);
}

const asyncWarehouses = (object) => {
  form.value.warehouse = {}
  addressApiStore.getWarehouses(form.value.delivery_address.delivery_type, object.id);
}

const  searchWarehouses = (q) =>{
      addressStore.warehouse_number

// если в строке есть только цифры
  if(parseInt(q).toString().length === q.length){
    addressStore.warehouses =  addressStore.warehouses.filter((w)=>parseInt(w.warehouse_number) === parseInt(q))
  }

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


<style scoped>
.body-right-list {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 48px;
  padding: 4px;
  border: 1px solid #f3f3f4;
  box-sizing: border-box;
  border-radius: 12px;
  width: 100%;
}
.body-right-list .tabs-title {
  height: 38px;
  border-radius: 8px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  padding: 0px 16px;
  margin-right: 4px;
  background-color: #fff;
  font-family: "Roboto-Regular";
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #000;
  cursor: pointer;
}



.tabs-title:not(.active) .icon-courier-off::before {
  content: "";
  position: relative;
  background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg width='16' height='20' viewBox='0 0 16 20' fill='none' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' clip-rule='evenodd' d='M13.294 5.29105C13.294 8.22808 10.9391 10.5831 8 10.5831C5.0619 10.5831 2.70601 8.22808 2.70601 5.29105C2.70601 2.35402 5.0619 0 8 0C10.9391 0 13.294 2.35402 13.294 5.29105ZM8 20C3.66237 20 0 19.295 0 16.575C0 13.8539 3.68538 13.1739 8 13.1739C12.3386 13.1739 16 13.8789 16 16.599C16 19.32 12.3146 20 8 20Z' fill='%238C8C8C'/%3e%3c/svg%3e");
  background-repeat: no-repeat;
  width: 24px;
  height: 24px;
  display: block;
}

.tabs-title.active .icon-courier-on::before {
  content: "";
  position: relative;
  background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg width='16' height='20' viewBox='0 0 16 20' fill='none' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M7.99995 10.6C10.9271 10.6 13.3 8.22711 13.3 5.3C13.3 2.37289 10.9271 0 7.99995 0C5.07284 0 2.69995 2.37289 2.69995 5.3C2.69995 8.22711 5.07284 10.6 7.99995 10.6Z' fill='%23ED1C24'/%3e%3cpath fill-rule='evenodd' clip-rule='evenodd' d='M16 16.6C16 19.3 12.3 20 8 20C3.7 20 0 19.3 0 16.6C0 13.9 3.7 13.2 8 13.2C12.3 13.2 16 13.9 16 16.6Z' fill='%230862AF'/%3e%3c/svg%3e");
  background-repeat: no-repeat;
  width: 24px;
  height: 24px;
  display: block;
}


.tabs-title:not(.active) .icon-NP-off::before {
  content: "";
  position: relative;
  background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3e%3cmask id='mask0_31191:5259' style='mask-type:alpha' maskUnits='userSpaceOnUse' x='0' y='0' width='24' height='24'%3e%3crect width='24' height='24' fill='%235081E9'/%3e%3c/mask%3e%3cg mask='url(%23mask0_31191:5259)'%3e%3cpath fill-rule='evenodd' clip-rule='evenodd' d='M18.8615 7.46973C18.9583 7.46973 19.0551 7.46973 19.1519 7.56611C19.1519 7.56611 19.1519 7.56611 23.1211 11.5179C23.3147 11.7107 23.3147 12.0962 23.1211 12.289C23.1211 12.289 23.1211 12.289 19.1519 16.2408C19.0551 16.3372 18.9583 16.4336 18.8615 16.3372C18.7646 16.3372 18.7646 16.2408 18.7646 16.048V7.66249C18.7646 7.56611 18.7646 7.46973 18.8615 7.46973Z' fill='%238C8C8C'/%3e%3cpath fill-rule='evenodd' clip-rule='evenodd' d='M11.9881 1.01172H12.2785L12.569 1.10811C12.569 1.10811 12.569 1.10811 16.7318 5.1563C16.9254 5.34907 16.8286 5.54184 16.5382 5.54184C16.5382 5.54184 16.5382 5.54184 14.7956 5.54184C14.5052 5.54184 14.3115 5.73461 14.3115 6.02377C14.3115 6.02377 14.3115 6.02377 14.3115 9.01172C14.3115 9.30088 14.1179 9.49365 13.7307 9.49365C13.7307 9.49365 13.7307 9.49365 10.7296 9.49365C10.4391 9.49365 10.1487 9.30088 10.1487 9.01172C10.1487 9.01172 10.1487 9.01172 10.1487 6.02377C10.1487 5.73461 9.95508 5.54184 9.56783 5.54184H7.72843C7.438 5.54184 7.3412 5.34907 7.53482 5.1563C7.53482 5.1563 7.53481 5.1563 11.6977 1.10811L11.9881 1.01172Z' fill='%238C8C8C'/%3e%3cpath fill-rule='evenodd' clip-rule='evenodd' d='M5.50169 7.37305C5.5985 7.37305 5.59849 7.46943 5.59849 7.6622V16.1441C5.59849 16.3369 5.5985 16.3369 5.50169 16.4333C5.40488 16.4333 5.30806 16.4333 5.21125 16.3369C5.21125 16.3369 5.21125 16.3369 1.14522 12.2887C0.951595 12.0959 0.951595 11.8068 1.14522 11.5176C1.14522 11.5176 1.14521 11.5176 5.21125 7.46943C5.30806 7.37305 5.40488 7.37305 5.50169 7.37305Z' fill='%238C8C8C'/%3e%3cpath fill-rule='evenodd' clip-rule='evenodd' d='M10.6327 14.1201C10.6327 14.1201 10.6327 14.1201 13.6339 14.1201C14.0211 14.1201 14.2147 14.3129 14.2147 14.602C14.2147 14.602 14.2147 14.602 14.2147 17.7828C14.2147 18.1683 14.4083 18.3611 14.6988 18.3611H16.2477C16.5382 18.3611 16.635 18.5538 16.4414 18.7466C16.4414 18.7466 16.4414 18.7466 12.4721 22.7948C12.3753 22.8912 12.1817 22.9876 12.0849 22.9876C11.8913 22.9876 11.7945 22.8912 11.6976 22.7948C11.6976 22.7948 11.6976 22.7948 7.72842 18.7466C7.5348 18.5538 7.63161 18.3611 7.92204 18.3611C7.92204 18.3611 7.92204 18.3611 9.66463 18.3611C9.95506 18.3611 10.2455 18.1683 10.2455 17.7828C10.2455 17.7828 10.2455 17.7828 10.2455 14.602C10.1487 14.3129 10.3423 14.1201 10.6327 14.1201Z' fill='%238C8C8C'/%3e%3c/g%3e%3c/svg%3e");
  background-repeat: no-repeat;
  width: 24px;
  height: 24px;
  display: block;
}

.tabs-title.active .icon-NP-on::before {
  content: "";
  position: relative;
  background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3e%3cmask id='mask0_31201:6496' style='mask-type:alpha' maskUnits='userSpaceOnUse' x='0' y='0' width='24' height='24'%3e%3crect width='24' height='24' fill='%235081E9'/%3e%3c/mask%3e%3cg mask='url(%23mask0_31201:6496)'%3e%3cpath fill-rule='evenodd' clip-rule='evenodd' d='M18.8615 7.46973C18.9583 7.46973 19.0551 7.46973 19.1519 7.56611C19.1519 7.56611 19.1519 7.56611 23.1211 11.5179C23.3147 11.7107 23.3147 12.0962 23.1211 12.289C23.1211 12.289 23.1211 12.289 19.1519 16.2408C19.0551 16.3372 18.9583 16.4336 18.8615 16.3372C18.7646 16.3372 18.7646 16.2408 18.7646 16.048V7.66249C18.7646 7.56611 18.7646 7.46973 18.8615 7.46973Z' fill='%23ED1C24'/%3e%3cpath fill-rule='evenodd' clip-rule='evenodd' d='M11.9881 1.01172H12.2785L12.569 1.10811C12.569 1.10811 12.569 1.10811 16.7318 5.1563C16.9254 5.34907 16.8286 5.54184 16.5382 5.54184C16.5382 5.54184 16.5382 5.54184 14.7956 5.54184C14.5052 5.54184 14.3115 5.73461 14.3115 6.02377C14.3115 6.02377 14.3115 6.02377 14.3115 9.01172C14.3115 9.30088 14.1179 9.49365 13.7307 9.49365C13.7307 9.49365 13.7307 9.49365 10.7296 9.49365C10.4391 9.49365 10.1487 9.30088 10.1487 9.01172C10.1487 9.01172 10.1487 9.01172 10.1487 6.02377C10.1487 5.73461 9.95508 5.54184 9.56783 5.54184H7.72843C7.438 5.54184 7.3412 5.34907 7.53482 5.1563C7.53482 5.1563 7.53481 5.1563 11.6977 1.10811L11.9881 1.01172Z' fill='%23ED1C24'/%3e%3cpath fill-rule='evenodd' clip-rule='evenodd' d='M5.50169 7.37305C5.5985 7.37305 5.59849 7.46943 5.59849 7.6622V16.1441C5.59849 16.3369 5.5985 16.3369 5.50169 16.4333C5.40488 16.4333 5.30806 16.4333 5.21125 16.3369C5.21125 16.3369 5.21125 16.3369 1.14522 12.2887C0.951595 12.0959 0.951595 11.8068 1.14522 11.5176C1.14522 11.5176 1.14521 11.5176 5.21125 7.46943C5.30806 7.37305 5.40488 7.37305 5.50169 7.37305Z' fill='%23ED1C24'/%3e%3cpath fill-rule='evenodd' clip-rule='evenodd' d='M10.6327 14.1201C10.6327 14.1201 10.6327 14.1201 13.6339 14.1201C14.0211 14.1201 14.2147 14.3129 14.2147 14.602C14.2147 14.602 14.2147 14.602 14.2147 17.7828C14.2147 18.1683 14.4083 18.3611 14.6988 18.3611H16.2477C16.5382 18.3611 16.635 18.5538 16.4414 18.7466C16.4414 18.7466 16.4414 18.7466 12.4721 22.7948C12.3753 22.8912 12.1817 22.9876 12.0849 22.9876C11.8913 22.9876 11.7945 22.8912 11.6976 22.7948C11.6976 22.7948 11.6976 22.7948 7.72842 18.7466C7.5348 18.5538 7.63161 18.3611 7.92204 18.3611C7.92204 18.3611 7.92204 18.3611 9.66463 18.3611C9.95506 18.3611 10.2455 18.1683 10.2455 17.7828C10.2455 17.7828 10.2455 17.7828 10.2455 14.602C10.1487 14.3129 10.3423 14.1201 10.6327 14.1201Z' fill='%23ED1C24'/%3e%3c/g%3e%3c/svg%3e");
  background-repeat: no-repeat;
  width: 24px;
  height: 24px;
  display: block;
}

.tabs-title:not(.active) .icon-UK-off::before {
  content: "";
  position: relative;
  background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3e%3cmask id='mask0_31201:6429' style='mask-type:alpha' maskUnits='userSpaceOnUse' x='0' y='0' width='24' height='24'%3e%3crect width='24' height='24' fill='%235081E9'/%3e%3c/mask%3e%3cg mask='url(%23mask0_31201:6429)'%3e%3cpath d='M18.4605 13.6271L11.173 11.9771C9.00739 11.4844 7.64385 9.33021 8.13656 7.15313C8.62927 4.9875 10.7834 3.62396 12.9605 4.11667C15.1261 4.60938 16.4897 6.76354 15.997 8.94062C15.7563 10.0292 15.0918 10.9115 14.2095 11.4615C14.1866 11.4844 14.1636 11.5073 14.1636 11.5417C14.1636 11.5875 14.198 11.6333 14.2439 11.6448L17.4866 12.3781C17.5668 12.401 17.647 12.3667 17.6928 12.2979C18.5866 11.1177 19.1251 9.63958 19.1251 8.04688C19.1251 4.28854 16.1918 1.22917 12.4907 1.01146C12.4564 1.01146 12.2616 1 12.1928 1C10.5543 0.977083 8.89281 1.44688 7.44906 2.45521C3.80531 5.01042 2.91156 10.0406 5.46677 13.6844L11.9522 22.9427C11.9751 22.9771 12.0209 23 12.0782 23C12.1241 23 12.1699 22.9771 12.2043 22.9427L18.5636 13.8677C18.5751 13.8448 18.5866 13.8104 18.5866 13.7875C18.5751 13.7073 18.5293 13.65 18.4605 13.6271Z' fill='%238C8C8C'/%3e%3c/g%3e%3c/svg%3e");
  background-repeat: no-repeat;
  width: 24px;
  height: 24px;
  display: block;
}

.tabs-title.active .icon-UK-on::before {
  content: "";
  position: relative;
  background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3e%3cmask id='mask0_31201:6505' style='mask-type:alpha' maskUnits='userSpaceOnUse' x='0' y='0' width='24' height='24'%3e%3crect width='24' height='24' fill='%235081E9'/%3e%3c/mask%3e%3cg mask='url(%23mask0_31201:6505)'%3e%3cpath d='M18.4605 13.6271L11.173 11.9771C9.00739 11.4844 7.64385 9.33021 8.13656 7.15313C8.62927 4.9875 10.7834 3.62396 12.9605 4.11667C15.1261 4.60938 16.4897 6.76354 15.997 8.94062C15.7563 10.0292 15.0918 10.9115 14.2095 11.4615C14.1866 11.4844 14.1636 11.5073 14.1636 11.5417C14.1636 11.5875 14.198 11.6333 14.2439 11.6448L17.4866 12.3781C17.5668 12.401 17.647 12.3667 17.6928 12.2979C18.5866 11.1177 19.1251 9.63958 19.1251 8.04688C19.1251 4.28854 16.1918 1.22917 12.4907 1.01146C12.4564 1.01146 12.2616 1 12.1928 1C10.5543 0.977083 8.89281 1.44688 7.44906 2.45521C3.80531 5.01042 2.91156 10.0406 5.46677 13.6844L11.9522 22.9427C11.9751 22.9771 12.0209 23 12.0782 23C12.1241 23 12.1699 22.9771 12.2043 22.9427L18.5636 13.8677C18.5751 13.8448 18.5866 13.8104 18.5866 13.7875C18.5751 13.7073 18.5293 13.65 18.4605 13.6271Z' fill='%23F3C43C'/%3e%3c/g%3e%3c/svg%3e ");
  background-repeat: no-repeat;
  width: 24px;
  height: 24px;
  display: block;
}

.tabs-title:not(.active) .icon-ATP-off::before {
  content: "";
  position: relative;
  background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3e%3cmask id='mask0_31191:5273' style='mask-type:alpha' maskUnits='userSpaceOnUse' x='0' y='0' width='24' height='24'%3e%3crect width='24' height='24' fill='%235081E9'/%3e%3c/mask%3e%3cg mask='url(%23mask0_31191:5273)'%3e%3cpath d='M15.5 11.7405C15.1 12.2405 14.7 12.7405 14.4 13.2405C14.3 13.4405 14.1 13.4405 13.9 13.4405C11.1 13.4405 8.29995 13.4405 5.49995 13.4405C5.29995 13.4405 5.09995 13.3405 4.99995 13.1405C4.69995 11.9405 4.19995 10.8405 3.79995 9.74052C3.79995 9.64052 3.79995 9.54052 3.69995 9.44052C3.79995 9.44052 3.89995 9.44052 3.99995 9.44052C5.69995 9.44052 7.49995 9.44052 9.19995 9.44052C9.39995 9.44052 9.49995 9.54052 9.59995 9.74052C9.79995 10.3405 9.99995 10.8405 10.2 11.4405C10.2 11.5405 10.3 11.6405 10.3 11.7405C11.2 11.5405 12 11.2405 12.9 11.0405C13 11.0405 13.1 10.9405 13.2 10.7405C13.8 9.64052 14.4 8.54052 14.9 7.44052C15.2 6.84052 15.6 6.34052 16.2 6.04052C16.2 6.04052 16.3 6.04052 16.3 5.94052C15.2 5.54052 14.5 4.84052 14.2 3.64052C14 2.84052 14.1 2.04052 14.6 1.34052C15.5 -0.0594771 17.4 -0.459477 18.8 0.440523C20.1 1.34052 20.7999 3.34052 19.3 5.14052C19.4 5.24052 19.5 5.24052 19.6 5.34052C20.2 5.64052 20.7999 5.84052 21.5 6.14052C21.9 6.34052 22.1999 6.64052 22.4 7.14052C22.7999 8.34052 23.2 9.54052 23.5 10.7405C23.5 10.8405 23.5 11.0405 23.4 11.1405C23.1 11.6405 22.7999 12.1405 22.4 12.6405C22.1 13.0405 22 13.4405 21.9 13.9405C21.7999 15.1405 21.7 16.4405 21.6 17.6405C21.5 19.1405 21.3 20.5405 21.2 22.0405C21.1 22.5405 21.1 23.1405 21.1 23.7405C21.1 23.9405 21 24.0405 20.7999 24.0405C19.5999 24.0405 18.5 24.0405 17.3 24.0405C17.1 24.0405 17 24.0405 17 23.7405C16.8 21.9405 16.7 20.2405 16.5 18.4405C16.4 17.1405 16.3 15.9405 16.2 14.6405C16.1 13.9405 15.8 13.2405 15.6 12.5405C15.7 12.2405 15.6 12.0405 15.5 11.7405Z' fill='%238C8C8C'/%3e%3cpath d='M12.5 9.5405C12.1 9.7405 11.7 9.8405 11.2 10.0405C11 9.4405 10.8 8.9405 10.6 8.3405C10.5 8.1405 10.4 8.0405 10.2 8.0405C7.4 8.0405 4.5 8.0405 1.7 8.0405C1.6 8.0405 1.5 8.0405 1.4 8.0405C1.5 8.2405 1.5 8.3405 1.5 8.5405C2.1 10.1405 2.7 11.7405 3.4 13.3405C3.5 13.5405 3.5 13.8405 3.5 14.0405C3.5 16.7405 3.5 19.4405 3.5 22.0405C3.5 22.1405 3.5 22.2405 3.5 22.4405C3.7 22.4405 3.8 22.4405 3.9 22.4405C6.7 22.4405 9.4 22.4405 12.2 22.4405C12.7 22.4405 12.7 22.4405 12.7 21.9405C12.7 19.7405 12.7 17.6405 12.7 15.4405C12.7 15.3405 12.7 15.2405 12.7 15.1405C13.2 15.1405 13.6 15.1405 14 15.1405C14 15.2405 14 15.3405 14 15.4405C14 17.7405 14 19.9405 14 22.2405C14 23.2405 13.2 23.7405 12.5 23.7405C8.9 23.7405 5.2 23.7405 1.6 23.7405C0.6 23.7405 0 23.1405 0 22.1405C0 17.4405 0 12.8405 0 8.1405C0 7.2405 0.6 6.6405 1.5 6.6405C4.5 6.6405 7.4 6.6405 10.4 6.6405C11.3 6.6405 11.6 6.9405 11.9 7.7405C12.1 8.3405 12.3 8.9405 12.5 9.5405Z' fill='%238C8C8C'/%3e%3c/g%3e%3c/svg%3e");
  background-repeat: no-repeat;
  width: 24px;
  height: 24px;
  display: block;
}

.tabs-title.active .icon-ATP-on::before {
  content: "";
  position: relative;
  background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M15.5 11.7405C15.1 12.2405 14.7 12.7405 14.4 13.2405C14.3 13.4405 14.1 13.4405 13.9 13.4405C11.1 13.4405 8.29995 13.4405 5.49995 13.4405C5.29995 13.4405 5.09995 13.3405 4.99995 13.1405C4.69995 11.9405 4.19995 10.8405 3.79995 9.74052C3.79995 9.64052 3.79995 9.54052 3.69995 9.44052C3.79995 9.44052 3.89995 9.44052 3.99995 9.44052C5.69995 9.44052 7.49995 9.44052 9.19995 9.44052C9.39995 9.44052 9.49995 9.54052 9.59995 9.74052C9.79995 10.3405 9.99995 10.8405 10.2 11.4405C10.2 11.5405 10.3 11.6405 10.3 11.7405C11.2 11.5405 12 11.2405 12.9 11.0405C13 11.0405 13.1 10.9405 13.2 10.7405C13.8 9.64052 14.4 8.54052 14.9 7.44052C15.2 6.84052 15.6 6.34052 16.2 6.04052C16.2 6.04052 16.3 6.04052 16.3 5.94052C15.2 5.54052 14.5 4.84052 14.2 3.64052C14 2.84052 14.1 2.04052 14.6 1.34052C15.5 -0.0594771 17.4 -0.459477 18.8 0.440523C20.1 1.34052 20.7999 3.34052 19.3 5.14052C19.4 5.24052 19.5 5.24052 19.6 5.34052C20.2 5.64052 20.7999 5.84052 21.5 6.14052C21.9 6.34052 22.1999 6.64052 22.4 7.14052C22.7999 8.34052 23.2 9.54052 23.5 10.7405C23.5 10.8405 23.5 11.0405 23.4 11.1405C23.1 11.6405 22.7999 12.1405 22.4 12.6405C22.1 13.0405 22 13.4405 21.9 13.9405C21.7999 15.1405 21.7 16.4405 21.6 17.6405C21.5 19.1405 21.3 20.5405 21.2 22.0405C21.1 22.5405 21.1 23.1405 21.1 23.7405C21.1 23.9405 21 24.0405 20.7999 24.0405C19.5999 24.0405 18.5 24.0405 17.3 24.0405C17.1 24.0405 17 24.0405 17 23.7405C16.8 21.9405 16.7 20.2405 16.5 18.4405C16.4 17.1405 16.3 15.9405 16.2 14.6405C16.1 13.9405 15.8 13.2405 15.6 12.5405C15.7 12.2405 15.6 12.0405 15.5 11.7405Z' fill='%23ED1C24'/%3e%3cpath d='M12.5 9.5405C12.1 9.7405 11.7 9.8405 11.2 10.0405C11 9.4405 10.8 8.9405 10.6 8.3405C10.5 8.1405 10.4 8.0405 10.2 8.0405C7.4 8.0405 4.5 8.0405 1.7 8.0405C1.6 8.0405 1.5 8.0405 1.4 8.0405C1.5 8.2405 1.5 8.3405 1.5 8.5405C2.1 10.1405 2.7 11.7405 3.4 13.3405C3.5 13.5405 3.5 13.8405 3.5 14.0405C3.5 16.7405 3.5 19.4405 3.5 22.0405C3.5 22.1405 3.5 22.2405 3.5 22.4405C3.7 22.4405 3.8 22.4405 3.9 22.4405C6.7 22.4405 9.4 22.4405 12.2 22.4405C12.7 22.4405 12.7 22.4405 12.7 21.9405C12.7 19.7405 12.7 17.6405 12.7 15.4405C12.7 15.3405 12.7 15.2405 12.7 15.1405C13.2 15.1405 13.6 15.1405 14 15.1405C14 15.2405 14 15.3405 14 15.4405C14 17.7405 14 19.9405 14 22.2405C14 23.2405 13.2 23.7405 12.5 23.7405C8.9 23.7405 5.2 23.7405 1.6 23.7405C0.6 23.7405 0 23.1405 0 22.1405C0 17.4405 0 12.8405 0 8.1405C0 7.2405 0.6 6.6405 1.5 6.6405C4.5 6.6405 7.4 6.6405 10.4 6.6405C11.3 6.6405 11.6 6.9405 11.9 7.7405C12.1 8.3405 12.3 8.9405 12.5 9.5405Z' fill='%230862AF'/%3e%3c/svg%3e");
  background-repeat: no-repeat;
  width: 24px;
  height: 24px;
  display: block;
}

.tabs-title:not(.active) .icon-MP-off::before {
  content: "";
  position: relative;
  background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3e%3cmask id='mask0_31201:6441' style='mask-type:alpha' maskUnits='userSpaceOnUse' x='0' y='0' width='24' height='24'%3e%3crect width='24' height='24' fill='%235081E9'/%3e%3c/mask%3e%3cg mask='url(%23mask0_31201:6441)'%3e%3cpath fill-rule='evenodd' clip-rule='evenodd' d='M4 12.2667V15.4689H6.5698C8.95067 15.4689 9.20098 15.3398 9.97805 13.7109C10.7103 12.1749 10.7204 11.7698 10.0597 10.5087C9.39205 9.23417 8.99123 9.06445 6.65145 9.06445H4V12.2667Z' fill='%238C8C8C'/%3e%3cpath fill-rule='evenodd' clip-rule='evenodd' d='M7.73584 0.320875C7.73584 0.502335 9.05677 3.05933 10.6712 6.00379C12.2857 8.94773 13.6066 11.6462 13.6066 12C13.6066 12.3538 12.2857 15.0523 10.6712 17.9962C9.05677 20.9407 7.73584 23.4977 7.73584 23.6791C7.73584 23.8601 9.11654 24.0047 10.8047 23.9999L13.8735 23.9913L17.0314 18.2716C18.7681 15.1254 20.1888 12.3031 20.1888 12C20.1888 11.6969 18.7681 8.87461 17.0314 5.7284L13.8735 0.00865559L10.8047 0.00011627C9.11654 -0.0046871 7.73584 0.139948 7.73584 0.320875Z' fill='%238C8C8C'/%3e%3c/g%3e%3c/svg%3e ");
  background-repeat: no-repeat;
  width: 24px;
  height: 24px;
  display: block;
}

.tabs-title.active .icon-MP-on::before {
  content: "";
  position: relative;
  background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3e%3cmask id='mask0_31201:6517' style='mask-type:alpha' maskUnits='userSpaceOnUse' x='0' y='0' width='24' height='24'%3e%3crect width='24' height='24' fill='%235081E9'/%3e%3c/mask%3e%3cg mask='url(%23mask0_31201:6517)'%3e%3cpath fill-rule='evenodd' clip-rule='evenodd' d='M4 12.2667V15.4689H6.5698C8.95067 15.4689 9.20098 15.3398 9.97805 13.7109C10.7103 12.1749 10.7204 11.7698 10.0597 10.5087C9.39205 9.23417 8.99123 9.06445 6.65145 9.06445H4V12.2667Z' fill='%230862AF'/%3e%3cpath fill-rule='evenodd' clip-rule='evenodd' d='M7.73584 0.320875C7.73584 0.502335 9.05677 3.05933 10.6712 6.00379C12.2857 8.94773 13.6066 11.6462 13.6066 12C13.6066 12.3538 12.2857 15.0523 10.6712 17.9962C9.05677 20.9407 7.73584 23.4977 7.73584 23.6791C7.73584 23.8601 9.11654 24.0047 10.8047 23.9999L13.8735 23.9913L17.0314 18.2716C18.7681 15.1254 20.1888 12.3031 20.1888 12C20.1888 11.6969 18.7681 8.87461 17.0314 5.7284L13.8735 0.00865559L10.8047 0.00011627C9.11654 -0.0046871 7.73584 0.139948 7.73584 0.320875Z' fill='%23ED1C24'/%3e%3c/g%3e%3c/svg%3e ");
  background-repeat: no-repeat;
  width: 24px;
  height: 24px;
  display: block;
}


.tabs-title-click-off {
  background-color: #cccccc !important;
  color: #6c5f5f !important;
  pointer-events: none;
}

.body-right-list .tabs-title.active {
  background-color: #e5ecfc;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  color: #000;
  margin: 0;
}


</style>