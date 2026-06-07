<script setup lang="ts">
	import isEmpty from 'lodash.isempty';
	import { computed, inject, onUpdated } from 'vue';
	import { EagleEyeContext } from '@webkrafters/vue-eagleeye';
	import {
		contextInjectionKey,
		type TestState
	} from '../context';
	import CapitalizedDisplay from './CapitalizedDisplay.vue';
	import CustomerPhoneDisplay from './CustomerPhoneDisplay.vue';
	import Reset from './Reset.vue';
	
	const ctx = inject<EagleEyeContext<TestState>>( contextInjectionKey )!;
	const { data } = ctx.stream({
		color: 'color',
		name: 'customer.name',
		price: 'price',
		type: 'type'
	});

	const hasColor = computed(() => ( data.color ?? '' ).length );
	const hasName = computed(() => !isEmpty( data.name.first ) || !isEmpty( data.name.last ))
	const hasType = computed(() => ( data.type ?? '' ).length );

	onUpdated(() => console.log( 'TallyDisplay component rendered.....' ));
</script>

<template>
	<div :style="{ margin: '20px 0 10px' }">
		<div :style="{ float: 'left', 'font-size': '1.75rem' }">
			{{ 'Customer: ' }}
			<div v-if="hasName" :style="{ display: 'inline-block' }">
				<CapitalizedDisplay :text="data.name.first" />
				{{ ' ' }}
				<CapitalizedDisplay :text="data.name.last" />
			</div>
			<span v-else>n.a.</span>
		</div>
		<div :style="{ clear: 'both', 'padding-left': '3px' }">
			<CustomerPhoneDisplay />
		</div>
		<table>
			<tbody>
				<tr>
					<td><label>Type:</label></td>
					<td v-if="hasType"><CapitalizedDisplay :text="data.type" /></td>
					<td v-else>n.a.</td>
				</tr>
				<tr>
					<td><label>Color:</label></td>
					<td v-if="hasColor"><CapitalizedDisplay :text="data.color" /></td>
					<td v-else>n.a.</td>
				</tr>
				<tr><td><label>Price:</label></td><td>{{ data.price.toFixed( 2 ) }}</td></tr>
			</tbody>
		</table>
		<div :style="{ 'text-align': 'right' }">
			<Reset />
		</div>
	</div>
</template>
