<script>
    export let type="text";
    export let name;
    export let id;
    export let labelText = "";
    export let placeholder = "";
    const cat1 = ["text","password"];
</script>


{#if cat1.includes(type)}
<div class ="form-group">
    {#if !!labelText}
    <label class="control-label" for="{id}">{labelText}</label>
    {/if}
    <input class="form-control" type="{type}" name="{name}" id="{id}" placeholder="{placeholder}">
</div>

{:else}
<span>No input of type "{type}"</span>
{/if}

