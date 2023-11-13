<script>
	import { slide } from 'svelte/transition';
	import { createEventDispatcher } from 'svelte';

	import Icon from '@iconify/svelte';
	import { clickOutside } from '../helper/click-outside';
	import { foundItem } from '../helper/index';

	export let selected = '';
	export let placeholder = 'Find option...';
	export let items = [];
	export let disabled;
	export let isError;
	export let emptyText = 'Item not found';

	let inputValue = '';
	let localItems = items;

	const dispatch = createEventDispatcher();

	let open;

	$: if (selected) {
		inputValue = foundItem(selected, items);
	}
</script>

<div
	class="relative"
	use:clickOutside
	on:outclick={() => {
		open = false;
	}}
>
	<div
		class="w-full rounded-lg border px-4 h-[40px] flex items-center justify-between text-left"
		class:border-red-500={isError}
		class:cursor-not-allowed={disabled}
	>
		<div class="flex items-center w-full">
			<slot name="left-area" />
			<input
				type="text"
				value={inputValue}
				{disabled}
				class="w-full"
				class:cursor-not-allowed={disabled}
				{placeholder}
				on:keyup={(e) => {
					const { value: _value } = e.target;
					inputValue = _value;
					open = true;
					if (_value) {
						if (items.length) {
							localItems = items.filter((f) => f.name.toLowerCase().includes(_value.toLowerCase()));
						}
					} else {
						localItems = items;
					}
				}}
			/>
			{#if inputValue}
				<button
					on:click={() => {
						inputValue = '';
						selected = '';
						localItems = items;
						dispatch('select', selected);
					}}
				>
					<div class="text-2xl" class:rotate-180={open}>
						<Icon icon="eva:close-circle-outline" />
					</div>
				</button>
			{/if}
		</div>
		<button
			class:cursor-not-allowed={disabled}
			on:click={() => {
				if (!disabled) {
					open = !open;
				}
			}}
		>
			<div class="text-2xl transition-all duration-300" class:rotate-180={open}>
				<Icon icon="eva:chevron-down-fill" />
			</div>
		</button>
	</div>

	{#if open}
		<div class="absolute top-[44px] left-0 z-[1] w-full pb-12" transition:slide>
			<div
				class="border bg-white rounded-lg overflow-y-auto max-h-[200px] w-full"
				style="box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.12);"
			>
				{#if localItems.length}
					{#each localItems as item}
						<button
							class="text-left w-full px-3 py-2 hover:bg-grey/[0.2]"
							on:click={() => {
								selected = item.value;
								open = false;
								dispatch('select', selected);
							}}
						>
							<p>{item.name}</p>
						</button>
					{/each}
				{:else}
					<div class="flex items-center justify-center h-[70px]">
						<p class="font-bold text-grey">{emptyText}</p>
					</div>
				{/if}
			</div>
		</div>
	{/if}
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
