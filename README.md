# SCHENOXIS Website

This is a React-based website for SCHENOXIS, featuring a modern design with custom fonts and a chat interface.

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```
4. Open your browser and navigate to `http://localhost:5174` (or the port shown in your terminal)

## Custom Fonts

This project uses two custom fonts:

1. **AmidoneGrotesk** - Used for general text
2. **Dishcek** - Used for the main title

### Adding Custom Fonts

To add the custom fonts to the project:

1. Place the font files in the `src/assets/fonts/` directory with the following formats:
   - AmidoneGrotesk.woff2
   - AmidoneGrotesk.woff
   - AmidoneGrotesk.ttf
   - Dishcek.woff2
   - Dishcek.woff
   - Dishcek.ttf

2. The fonts are already configured in the CSS files. If you need to modify the font paths, you can update them in the `App.css` file:

```css
@font-face {
  font-family: 'AmidoneGrotesk';
  src: url('/src/assets/fonts/AmidoneGrotesk.woff2') format('woff2');
  font-weight: normal;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: 'Dishcek';
  src: url('/src/assets/fonts/Dishcek.woff2') format('woff2');
  font-weight: normal;
  font-style: normal;
  font-display: swap;
}
```

## Project Structure

- `src/App.jsx` - Main component containing the homepage layout
- `src/App.css` - Styles for the main component
- `src/index.css` - Global styles
- `src/assets/fonts/` - Directory for custom font files

## Features

- Responsive design that works on mobile and desktop
- Custom fonts for a unique look
- Chat interface with input field
- Navigation menu
- Animated scroll indicator

## Customization

You can customize the colors and other design elements by modifying the CSS variables in `src/index.css`:

```css
:root {
  --primary-color: #4CAF50;
  --background-color: #0a0a0a;
  --text-color: #ffffff;
  --secondary-text-color: #cccccc;
  --border-color: #333333;
}
```

## Built With

- [React](https://reactjs.org/) - The web framework used
- [Vite](https://vitejs.dev/) - Build tool and development server
