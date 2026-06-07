<script setup lang="ts">

import { computed, onUpdated } from 'vue';

const props = defineProps<{ text : String }>();

const t = computed(() => {
	let _t = ( props.text ?? '' ).slice();
	if(_t.length ) {
		_t = `${ _t.charAt( 0 ).toUpperCase() }${ _t.slice(  1 ) }`
	}
	return _t;
});

onUpdated(() => console.log( `CapitalizedDisplay( ${ props.text } ) component rendered.....` ));

</script>

<template>{{ t }}</template>
