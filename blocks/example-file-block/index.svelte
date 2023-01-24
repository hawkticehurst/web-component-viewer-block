<script lang="ts">
  import { FileBlockProps } from '@githubnext/blocks';
  export let { content } = $$props as FileBlockProps;
</script>

{@html content}
