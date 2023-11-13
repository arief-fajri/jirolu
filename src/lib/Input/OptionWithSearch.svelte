<script>
	import { slide } from 'svelte/transition';
	import { createEventDispatcher } from 'svelte';

	import { clickOutside } from '../helper/click-outside.js';
	import { foundItem } from '../helper/index.js';

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
					<div>
						<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
							><g id="evaCloseCircleOutline0"
								><g id="evaCloseCircleOutline1"
									><g id="evaCloseCircleOutline2" fill="currentColor"
										><path
											d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2Zm0 18a8 8 0 1 1 8-8a8 8 0 0 1-8 8Z"
										/><path
											d="M14.71 9.29a1 1 0 0 0-1.42 0L12 10.59l-1.29-1.3a1 1 0 0 0-1.42 1.42l1.3 1.29l-1.3 1.29a1 1 0 0 0 0 1.42a1 1 0 0 0 1.42 0l1.29-1.3l1.29 1.3a1 1 0 0 0 1.42 0a1 1 0 0 0 0-1.42L13.41 12l1.3-1.29a1 1 0 0 0 0-1.42Z"
										/></g
									></g
								></g
							></svg
						>
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
				<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
					><g id="evaChevronDownFill0"
						><g id="evaChevronDownFill1"
							><path
								id="evaChevronDownFill2"
								fill="currentColor"
								d="M12 15.5a1 1 0 0 1-.71-.29l-4-4a1 1 0 1 1 1.42-1.42L12 13.1l3.3-3.18a1 1 0 1 1 1.38 1.44l-4 3.86a1 1 0 0 1-.68.28Z"
							/></g
						></g
					></svg
				>
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
