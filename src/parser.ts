import { ASTNode } from 'glsl-parser';
import { TokenizeStringOptions } from 'glsl-tokenizer';
import parseGLSL = require('glsl-parser/direct');
import tokenizeGLSL = require('glsl-tokenizer/string');

export function parse(
  text: string,
  _parsers: any,
  options: TokenizeStringOptions
): ASTNode {
  const tokens = tokenizeGLSL(text, options);
  const ast = parseGLSL(tokens);
  return ast;
}
