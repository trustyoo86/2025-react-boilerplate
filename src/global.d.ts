/// <reference types="react-scripts" />

declare module '*.svg' {
  const svgContent: string;
  // @ts-ignore
  export default svgContent;
}