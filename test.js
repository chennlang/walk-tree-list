const walkTree = require("./dist/index.cjs");

const treeList = [{ name: "dir1", children: [{ name: "dir2" }] }];

console.log(walkTree);

walkTree(treeList, (node, pNode) => {
  console.log(node, pNode);
});
