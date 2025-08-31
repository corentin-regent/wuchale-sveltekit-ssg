<script>
  let { children } = $props();
</script>

<svelte:head>
  <title>My title</title>
</svelte:head>

<a href="/fr/">French</a>
{@render children()}
