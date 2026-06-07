// eslint-disable-next-line vue/multi-word-component-names
<script setup lang="ts">

	import { inject, onUpdated } from 'vue';

	import {
		FULL_STATE_SELECTOR,
		EagleEyeContext
	} from '@webkrafters/eagleeye';
	
	import {
		contextInjectionKey,
		type TestState
	} from '../context';

	const ctx = inject<EagleEyeContext<TestState>>( contextInjectionKey )!;

	const { resetState } = ctx.stream();

	const reset = () => resetState([ FULL_STATE_SELECTOR ]);

	onUpdated(() => console.log( 'Reset component rendered.....' ));

</script>

<template>
	<button class="reset-btn" @click="reset">reset context</button>
</template>

<style scoped>
.reset-btn {
	border: 1px solid var( --aquamarine );
    background-color: var( --aquamarine );
    border-radius: 4px;
    color: #fff;
	cursor: pointer;
    font-size: .85rem;
    font-weight: 700;
    padding: 7px 20px;
	&:hover {
		background-color: var( --navy );
		border: 1px solid var( --navy );
	}
}
</style>
