<script setup lang="ts">

import { inject, onUpdated } from 'vue';

import { VueEagleEye } from '../../lib/vue-eagleeye';

import {
	contextInjectionKey,
	type TestState
} from '../context';

const ctx = inject<VueEagleEye<TestState>>( contextInjectionKey )!;

const { data } = ctx.stream({
	c: 'color',
	t: 'type'
} as const );

onUpdated(() => console.log( 'ProductDescription component rendered.....' ));

</script>

<template>
	<div :style="{ fontSize: '24px' }">
		<strong>Description:</strong> {{ data.c }} {{ data.t }}
	</div>
</template>
