<script setup lang="ts">
	import { computed, inject, onUpdated } from 'vue';
	import { EagleEyeContext } from '@webkrafters/vue-eagleeye';
	import {
		contextInjectionKey,
		type TestState
	} from '../context';

	const ctx = inject<EagleEyeContext<TestState>>( contextInjectionKey )!;
	const { data } = ctx.stream({ p: 'price' } as const );
	const pOutput = computed(() => data.p.toFixed( 2 ));

	onUpdated(() => console.log( 'ProductDescription component rendered.....' ));
</script>

<template>
	<div :style="{ 'font-size': '36px', 'font-weight': 800 }">
		${{ pOutput }}
	</div>
</template>
