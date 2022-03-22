<script context="module">
    import { sessionAuthenticate } from '../../authenticate';

    export async function load({ session }) {
        return sessionAuthenticate(session);
    };
</script>

<script>
    import LayoutWithNavigation from '/src/layouts/LayoutwithNavigation.svelte';
    import Table from '/src/components/table.svelte';

    export let tableData = [];
</script>



<LayoutWithNavigation>
    <div class="col-md-12">
        <div class="panel panel-default">
            <div class="panel-body">
                <h1>Duombazės prijungimas</h1>
                <Table data={tableData}></Table>
            </div>
        </div>
    </div>
</LayoutWithNavigation>