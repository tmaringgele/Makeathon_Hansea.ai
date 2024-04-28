<script>
    import welcome from "$lib/images/svelte-welcome.webp";
    import welcome_fallback from "$lib/images/svelte-welcome.png";
    import { Search, Button } from "flowbite-svelte";
    import { ExclamationCircleSolid } from "flowbite-svelte-icons";
    import sat1 from "$lib/images/sat1.png";
    import sat2 from "$lib/images/sat2.png";
    import sat3 from "$lib/images/sat3.png";

    export let data;

    let searchTerm = "";

    let suppliers = [
        {
            name: "MQ748",
            warning: true,
        },
        {
            name: "MR956",
            warning: true,
        },
        {
            name: "MLL452",
            warning: false,
        },
    ];

    let self = suppliers.filter((s) => s.name == data.qid)[0];
</script>

<section class="flex flex-row content-between items-center">
    <div class=" w-full flex flex-row content-end self-end">
        <h1 class="self-end pt-3 text-3xl font-bold">{data.qid}</h1>
    </div>
    {#if self.warning}
        <div
            class="  border-red-600 border-2 flex text-center w-26 bg-red-600 text-white font-bold"
        >
            Severe risk of deforestation!
        </div>
    {:else}
        <div
            class="  border-green-600 border-2 flex text-center w-26 bg-green-600 text-white font-bold"
        >
            Low risk of deforestation.
        </div>
    {/if}
</section>
Amazonas rain forest

<section class="flex flex-row content-between items-center mt-6 gap-28">
    <div class=" flex flex-row content-between self-end">
        <img src={sat1} class="w-[400px]" />
    </div>
    <div>
        <div>
            <span class="text-5xl font-bold">60% </span><span class="text-4xl"
                >forest area
            </span>
        </div>
        <ul>
            <li>no significant loss in the past 2 years</li>
            <li>little deforestation expected in the next two years</li>
        </ul>
    </div>
</section>
