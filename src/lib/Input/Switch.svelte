<script>
	import { createEventDispatcher } from 'svelte';

	export let checked = true;
	export let disabled = false;
	export let needValidate = false;
	export let activeColor = '#3a43c8';
	export let bgSlider = '#e0e0e0';
	export let sliderColor = 'white';

	const dispatch = createEventDispatcher();
</script>

<label
	class="switch"
	class:opacity-50={disabled}
	style="--active-color: {activeColor}; --bg-slider: {bgSlider}; --slider-color: {sliderColor}"
>
	<input
		type="checkbox"
		bind:checked
		{disabled}
		on:change={(e) => {
			dispatch('change', e.target.checked);
		}}
		on:click={(e) => {
			if (needValidate) {
				e.preventDefault();
			}
			dispatch('click');
		}}
	/>
	<span class="slider round" class:!cursor-not-allowed={disabled} />
</label>

<style>
	.switch {
		position: relative;
		display: inline-block;
		width: 48px;
		height: 24px;
	}

	.switch input {
		opacity: 0;
		width: 0;
		height: 0;
	}

	.slider {
		position: absolute;
		cursor: pointer;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background-color: var(--bg-slider);
		-webkit-transition: 0.4s;
		transition: 0.4s;
	}

	.slider:before {
		position: absolute;
		content: '';
		height: 18px;
		width: 18px;
		left: 4px;
		bottom: 3px;
		background-color: var(--slider-color);
		-webkit-transition: 0.4s;
		transition: 0.4s;
	}

	.switch input:checked + .slider {
		background-color: var(--active-color);
	}

	/* .switch input:focus + .slider {
		box-shadow: 0 0 1px #3a43c8;
	} */

	.switch input:checked + .slider:before {
		-webkit-transform: translateX(22px);
		-ms-transform: translateX(22px);
		transform: translateX(22px);
	}

	/* Rounded sliders */
	.slider.round {
		border-radius: 34px;
	}

	.slider.round:before {
		border-radius: 50%;
	}
</style>
