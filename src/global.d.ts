/// <reference types="react-scripts" />

declare module '*.svg' {
  import React = require('react');
  const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>> & { default: React.FC<React.SVGProps<SVGSVGElement>> };
  // @ts-ignore
  export default ReactComponent;
}