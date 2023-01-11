<template>

</template>

<script setup>

import { useToast } from "vue-toastification";

// Get toast interface
const toast = useToast();

// Use it!
toast("I'm a toast!");

// or with options
toast.success("My toast content", {
  timeout: 2000
});
</script>
