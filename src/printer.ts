import { FastPath, Doc, doc } from 'prettier';
import { ASTNode } from 'glsl-parser';

interface Print {
  (path: FastPath): Doc;
}
// interface Visitor { (path: FastPath, print: Print): Doc; }

const { concat, hardline, line, indent, join, group } = doc.builders;
const groupConcat = (docs: Doc[]) => group(concat(docs));

export function print(path: FastPath, options: any, print: Print): Doc {
  const { originalText } = options;
  const node = path.getValue() as ASTNode;
  if (!node) return '';
  switch (node.type) {
    case 'stmtlist':
      return concat(path.map(print, 'children'));
    case 'preprocessor':
      return concat([node.token.data, hardline]);
    case 'precision':
      return group(
        join(line, [node.token.data, ...path.map(print, 'children')])
      );
    case 'keyword':
      return node.token.data;
    case 'stmt':
      return concat([
        groupConcat([join(line, path.map(print, 'children')), ';']),
        hardline,
      ]);
    case 'decl':
      // TODO: many placeholders...?
      return concat([
        groupConcat([
          node.token.data,
          line,
        ]),
        hardline,
      ]);
  }
  return `${node.type} ( ${node.token.data} ) {
    ${path.map(print, 'children')}
  }`;
}
