<script context="module">
  // Special sveltkit function to fetch data from server
  export async function load({ fetch, params }) {
    const id = params.id; // Traigo el id guardado en el anchor de index
    // destructuring equal to context.fetch

    const res = await fetch(`/guides/${id}.json`);
    const { guide } = await res.json();
    // guides is the data we want to use like a prop.
    if (res.ok) {
      return {
        props: {
          guide,
        },
      };
    }
    return {
      status: res.status,
      error: new Error("Could not fetch the guide"),
    };
  }
</script>

<script>
  export let guide;
</script>

<div class="guide">
  <h2>{guide.title}</h2>
  <p>{guide.body}</p>
</div>

<style>
  .guide {
    margin-top: 40px;
    padding: 10px;
    border: 1px dotted rgba(255, 255, 255, 0.2);
  }
</style>
