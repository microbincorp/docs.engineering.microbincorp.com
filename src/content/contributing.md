---
title: Contributing to Documentation
description: How to add or edit documentation for MicroBin products
---

# Contributing to Documentation

This guide explains how to add or edit documentation for MicroBin products without needing to understand the entire codebase.

## How to Edit Documentation

All documentation is written in Markdown format and stored in the `src/content` directory. To edit the documentation:

1. Navigate to the appropriate content file in the `src/content` directory
2. Edit the Markdown file using your favorite text editor
3. Save the changes and submit them for review

## Directory Structure

The content directory is structured as follows:

- `src/content/`
  - `hardware/` - Hardware documentation
    - `index.md` - Main hardware documentation page
    - `sbc.md` - Single Board Computers documentation
    - `som.md` - System on Modules documentation
    - etc.
  - `iot-dashboard/` - IoT Dashboard documentation
  - `platformq/` - PlatformQ documentation

## Markdown Format

Each Markdown file should start with frontmatter (metadata) in YAML format:

```yaml
---
title: Page Title
description: Brief description of the page
---
```

Then, the content of the page follows in Markdown format:

```markdown
# Main Heading

Introduction paragraph.

## Section Heading

Section content.

- List item 1
- List item 2
- List item 3

### Subsection

More content...

[Link text](https://example.com)
```

## Adding New Pages

To add a new documentation page:

1. Create a new Markdown file in the appropriate content directory
2. Add the frontmatter at the top of the file
3. Write the content using Markdown
4. If necessary, add a link to the new page in the sidebar configuration

## Images and Assets

To add images to your documentation:

1. Add the image to the `public/docs-assets/` directory
2. Reference the image in your Markdown like this:
   ```markdown
   ![Alt text](/docs-assets/image-name.png)
   ```

## Preview Your Changes

After making changes, you can preview them before submitting:

1. Run the development server (if you have local development access)
2. Navigate to the page you've edited
3. Verify that your changes appear as expected

## Need Help?

If you need assistance with documentation, please contact the documentation team at docs@microbin.io
