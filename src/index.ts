import { parse } from './parser';
import { print } from './printer';

export const defaultOptions = {};

export const languages = [
  {
    name: 'GLSL',
    parsers: ['glsl'],
    extensions: ['.vert', '.frag'],
    aceMode: 'glsl',
    linguistLanguageId: 124,
  },
];

export const parsers = {
  glsl: {
    parse,
    astFormat: 'glsl-ast',
    locStart(_node: any) {
      // TODO
      return 0;
    },
    locEnd(_node: any) {
      // TODO
      return 0;
    },
  },
};

export const printers = {
  'glsl-ast': {
    print,
  },
};
