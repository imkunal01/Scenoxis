# Custom Fonts

This directory should contain the following font files:

## AmidoneGrotesk Font

Place the AmidoneGrotesk font files in this directory with the following formats:
- AmidoneGrotesk.woff2
- AmidoneGrotesk.woff
- AmidoneGrotesk.ttf

## Dishcek Font

Place the Dishcek font files in this directory with the following formats:
- Dishcek.woff2
- Dishcek.woff
- Dishcek.ttf

## How to Use

The font files should be placed in this directory, and they will be automatically loaded by the CSS in the application. If you need to modify the font paths, you can update them in the `App.css` file.

```css
@font-face {
  font-family: 'AmidoneGrotesk';
  src: url('/assets/fonts/AmidoneGrotesk.woff2') format('woff2');
  font-weight: normal;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: 'Dishcek';
  src: url('/assets/fonts/Dishcek.woff2') format('woff2');
  font-weight: normal;
  font-style: normal;
  font-display: swap;
}
```