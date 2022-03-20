<script>
    import LayoutWithNavigation from '/src/layouts/LayoutwithNavigation.svelte';
</script>

<script context="module">
    import { sessionAuthenticate } from '../authenticate';

    export async function load({ session }) {
        return sessionAuthenticate(session);
    };
</script>

<LayoutWithNavigation>
    <span>Hello world</span>
</LayoutWithNavigation>