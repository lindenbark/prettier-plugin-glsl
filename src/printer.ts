import { FastPath, Doc, doc } from 'prettier';
import { ASTNode } from 'glsl-parser';

interface Print {
  (path: FastPath): Doc;
}
// interface Visitor { (path: FastPath, print: Print): Doc; }

const { concat, hardline, line, join, group } = doc.builders;

export function print(path: FastPath, options: any, print: Print): Doc {
  const node = path.getValue() as ASTNode;
  if (!node) return '';
  switch (node.type) {
    case 'stmtlist':
      return concat(path.map(print, 'children'));
    case 'preprocessor':
      return concat([node.token.data, hardline]);
    case 'precision':
      return group(
        concat([
          join(line, [node.token.data, ...path.map(print, 'children')]),
          hardline,
        ])
      );
    case 'keyword':
      return node.token.data;
    case 'stmt':
      return concat([join(line, path.map(print, 'children')), hardline]);
  }
  return `${node.type} ( ${node.token.data} ) {
    ${path.map(print, 'children')}
  }`;
}
