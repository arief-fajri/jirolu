<script>
	import Checkbox from '$lib/Input/Checkbox.svelte';
	import Option from '$lib/Input/Option.svelte';
	import OptionWithSearch from '$lib/Input/OptionWithSearch.svelte';
	import Switch from '$lib/Input/Switch.svelte';
	import Text from '$lib/Input/Text.svelte';
	import Textarea from '$lib/Input/Textarea.svelte';
</script>

<div class="container p-6">
	<h1>Welcome to your library project</h1>
	<p>Create your package using @sveltejs/package and preview/showcase your work with SvelteKit</p>
	<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>

	<div class="w-[360px] mb-4">
		<Text />
	</div>

	<div class="w-[360px] mb-4">
		<Textarea />
	</div>

	<div class="w-[360px] mb-4">
		<Option />
	</div>

	<div class="w-[360px] mb-4">
		<OptionWithSearch />
	</div>

	<div class="w-[360px] mb-4">
		<Checkbox />
	</div>

	<div class="w-[360px] mb-4">
		<Switch />
	</div>
</div>
