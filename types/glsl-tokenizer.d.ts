declare module 'glsl-tokenizer' {
  export interface TokenizeStringOptions {
    version?: '300 es';
  }
  export interface Token {
    type: TokenMode;
    data: string;
    position: number;
    line: number;
    column: number;
  }
  export type TokenMode =
    | 'block-comment'
    | 'line-comment'
    | 'preprocessor'
    | 'operator'
    | 'integer'
    | 'float'
    | 'ident'
    | 'builtin'
    | 'keyword'
    | 'whitespace'
    | 'eof';
}

declare module 'glsl-tokenizer/string' {
  import { Token, TokenizeStringOptions } from 'glsl-tokenizer';
  function tokenizeString(str: string, opt?: TokenizeStringOptions): Token[];
  export = tokenizeString;
}
