<script lang="ts">
  import { FileBlockProps } from '@githubnext/blocks';
  export let { content, metadata } = $$props as FileBlockProps;
  
  try {
    window.eval(content);
  } catch(err) {
    console.log("There was an error:");
    console.log(err);
  }
</script>

<div>
  <hello-world></hello-world>
  <counter-button></counter-button>
  <basic-timer></basic-timer>
  <scoped-styled-text></scoped-styled-text>
</div>

<style>
  div {
    padding: 1rem;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>
