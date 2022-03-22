<script context="module">
    export async function load({ props, session }) {
        if (!session?.user) {
            return {
                    status: 303,
                    redirect: "/signin"
                }
            }
        return { props };
    };
</script>

<slot></slot>