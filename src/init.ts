import { Block, FileContext, FolderContext } from "@githubnext/blocks";
import { init } from "@githubnext/blocks-runtime";
import BlockComponent from "./BlockComponent.svelte";

import "./index.css";

// const repoUrl = "https://blocks.githubnext.com/githubnext/blocks";
const repoUrl = "https://blocks.githubnext.com/hawkticehurst/web-component-viewer-block";

// redirect from the server to the production blocks frame
if (window === window.top) {
  window.location.href = `${repoUrl}?devServer=${encodeURIComponent(
    window.location.href
  )}`;
}

const root = document.getElementById("root");

const loadDevServerBlock = async (block: Block) => {
  const imports = import.meta.glob("../blocks/**");
  const importPath = "../" + block.entry;
  const importContent = imports[importPath];
  const content: any = await importContent();

  let component: any;

  return (props: any) => {
    const fullProps = {
      ...props,
      BlockComponent: getBlockComponentWithParentContext(props.context),
    };
    if (component) {
      component.$set(fullProps);
    } else {
      component = new content.default({ target: root, props: fullProps });
    }
  };
};

init(loadDevServerBlock);

const getBlockComponentWithParentContext = (
  parentContext?: FileContext | FolderContext
) => {
  class BlockComponentWithParentContext extends BlockComponent {
    constructor(options: any) {
      let context = {
        ...(parentContext || {}),
        ...(options.parentContext || {}),
      };

      if (parentContext) {
        // clear sha if viewing content from another repo
        const parentRepo = [parentContext.owner, parentContext.repo].join("/");
        const childRepo = [context.owner, context.repo].join("/");
        const isSameRepo = parentRepo === childRepo;
        if (!isSameRepo) {
          context.sha = options.context?.sha || "HEAD";
        }
      }

      const fullOptions = {
        ...options,
        props: {
          ...options.props,
          context,
        },
      };
      super(fullOptions);
    }
  }
  return BlockComponentWithParentContext;
};
