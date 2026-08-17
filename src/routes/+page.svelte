<script lang="ts">
  import Hero from '$lib/components/Hero.svelte';
  import StackTicker from '$lib/components/StackTicker.svelte';
  import Studio from '$lib/components/Studio.svelte';
  import Stack from '$lib/components/Stack.svelte';
  import Projects from '$lib/components/Projects.svelte';
  import Contact from '$lib/components/Contact.svelte';
  import { site } from '$lib/data/site';

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'emostr',
    url: site.url,
    logo: `${site.url}/logo.png`,
    description: site.description,
    sameAs: ['https://github.com/emostr', 'https://t.me/crefixa'],
    email: 'crefixa@proton.me',
    knowsAbout: ['TypeScript', 'Vue', 'Svelte', 'Go', 'Node.js', 'PHP', 'Laravel', 'C#', '.NET', 'Java', 'MariaDB']
  };
</script>

<svelte:head>
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
  <meta property="og:image:alt" content="emostr — креативная студия цифровых платформ" />

  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content={site.title} />
  <meta name="twitter:description" content={site.description} />
  <meta name="twitter:image" content={`${site.url}/og.jpg`} />

  {@html `<script type="application/ld+json">${JSON.stringify(jsonLd)}</script>`}
</svelte:head>

<Hero />
<StackTicker />
<Studio />
<Stack />
<Projects />
<Contact />
