<!-- Module for fetch any data -->
<script context="module">
  export const router = true;
  // Special sveltkit function to fetch data from server
  export async function load({ fetch }) {
    // destructuring equal to context.fetch
    const res = await fetch("/guides.json");
    const { guides } = await res.json();

    // guides is the data we want to use like a prop.
    if (res.ok) {
      return {
        props: {
          guides,
        },
      };
    }
    return {
      status: res.status,
      error: new Error("Could not fetch the guides"),
    };
  }
</script>

<script>
  export let guides; // you have to export for use in the component
</script>

<div class="guides">
  <ul>
    {#each guides as guide}
      <li>
        <!-- Prefetch data when the user hover over the link -->
        <a sveltekit:prefetch href={`/guides/${guide.id}`}>{guide.title}</a>
        <!--le hago una consulta a guide.id y quedar guarado como parametro de la url-->
      </li>
    {/each}
  </ul>
</div>

<style>
  .guides {
    margin: 20px 1rem;
  }
  ul {
    display: grid;
    grid-template-columns: 1fr 1fr;
    text-align: center;
    list-style-type: none;
    padding: 0;
 
  }

  li{
    margin: 4px auto;
  }



</style>
