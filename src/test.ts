import * as prettier from 'prettier';
const code = `
  #version 100
  precision lowp float;

  void main() {
    gl_FragColor = vec4(1, 1, 1, 1);
  }
`;
console.log(
  prettier.format(code, {
    parser: 'glsl' as any,
    plugins: ['.'],
  })
);
