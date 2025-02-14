/// <reference types="react-scripts" />

declare module '*.svg' {
  const svgFileContent: string;
  // @ts-ignore
  export default svgFileContent;
}