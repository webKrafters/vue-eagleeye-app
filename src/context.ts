export const defaultState = {
	color: 'Burgundy',
	customer: {
		name: {
			first: null as unknown as string,
			last: null as unknown as string
		},
		phone: null as unknown as string
	},
	price: 22.5,
	type: ''
};

export type TestState = typeof defaultState;

export const contextInjectionKey = 'TEST-CONTEXT';
