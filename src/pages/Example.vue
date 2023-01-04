<template>
  <input type="text"  ref="input" v-mask="'+38(0__)-___-__-__'">
  {{phone}}
</template>

<script setup>
import  {ref} from 'vue'
import {phoneMask} from "@/lib/phone-mask";

const phone = ref('');

const vMask = {
  // beforeMount: (el) => focus
  mounted: phoneMask

}
</script>

<style scoped>

body {
  margin: 0;
}

* {
  box-sizing: border-box;
}

#app {
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: 'Inter', sans-serif;
  background: #87ccad;
}

input {
  height: 46px;
  font-size: 16px;
  padding: 0 16px;
  font-family: 'Inter', sans-serif;
  border: none;
  font-weight: 500;
  outline: none;
  width: 230px;
  border-radius: 2px;
}

button {
  margin-top: 12px;
  height: 46px;
  border-radius: 2px;
  padding: 0 24px;
  width: 230px;
  border: none;
  background: #000;
  color: #fff;
  text-transform: uppercase;
  font-family: 'Inter', sans-serif;
  cursor: pointer;
  outline: none;
  transition: 0.2s;
}

button:hover {
  background: #222;
}
</style>
