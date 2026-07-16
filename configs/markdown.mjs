/**
 * 🌟 批量自动导入全局组件的 Remark 插件
 * @param {Array<{name: string, path: string}>} components 
 */
function remarkAutoImportGlobalComponents(components = []) {
  return (tree) => {
    if (!components || components.length === 0) return;

    // 1. 遍历你传入的组件配置，为每个组件生成对应的 AST 导入节点
    const importNodes = components.map(({ name, path }) => {
      return {
        type: 'mdxjsEsm',
        // value 是给编译器做后备解析的明文语句
        value: `import ${name} from '${path}';`,
        data: {
          estree: {
            type: 'Program',
            sourceType: 'module',
            body: [
              {
                type: 'ImportDeclaration',
                specifiers: [
                  { 
                    type: 'ImportDefaultSpecifier', 
                    local: { type: 'Identifier', name: name } 
                  }
                ],
                source: { 
                  type: 'Literal', 
                  value: path 
                }
              }
            ]
          }
        }
      };
    });

    // 2. 🌟 关键操作：使用 unshift 把这一批导入节点全部塞到所有 MDX 文件的最头部
    tree.children.unshift(...importNodes);
  };
}
export default {
    remarkPlugins: [
      [
        remarkAutoImportGlobalComponents,
        [
          { name: 'R2Image', path: '/src/components/R2Image.astro' },
          { name: 'InlineLabel', path: '/src/components/InlineLabel.astro' },
          { name: 'InlineTooltip', path: '/src/components/InlineTooltip.astro' },
          { name: 'LevelNums', path: '/src/components/levelNums.astro' },
          { name: 'InlineTag', path: '/src/components/InlineTag.astro' },
        ]
      ]
    ],
}