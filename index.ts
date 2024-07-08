
const getType = (val: any): string => {
    return Object.prototype.toString.call(val).slice(8, -1).toLowerCase();
};

/**
 * 遍历树列表
 */
export default function walkTree<Node extends { [k: string]: any }>(
    list: Node [] = [],
    fn: (node: Node, pNode?: Node) => 'continue' | 'end' | void,
    fieldNames = { children: 'children' },
    pNode?: Node,
  ) {
    for (const key in list) {
      const node = list[key]
  
      // 有返回值时退出循环,提前结束搜索
      const result = fn ? fn(node, pNode) : false
      // 通过返回值判断是否跳过当前循环
      if (result === 'continue') {
        continue
      } else if (result === 'end') {
        return true
      }
  
      if (getType(node[fieldNames.children]) === 'array') {
        const result = walkTree(node[fieldNames.children], fn, fieldNames, node)
        if (result) return true
      }
    }

    return
  }