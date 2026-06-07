<script setup lang="ts">
	import { computed, inject, onUpdated } from 'vue';
	import { EagleEyeContext } from '@webkrafters/vue-eagleeye';
	import {
		contextInjectionKey,
		type TestState
	} from '../context';
import CapitalizedDisplay from './CapitalizedDisplay.vue';

	const ctx = inject<EagleEyeContext<TestState>>( contextInjectionKey )!;

	const { data } = ctx.stream({
		c: 'color',
		t: 'type'
	});

	const hasType = computed( () => ( data.t ?? '' ).length > 0 );

	onUpdated(() => console.log( 'ProductDescription component rendered.....' ));
</script>

<template>
	<div :style="{ fontSize: '24px' }">
		<strong>Description:</strong>
		{{ ' ' }}
		<span v-if="hasType" :style="{ display: 'inline-block' }">
			<CapitalizedDisplay :text="data.c" />
			{{ ' ' }}
			<CapitalizedDisplay :text="data.t" />
		</span>
		<span v-else>n.a.</span>
	</div>
</template>
