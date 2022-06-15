<script>
  import Title from "../lib/title.svelte";
</script>

<Title title="Ninja Gaming Guide" slot='header'/>
<div class="index">
  <h1>Bem Vindo</h1>
  <p>
    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officia excepturi
    placeat necessitatibus distinctio fugiat cumque veniam reprehenderit modi
    esse fugit delectus incidunt vel voluptate quibusdam mollitia quasi minus,
    voluptatum voluptates? Lorem ipsum dolor sit amet consectetur adipisicing
    elit. Quasi cupiditate voluptatum ex ab. Consectetur eius delectus incidunt
    voluptates repellat veniam facere laboriosam! Voluptate provident
    accusantium, architecto repellat iusto sint id. Lorem
  </p>
  <a href="/guides">View Guides</a>
  <a href="/about">About</a>
</div>

<style>
  .index {
    text-align: center;
    display: block;
  }
</style>
