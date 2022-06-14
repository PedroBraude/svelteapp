<script>
  export let title = "Ninja Gaming"; // Export for use like a prop in the element that you want to import it.
</script>

<div class="title">
  <img src="/controller.svg" alt="site logo" />
  <h1>{title}</h1>
</div>

<style>
  .title {
    display: flex;
  }
  .title img {
    display: inline-block;
    filter: invert(88%) sepia(18%) saturate(886%) hue-rotate(199deg)
      brightness(100%) contrast(90%);
  }
  .title h1 {
    margin-left: 10px;
  }
</style>
