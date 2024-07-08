# walk-tree-list

Traverse tree list

## Install

```shell
# npm
npm install walk-tree-list

# yarn
yarn add walk-tree-list

# pnpm
pnpm install walk-tree-list
```

## Usage

### Base

```ts
import walkTree from "walk-tree-list";

const treeList = [{ name: "dir1", children: [{ name: "dir2" }] }];

walkTree(treeList, (node, pNode) => {
  console.log(node, pNode);
});
```

### KeyMapping

```ts
import walkTree from "walk-tree-list";

const treeList = [{ name: "dir1", childList: [{ name: "dir2" }] }];

walkTree(
  treeList,
  (node, pNode) => {
    console.log(node, pNode);
  },
  { children: "childList" }
);
```

### Other

```ts
import walkTree from "walk-tree-list";

const treeList = [{ name: "dir1", children: [{ name: "dir2" }] }];

walkTree(treeList, (node, pNode) => {
  // level === 1
  if (!pNode) {
    console.log("this is first level node");
  }

  // Skip the subsequent traversal
  if (node.name === "dir1") return "continue";

  // Node found, ending early.
  if (node.name === "dir1") return "end";
});
```
