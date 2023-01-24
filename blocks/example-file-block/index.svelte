<script lang="ts">
  import { FileBlockProps } from '@githubnext/blocks';
  export let { content } = $$props as FileBlockProps;
  
  try {
    window.eval(content);
  } catch(err) {
    console.log("There was an error:");
    console.log(err);
  }
</script>

<counter-button></counter-button>
