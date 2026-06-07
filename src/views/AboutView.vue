<script setup lang="ts">
  import { computed, inject } from 'vue';
  import { EagleEyeContext } from '@webkrafters/vue-eagleeye';
  import {
    contextInjectionKey,
    type TestState
  } from '../context';
  import ProductDescription from '../components/ProductDescription.vue';
  import Reset from '../components/Reset.vue';

  const ctx = inject<EagleEyeContext<TestState>>( contextInjectionKey )!;
  const { data } = ctx.stream({ type: 'type' });
  const type = computed( () => ( data.type ?? '' ).length ? data.type : 'n.a.' );
  
</script>

<template>
  <div class="about">
    <h1>A bit about {{ type }}</h1>
    <ProductDescription />
    <div :style="{ 'margin-top': '2rem' }">
      <Reset /> entirely from here!
    </div>
  </div>
</template>
