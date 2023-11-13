<script>
	import { createEventDispatcher } from 'svelte';

	export let type = 'text';
	export let value = '';
	export let placeholder = 'Write something...';
	export let disabled;
	export let isError;
	export let customClass = '';
	export let direct = false;

	let localType = 'text';
	let firstLoad;

	if (['text', 'email', 'password', 'search', 'tel', 'url'].includes(type)) {
		localType = type;
	}

	$: if (value && !firstLoad) {
		firstLoad = true;
		if (type === 'number') {
			value = value.toLocaleString('en-US');
		}
	}

	const dispatch = createEventDispatcher();
</script>

<div
	class="w-full rounded-lg border px-4 h-[40px] flex items-center {customClass}"
	class:border-red-500={isError}
>
	<slot name="left-area" />
	<input
		{localType}
		{value}
		{placeholder}
		{disabled}
		class="w-full"
		on:keyup={(e) => {
			const { value: _value } = e.target;
			let newValue = value;
			if (type === 'number') {
				let input = _value.replace(/[\D\s\._\-]+/g, '');
				input = input ? parseInt(input, 10) : 0;
				newValue = input.toLocaleString('en-US');
			} else {
				newValue = _value;
			}

			if (direct) {
				dispatch('input', newValue);
			} else {
				if (newValue !== value) {
					dispatch('input', newValue);
				}
			}
		}}
		on:keydown={(e) => {
			const { key } = e;
			if (key !== 'Enter' && key !== 'Backspace' && key !== 'ArrowLeft' && key !== 'ArrowRight') {
				if (!/[\d]/.test(key) && type === 'number') {
					e.preventDefault();
				}
			}
		}}
	/>
	<slot name="right-area" />
</div>

<style>
	input {
		-webkit-appearance: none;
		-moz-appearance: none;
		appearance: none;
		background: transparent;
		text-align: inherit;
	}
	input:focus {
		border: none;
		outline: none;
	}
</style>
