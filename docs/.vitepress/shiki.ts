
import { defineConfig } from 'vitepress'

// Define custom shiki setup for code blocks
export function extendShikiConfig(config: ReturnType<typeof defineConfig>) {
  config.markdown = config.markdown || {}
  config.markdown.theme = {
    light: 'github-light',
    dark: 'github-dark'
  }
  
  // Add support for copying code blocks
  config.markdown.codeOptions = {
    ...(config.markdown.codeOptions || {}),
    lineNumbers: true
  }
  
  return config
}
