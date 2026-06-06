<script setup lang="ts">

import { computed, inject, onUpdated } from 'vue';

import { VueEagleEye } from '../../lib/vue-eagleeye';

import {
	contextInjectionKey,
	type TestState
} from '../context';

const ctx = inject<VueEagleEye<TestState>>( contextInjectionKey )!;

const { data } = ctx.stream({ phone: 'customer.phone' } as const );

const phone = computed(() => {
	let { phone: p } = data;
	if( !p ) { return 'n.a.' }
	p = `${ p }`;
	return `(${ p.slice( 0, 3 ) }) ${ p.slice( 3, 6 ) }-${ p.slice( 6, 10 ) }`;
})

onUpdated(() => console.log( 'Reset component rendered.....' ));

</script>

<template>
	<span>Phone: {{ phone }}</span>
</template>


