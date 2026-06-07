// eslint-disable-next-line vue/multi-word-component-names
<script setup lang="ts">

import { inject, onUpdated } from 'vue';

import { EagleEyeContext } from '@webkrafters/vue-eagleeye';

import {
	contextInjectionKey,
	type TestState
} from '../context';

import Editor from './Editor.vue';
import Tally from './Tally.vue';
import ProductDescription from './ProductDescription.vue';
import PriceSticker from './PriceSticker.vue';

const ctx = inject<EagleEyeContext<TestState>>( contextInjectionKey )!;

const { data, setState } = ctx.stream({ price: 'price' } as const );

const overridePricing = (( e : KeyboardEvent ) => {
	setState({ price: +( e.target as HTMLInputElement ).value } as unknown as TestState );
});

onUpdated(() => console.log( 'Product component rendered.....' ));

</script>

<template>
	<div>
		<div :style="{ 'margin-bottom': '10px' }">
			<label>$ <input :value="data.price" @keyup="overridePricing" type="number" placeholder="override price here..."/></label>
		</div>
		<div>
			<div :style="{
				'border-bottom': '1px solid #333',
				'margin-bottom': '10px',
				'padding-bottom': '5px'
			}">
				<Editor />
				<Tally />
			</div>
			<ProductDescription />
			<PriceSticker />
		</div>
	</div>
</template>
