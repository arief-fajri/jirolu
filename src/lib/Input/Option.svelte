<script>
	import { slide } from 'svelte/transition';
	import { createEventDispatcher } from 'svelte';

	import Icon from '@iconify/svelte';
	import { clickOutside } from '../helper/click-outside';
	import { foundItem } from '../helper/index';

	export let selected = '';
	export let placeholder = 'Select option...';
	export let items = [];
	export let disabled;
	export let isError;
	export let emptyText = 'Item not found';

	const dispatch = createEventDispatcher();

	let open;
</script>

<div
	class="relative"
	use:clickOutside
	on:outclick={() => {
		open = false;
	}}
>
	<button
		class="w-full rounded-lg border px-4 h-[40px] flex items-center justify-between text-left"
		class:border-red-500={isError}
		class:cursor-not-allowed={disabled}
		on:click={() => {
			if (!disabled) {
				open = !open;
			}
		}}
	>
		<div class="flex items-center">
			<slot name="left-area" />
			{#if selected}
				<p>{foundItem(selected, items) || ''}</p>
			{:else}
				<p class="opacity-40">{placeholder}</p>
			{/if}
		</div>
		<div class="text-2xl transition-all duration-300" class:rotate-180={open}>
			<Icon icon="eva:chevron-down-fill" />
		</div>
	</button>
	{#if open}
		<div class="absolute top-[44px] left-0 z-[1] w-full pb-12" transition:slide>
			<div
				class="border bg-white rounded-lg overflow-y-auto max-h-[200px] w-full"
				style="box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.12);"
			>
				{#if items.length}
					{#each items as item}
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
					<div class="flex items-center justify-center min-h-[70px]">
						<slot name="empty">
							<p class="font-bold text-grey">{emptyText}</p>
						</slot>
					</div>
				{/if}
			</div>
		</div>
	{/if}
</div>
