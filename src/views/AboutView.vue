<script setup lang="ts">
  import { inject } from 'vue';
  import { VueEagleEye } from '../../lib/vue-eagleeye';
  import {
    contextInjectionKey,
    type TestState
  } from '../context';
  import ProductDescription from '../components/ProductDescription.vue';
  import Reset from '../components/Reset.vue';

  const ctx = inject<VueEagleEye<TestState>>( contextInjectionKey )!;
  const { data } = ctx.stream({ type: 'type' });
  
</script>

<template>
  <div class="about">
    <h1>A bit about {{ data.type }}</h1>
    <ProductDescription />
    <div :style="{ 'margin-top': '2rem' }">
      <Reset /> entirely from here!
    </div>
  </div>
</template>
