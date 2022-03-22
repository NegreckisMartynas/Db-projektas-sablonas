<script>
    import LayoutWithNavigation from '/src/layouts/LayoutwithNavigation.svelte';
    import Table from '/src/components/table.svelte';

    export let data = [];
</script>

<LayoutWithNavigation>
    <div class="col-md-12">
        <div class="panel panel-default">
            <div class="panel-body">
                <h1>Duombazės prijungimas</h1>
                <Table data={data}></Table>
            </div>
        </div>
    </div>
</LayoutWithNavigation>