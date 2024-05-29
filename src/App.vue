<script setup>
import { RouterView } from 'vue-router'
import HeaderView from './components/HeaderView.vue' 
</script>

<template>
  <HeaderView />
  <RouterView />
</template>

<style>
  a {
    text-decoration: none;
  }
</style>