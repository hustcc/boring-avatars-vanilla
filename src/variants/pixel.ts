import { hashCode, getRandomColor, generateId } from '../utilities.js';

const ELEMENTS = 64;
const SIZE = 80;

function generateColors(name: string, colors: string[]): string[] {
  const numFromName = hashCode(name);
  const range = colors.length;

  const colorList = Array.from({ length: ELEMENTS }, (_, i) =>
    getRandomColor(numFromName % (i + 1), colors, range),
  );

  return colorList;
}

export interface PixelOptions {
  name: string;
  colors: string[];
  title?: boolean;
  square?: boolean;
  size?: number | string;
}

export const generatePixel = (options: PixelOptions): string => {
  const { name, colors, title, square, size = '40px' } = options;
  const pixelColors = generateColors(name, colors);
  const maskID = generateId();
  const sizeStr = typeof size === 'number' ? `${size}px` : size;

  const rect = square
    ? `<rect width="${SIZE}" height="${SIZE}" fill="#FFFFFF" />`
    : `<rect width="${SIZE}" height="${SIZE}" rx="${SIZE * 2}" fill="#FFFFFF" />`;

  // Generate all 64 rectangles
  const rects: string[] = [];
  const positions: [number, number][] = [
    [0, 0], [20, 0], [40, 0], [60, 0],
    [10, 0], [30, 0], [50, 0], [70, 0],
    [0, 10], [0, 20], [0, 30], [0, 40], [0, 50], [0, 60], [0, 70],
    [20, 10], [20, 20], [20, 30], [20, 40], [20, 50], [20, 60], [20, 70],
    [40, 10], [40, 20], [40, 30], [40, 40], [40, 50], [40, 60], [40, 70],
    [60, 10], [60, 20], [60, 30], [60, 40], [60, 50], [60, 60], [60, 70],
    [10, 10], [10, 20], [10, 30], [10, 40], [10, 50], [10, 60], [10, 70],
    [30, 10], [30, 20], [30, 30], [30, 40], [30, 50], [30, 60], [30, 70],
    [50, 10], [50, 20], [50, 30], [50, 40], [50, 50], [50, 60], [50, 70],
    [70, 10], [70, 20], [70, 30], [70, 40], [70, 50], [70, 60], [70, 70],
  ];

  for (let i = 0; i < positions.length; i++) {
    const [x, y] = positions[i];
    rects.push(`    <rect x="${x}" y="${y}" width="10" height="10" fill="${pixelColors[i]}" />`);
  }

  return `<svg
  viewBox="0 0 ${SIZE} ${SIZE}"
  fill="none"
  role="img"
  xmlns="http://www.w3.org/2000/svg"
  width="${sizeStr}"
  height="${sizeStr}"
>
  ${title ? `<title>${name}</title>` : ''}
  <mask id="${maskID}" mask-type="alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="${SIZE}" height="${SIZE}">
    ${rect}
  </mask>
  <g mask="url(#${maskID})">
${rects.join('\n')}
  </g>
</svg>`;
};
