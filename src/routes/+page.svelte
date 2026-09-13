<script lang="ts">
  import Hero from '$lib/components/Hero.svelte';
  import Learning from '$lib/components/Learning.svelte';
  import Projects from '$lib/components/Projects.svelte';
  import Contacts from '$lib/components/Contacts.svelte';
  import Maintenance from '$lib/components/Maintenance.svelte';
  import { githubUrl, maintenance, site } from '$lib/data/site';

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: site.name,
    url: site.url,
    description: site.description,
    sameAs: [githubUrl, 'https://t.me/crefixa'],
    knowsAbout: ['Ruby']
  };
</script>

<svelte:head>
  {#if maintenance}
    <title>emostr — сайт на реконструкции</title>
    <meta name="robots" content="noindex" />
  {:else}
    <title>{site.title}</title>
    <meta name="description" content={site.description} />
    <link rel="canonical" href={site.url} />

    <meta property="og:type" content="website" />
    <meta property="og:site_name" content="emostr" />
    <meta property="og:locale" content="ru_RU" />
    <meta property="og:title" content={site.title} />
    <meta property="og:description" content={site.description} />
    <meta property="og:url" content={site.url} />
    <meta property="og:image" content={`${site.url}/og.jpg`} />
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="630" />

    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content={site.title} />
    <meta name="twitter:description" content={site.description} />
    <meta name="twitter:image" content={`${site.url}/og.jpg`} />

    {@html `<script type="application/ld+json">${JSON.stringify(jsonLd)}</script>`}
  {/if}
</svelte:head>

{#if maintenance}
  <Maintenance />
{:else}
  <Hero />
  <Learning />
  <Projects />
  <Contacts />
{/if}
