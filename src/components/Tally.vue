<script setup lang="ts">
	import isEmpty from 'lodash.isempty';
	import { inject, onUpdated } from 'vue';
	import { VueEagleEye } from '../../lib/vue-eagleeye';
	import {
		contextInjectionKey,
		type TestState
	} from '../context';
	import CapitalizedDisplay from './CapitalizedDisplay.vue';
	import CustomerPhoneDisplay from './CustomerPhoneDisplay.vue';
	import Reset from './Reset.vue';
	
	const ctx = inject<VueEagleEye<TestState>>( contextInjectionKey )!;
	const { data } = ctx.stream({
		color: 'color',
		name: 'customer.name',
		price: 'price',
		type: 'type'
	} as const );

	onUpdated(() => console.log( 'TallyDisplay component rendered.....' ));
</script>

<template>
	<div :style="{ margin: '20px 0 10px' }">
		<div :style="{ float: 'left', 'font-size': '1.75rem' }">
			{{ 'Customer: ' }}
			<span v-if="isEmpty( data.name.first ) && isEmpty( data.name.last )">
				n.a.
			</span>
			<div :style="{ display: 'inline-block' }" v-else>
				<CapitalizedDisplay :text="data.name.first" />
				{{ ' ' }}
				<CapitalizedDisplay :text="data.name.last" />
			</div>
		</div>
		<div :style="{ clear: 'both', 'padding-left': '3px' }">
			<CustomerPhoneDisplay />
		</div>
		<table>
			<tbody>
				<tr><td><label>Type:</label></td><td>
					<CapitalizedDisplay :text="data.type" />
				</td></tr>
				<tr><td><label>Color:</label></td><td>
					<CapitalizedDisplay :text="data.color" />
				</td></tr>
				<tr><td><label>Price:</label></td><td>{{ data.price.toFixed( 2 ) }}</td></tr>
			</tbody>
		</table>
		<div :style="{ 'text-align': 'right' }">
			<Reset />
		</div>
	</div>
</template>
