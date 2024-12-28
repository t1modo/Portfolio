<script lang="ts">
	import Bounded from '$lib/components/Bounded.svelte';
	import Heading from '$lib/components/Heading.svelte';
	import type { Content } from '@prismicio/client';
	import { PrismicLink, PrismicRichText } from '@prismicio/svelte';

	export let slice: Content.ProjectsSlice;
</script>

<Bounded data-slice-type={slice.slice_type} data-slice-variation={slice.variation}>
	<Heading tag="h2" size="lg">
		{slice.primary.heading}
	</Heading>
	{#each slice.primary.group as item}
	<div class="ml-6 mt-8 max-w-prose md:ml-12 md:mt-16">
		<Heading tag="h3" size="sm">
			{item.title}
		</Heading>

		<p class="mt-1 flex w-fit items-center gap-1 text-2xl font-semibold tracking-light text-slate-400">
			<span>{item.role}</span> {' '}
			<span class="text-3xl font-extralight">/</span> {' '}
			<span>{item.time_period}</span>
		</p>
		<div class="prose prose-lg prose-invert mt-4">
			<PrismicRichText field={item.description} />
			<PrismicLink field={item.github_link} />
		</div>
	</div>
	{/each}
</Bounded>
