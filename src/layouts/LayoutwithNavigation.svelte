<script>
    import Sidebar from '../components/sidebar.svelte';
    import Topbar from '../components/topbar.svelte';

    export let active = "";
</script>

<style>
    div.layout {
        width: 100%;
        height: 100%;
        display: grid;
        grid-template: repeat(2, min-content) auto / auto;
    }

    @media(min-width:768px) {
        div.layout {
            grid-template: min-content auto / min-content auto;
        
        }
        :global(.top-navbar) {
            grid-column-end: span 2;
        }
    }
</style>

<div class="layout">
<Topbar/>
<Sidebar active={active}/>
<slot></slot>
</div>