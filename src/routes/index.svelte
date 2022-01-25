<script>
    let isOpen = async () => {
        const response = await fetch('https://nolo.coffee/open')
        const open = await response.text()
        return open
    }
</script>
<h1>Nolo 503 Coffee</h1>
<p>
    {#await isOpen() then open}
    {#if open === 'false'}
    Open
    {:else}
    Nope
    {/if}
    {/await}
</p>
