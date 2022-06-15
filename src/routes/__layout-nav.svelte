<script>
  import Title from '$lib/title.svelte'
  import '../styles/global.css'
</script>

<header>
  <nav>
    <a href="/"><Title title="Peter Gaming" /></a>
    <div class="links">
      <a href="/">Home</a>
      <a href="/about">About</a>
      <a href="/guides">Video-Games</a>
    </div>
  </nav> 
</header>
<main>
  <slot></slot>
</main>
<footer>
  <p>Copyright 2022 Pedro Braude</p>
</footer>

<style>
  header {
    text-align: center;
    background: rgba(0,0,0,0.1);
    margin: 0 1rem;
  }
  main {
    max-width: 960px;
    margin: 20px auto;
  }
  footer {
    text-align: center;
  }
  nav {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    max-width: 1980px;
    margin: 0 1rem;
  }
  .links {
    margin-left: auto;
  }
  a {
    margin-left: 10px;
  }
</style>