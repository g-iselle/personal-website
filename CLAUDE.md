# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a personal portfolio website for Giselle Plascencia featuring an interactive p5.js canvas background with a simple HTML/CSS layout.

## Architecture

- **Frontend**: Static HTML/CSS/JavaScript website
- **Interactive Canvas**: p5.js library (v0.6.0) for generative art background
- **Structure**:
  - `index.html` - Main page with navigation and content
  - `css/style.css` - Styling with Bungee Hairline font
  - `js/index.js` - p5.js sketch creating interactive target graphics

## Key Features

- Interactive canvas that responds to mouse movement and clicks
- Target-like graphics with random colors that follow the mouse
- Click to clear the canvas
- Responsive design that resizes with window

## Development

This is a static website with no build process. To develop:

1. Open `index.html` directly in a browser, or
2. Serve the directory with any local server (e.g., `python -m http.server`)

## File Structure

```
/
├── index.html          # Main HTML page
├── css/
│   └── style.css      # Main stylesheet
└── js/
    └── index.js       # p5.js interactive canvas code
```

## External Dependencies

- p5.js v0.6.0 (loaded via CDN)
- p5.dom.min.js addon (loaded via CDN)
- Google Fonts: Bungee Hairline