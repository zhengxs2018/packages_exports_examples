import { toTree } from "https://esm.sh/@zhengxs/js.tree";

console.dir(
  toTree([
    { id: 10000, parentId: null, title: '标题 1' },
    { id: 20000, parentId: null, title: '标题 2' },
    { id: 11000, parentId: 10000, title: '标题 1-1' },
  ])
)
