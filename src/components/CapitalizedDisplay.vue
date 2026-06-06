<script setup lang="ts">

import { computed, onUpdated } from 'vue';

const props = defineProps<{ text : String }>();

const t = computed(() => {
	const _t = ( props.text ?? '' ).slice();
	_t.length && _t.charAt( 0 ).toUpperCase();
	return _t;
});

onUpdated(() => console.log( `CapitalizedDisplay( ${ props.text } ) component rendered.....` ));

</script>

<template>{{ t }}</template>
