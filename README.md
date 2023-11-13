# jirolu-svelte

This is a collection of components I use on a regular basis
packaged up for use.

## Components

<table>
  <tr>
  <th align="left">Name</th>
  <th align="left">Props</th>
  <th align="left">Event</th>
  <th align="left">Supported Slot</th>
  </tr>
<tr>
<td vAlign="top">

```InputText```

</td>
<td vAlign="top">

- type ( *string* )
- placeholder ( *string* )
- value ( *string* )
- customClass ( *string* )
- disabled ( *bool* )
- isError ( *bool* )

</td>
<td vAlign="top">

```
on:input
```

</td>
<td vAlign="top">

- ```left-area```
- ```right-area```

</td>
</tr>
<tr>
<td vAlign="top">

```InputTextarea```

</td>
<td vAlign="top">

- rows ( *int* )
- placeholder ( *string* )
- value ( *string* )
- disabled ( *bool* )
- isError ( *bool* )

</td>
<td vAlign="top">

```
on:input
```

</td>
<td vAlign="top">

- ```left-area```
- ```right-area```

</td>
</tr>
<tr>
<td vAlign="top">

```InputOption```

</td>
<td vAlign="top">

- selected ( *string* )
- placeholder ( *string* )
- items ( *array* )
- disabled ( *bool* )
- isError ( *bool* )
- emptyText ( *string*)

</td>
<td vAlign="top">

```
on:select
```

</td>
<td vAlign="top">

- ```left-area```

</td>
</tr>
<tr>
<td vAlign="top">

```InputOptionWithSearch```

</td>
<td vAlign="top">

- selected ( *string* )
- placeholder ( *string* )
- items ( *array* )
- disabled ( *bool* )
- isError ( *bool* )
- emptyText ( *string*)

</td>
<td vAlign="top">

```
on:select
```

</td>
<td vAlign="top">

- ```left-area```

</td>
</tr>
<tr>
<td vAlign="top">

```InputCheckbox```

</td>
<td vAlign="top">

- checked ( *bool* )
- disabled ( *bool* )
- activeColor ( *string* )
- checkmarkColor ( *string* )
- checkmarkBorderColor ( *string* )

</td>
<td vAlign="top">

```
on:change
```

</td>
<td vAlign="top">

No

</td>
</tr>
<tr>
<td vAlign="top">

```InputSlider```

</td>
<td vAlign="top">

- checked ( *bool* )
- disabled ( *bool* )
- needValidate ( *bool* )
- activeColor ( *string* )
- bgSlider ( *string* )
- sliderColor ( *string* )

</td>
<td vAlign="top">

```
on:change
```

```
on:click
```

</td>
<td vAlign="top">

No

</td>
</tr>
</table>

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
  on:input={(e)=>{
    console.log(e.detail)
  }}
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