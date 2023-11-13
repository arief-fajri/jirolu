# jirolu-svelte

This is a collection of components I use on a regular basis
packaged up for use.

## Use it

```bash
npm i jirolu-svelte
```

Use like a normal Svelte component:

```html
<script>
	import { Text } from 'jirolu-svelte'
</script>

<Text
	type="text"
  placeholder="write something..."
	value=""
  customClass=""
  disabled={false}
  isError={false}
/>
```

## Configuration

This components uses tailwindCSS styles. you need to update the tailwind.config.cjs file from your root project folder to let the Tailwind CSS compiler know where to look for the utility classes.

``` js
...
content: [
  './src/**/*.{html,js,svelte,ts}', 
  './node_modules/jirolu-svelte/**/*.{html,js,svelte,ts}'
],
...
```

## Packaging for NPM

Arif, this is here for you to remember how to do this 🙃

Thank Scott for let me know how to [Making npm Packages with SvelteKit](https://scottspence.com/posts/making-npm-packages-with-sveltekit)

**Publish the project to NPM**

```bash
# authenticate with npm
npm login
# bump version with npm
npm version 0.0.8
# package with sveltekit
pnpm run package
# publish
npm publish
# push tags to github
git push --tags
```

**Publish @next package**

Same procedure except use the `--tag` flag:

```bash
# authenticate with npm
npm login
# bump version with npm
npm version 0.0.13
# package with sveltekit
pnpm run package
# publish with tag
npm publish --tag next
# push tags to github
git push --tags
```

**Move @next package to latest**

```bash
# authenticate with npm
npm login
# move @next to latest
npm dist-tag add sveltekit-embed@0.0.13 latest
```