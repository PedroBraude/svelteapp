<script>
  import Title from "../lib/title.svelte";
</script>


<div class="index">
  <h1>Welcome</h1>
  <p>
    It is a demo app of svelte.
  </p>
  <button>
    <a href="/guides">View videogames</a>
  </button>
  <button>
    <a href="/about">About Me</a>
  </button>
</div>

<style>
  .index {
    text-align: center;
    display: block;
  }
  a {
    color: black;
    font-family: 'VT323', monospace;
    font-weight: normal;
    text-decoration: none;
}


</style>
