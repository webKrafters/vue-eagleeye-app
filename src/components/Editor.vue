<script setup lang="ts">
	import { inject, onUpdated, reactive } from 'vue';
	import { VueEagleEye } from '../../lib/vue-eagleeye';
	import {
		contextInjectionKey,
		type TestState
	} from '../context';

	const ctx = inject<VueEagleEye<TestState>>( contextInjectionKey )!;
	const { setState } = ctx.stream();
	const s = reactive({
		color: '',
		first: '',
		last: '',
		phone: '',
		price: 0.00,
		type: ''
	});

	const updateColor = () => setState({ color: s.color } as TestState );
	const updateName = () => setState({
		customer: { name: {
			first: s.first,
			last: s.last
		} }
	});
	const updatePhone = () => setState({ customer: { phone: s.phone } } as TestState );
	const updatePrice = () => setState({ price: s.price } as TestState );
	const updateType = () => setState({ type: s.type } as TestState );

	onUpdated(() => console.log( 'Editor component rendered.....' ));

</script>

<template>
	<fieldset :style="{ margin: '10px 0' }">
		<legend>Editor</legend>
		<h3 :style="{ margin: '0.5rem 0' }">Customer:</h3>
		<div :style="{ float: 'left', margin: '10px 0' }">
			<input v-model="s.first" placeholder="First name" />
			{{ ' ' }}
			<input v-model="s.last" placeholder="Last name" />
			{{ ' ' }}
			<button @click="updateName">update customer</button>
		</div>
		<div :style="{ clear: 'both', margin: '10px 0' }">
			<label>New Phone: <input
				maxLength="10"
				placeholder="Empty or 10-digit integer"
				v-model="s.phone"
				type="number"
			/></label>
			{{ ' ' }}
			<button @click="updatePhone">update phone</button>
		</div>
		<hr :style="{ margin: '1.5rem 0' }" />
		<div :style="{ margin: '10px 0' }">
			<label>New Price: <input v-model.number="s.price" type="number" /></label>
			{{ ' ' }}
			<button @click="updatePrice">update price</button>
		</div>
		<div :style="{ margin: '10px 0' }">
			<label>New Color: <input v-model="s.color" /></label>
			{{ ' ' }}
			<button @click="updateColor">update color</button>
		</div>
		<div :style="{ margin: '10px 0' }">
			<label>New Type: <input v-model="s.type" /></label>
			{{ ' ' }}
			<button @click="updateType">update type</button>
		</div>
	</fieldset>
</template>
