declare module 'glsl-parser' {
  import { Token, TokenMode } from 'glsl-tokenizer';
  export type AbstractTokenType = '(implied)' | '(program)';
  export interface AbstractToken {
    type?: AbstractTokenType;
    data: Token['data'];
    position?: Token['position'];
  }
  export const enum ASTNodeMode {
    _ = 0,
    IDENT,
    STMT,
    STMTLIST,
    STRUCT,
    FUNCTION,
    FUNCTIONARGS,
    DECL,
    DECLLIST,
    FORLOOP,
    WHILELOOP,
    IF,
    EXPR,
    PRECISION,
    COMMENT,
    PREPROCESSOR,
    KEYWORD,
    KEYWORD_OR_IDENT,
    RETURN,
    BREAK,
    CONTINUE,
    DISCARD,
    DOWHILELOOP,
    PLACEHOLDER,
    QUANTIFIER,
  }
  export type ASTStatementType =
    | 'ident'
    | 'stmt'
    | 'stmtlist'
    | 'struct'
    | 'function'
    | 'functionargs'
    | 'decl'
    | 'decllist'
    | 'forloop'
    | 'whileloop'
    | 'if'
    | 'expr'
    | 'precision'
    | 'comment'
    | 'preprocessor'
    | 'keyword'
    | 'keyword_or_ident'
    | 'return'
    | 'break'
    | 'continue'
    | 'discard'
    | 'do-while'
    | 'placeholder'
    | 'quantifier';
  export interface ASTNode {
    mode: ASTNodeMode;
    token: AbstractToken | Token;
    parent?: ASTNode;
    children: ASTNode[];
    type: ASTStatementType;
    id: string;
  }
}

declare module 'glsl-parser/direct' {
  import { Token } from 'glsl-tokenizer';
  import { ASTNode } from 'glsl-parser';
  function parseArray(tokens: Token[]): ASTNode;
  export = parseArray;
}
