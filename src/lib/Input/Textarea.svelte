<script>
	import { createEventDispatcher } from 'svelte';

	export let rows = 3;
	export let value = '';
	export let placeholder = 'Write something...';
	export let disabled;
	export let isError;

	const dispatch = createEventDispatcher();
</script>

<div class="w-full rounded-lg border px-4 py-2 flex" class:border-red-500={isError}>
	<slot name="left-area" />
	<textarea
		{rows}
		{value}
		{placeholder}
		{disabled}
		class="w-full resize-none overflow-y-auto"
		on:keyup={(e) => {
			const { value: val } = e.target;
			value = val;
			dispatch('input', value);
		}}
	/>
	<slot name="right-area" />
</div>

<style>
	textarea {
		-webkit-appearance: none;
		-moz-appearance: none;
		appearance: none;
		background: transparent;
	}
	textarea:focus {
		border: none;
		outline: none;
	}
</style>
