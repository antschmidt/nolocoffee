<script>
    import Open from '../images/open-sign-svgrepo-com.svelte'
    import Closed from '../images/closed-svgrepo-com.svelte'
    let isOpen = async () => {
        const response = await fetch('https://nolo.coffee/open')
        const open = await response.text()
        return open
    }
</script>
<h1>Nolo 503 Coffee</h1>
<p class='open'>
    {#await isOpen()}
    loading
    {:then open}
    {#if open === 'true'}
        <Open />
    {:else}
        <Closed />
    {/if}
    {:catch}
        <Closed />
    {/await}
</p>

<style>
    .open {
        max-width: 20vw;
    }
</style>