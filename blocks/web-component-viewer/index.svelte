<script lang="ts">
  import { FileBlockProps } from '@githubnext/blocks';
  export let { content, metadata } = $$props as FileBlockProps;

  try {
    window.eval(content);
    console.log();
    
  } catch(err) {
    console.log("There was an error:");
    console.log(err);
  }
</script>

<div>
  {@html metadata.component_html}
</div>

<style>
  div {
    background-color: #181818;
    padding: 1rem;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>
