
/// <reference types="vite/client" />

declare module '*.md' {
  // Declare as a string asset instead of a module
  const content: string;
  export default content;
}
