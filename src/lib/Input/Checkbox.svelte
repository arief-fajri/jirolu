<script>
	import { createEventDispatcher } from 'svelte';

	export let checked;
	export let activeColor = '#3a43c8';
	export let checkmarkColor = 'white';
	export let checkmarkBorderColor = '#CCCCCC';
	export let disabled;

	const dispatch = createEventDispatcher();
</script>

<label
	class="checkbox-container"
	style="--active-color: {activeColor}; --checkmark-color: {checkmarkColor}; --checkmark-border: {checkmarkBorderColor}"
>
	<input
		type="checkbox"
		{disabled}
		bind:checked
		on:change={(e) => {
			dispatch('change', e);
		}}
	/>
	<span class="checkmark flex-none" />
	<div class="" />
</label>

<style>
	/* The container */
	.checkbox-container {
		display: flex;
		align-items: center;
		width: 100%;
		height: 100%;
		position: relative;
		cursor: pointer;
		-webkit-user-select: none;
		-moz-user-select: none;
		-ms-user-select: none;
		user-select: none;
	}

	/* Hide the browser's default checkbox */
	.checkbox-container input {
		position: absolute;
		opacity: 0;
		cursor: pointer;
		height: 0;
		width: 0;
	}

	/* Create a custom checkbox */
	.checkmark {
		position: relative;
		height: 16px;
		width: 16px;
		background-color: var(--checkmark-color);
		border-radius: 4px;
		border: 1px solid var(--checkmark-border);
	}
	/* .disabled.checkmark {
	background-color: #ccc;
} */

	/* On mouse-over, add a grey background color */
	.checkbox-container:hover input ~ .checkmark {
		background-color: var(--active-color);
	}

	/* When the checkbox is checked, add a blue background */
	.checkbox-container input:checked ~ .checkmark {
		background-color: var(--active-color);
		border-color: var(--active-color);
	}

	/* Create the checkmark/indicator (hidden when not checked) */
	.checkmark:after {
		content: '';
		position: absolute;
		display: none;
	}

	/* Show the checkmark when checked */
	.checkbox-container input:checked ~ .checkmark:after {
		display: block;
	}

	/* Style the checkmark/indicator */
	.checkbox-container .checkmark:after {
		left: 50%;
		top: calc(50% - 1px);
		width: 5px;
		height: 10px;
		border: solid var(--checkmark-color);
		border-width: 0 2px 2px 0;
		transform: translate(-50%, -50%) rotate(45deg);
		-webkit-transform: translate(-50%, -50%) rotate(45deg);
		-ms-transform: translate(-50%, -50%) rotate(45deg);
	}
</style>
