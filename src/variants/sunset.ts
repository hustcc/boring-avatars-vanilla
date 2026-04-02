import { hashCode, getRandomColor, generateId } from '../utilities.js';

const ELEMENTS = 4;
const SIZE = 80;

function generateColors(name: string, colors: string[]): string[] {
  const numFromName = hashCode(name);
  const range = colors.length;

  const colorsList = Array.from({ length: ELEMENTS }, (_, i) =>
    getRandomColor(numFromName + i, colors, range),
  );

  return colorsList;
}

export interface SunsetOptions {
  name: string;
  colors: string[];
  title?: boolean;
  square?: boolean;
  size?: number | string;
}

export const generateSunset = (options: SunsetOptions): string => {
  const { name, colors, title, square, size = '40px' } = options;
  const sunsetColors = generateColors(name, colors);
  const nameWithoutSpace = name.replace(/\s/g, '');
  const maskID = generateId();
  const gradientID0 = `gradient_paint0_linear_${nameWithoutSpace}_${maskID}`;
  const gradientID1 = `gradient_paint1_linear_${nameWithoutSpace}_${maskID}`;
  const sizeStr = typeof size === 'number' ? `${size}px` : size;

  const rect = square
    ? `<rect width="${SIZE}" height="${SIZE}" fill="#FFFFFF" />`
    : `<rect width="${SIZE}" height="${SIZE}" rx="${SIZE * 2}" fill="#FFFFFF" />`;

  return `<svg
  viewBox="0 0 ${SIZE} ${SIZE}"
  fill="none"
  role="img"
  xmlns="http://www.w3.org/2000/svg"
  width="${sizeStr}"
  height="${sizeStr}"
>
  ${title ? `<title>${name}</title>` : ''}
  <mask id="${maskID}" maskUnits="userSpaceOnUse" x="0" y="0" width="${SIZE}" height="${SIZE}">
    ${rect}
  </mask>
  <g mask="url(#${maskID})">
    <path fill="url(#${gradientID0})" d="M0 0h80v40H0z" />
    <path fill="url(#${gradientID1})" d="M0 40h80v40H0z" />
  </g>
  <defs>
    <linearGradient id="${gradientID0}" x1="${SIZE / 2}" y1="0" x2="${SIZE / 2}" y2="${SIZE / 2}" gradientUnits="userSpaceOnUse">
      <stop stop-color="${sunsetColors[0]}" />
      <stop offset="1" stop-color="${sunsetColors[1]}" />
    </linearGradient>
    <linearGradient id="${gradientID1}" x1="${SIZE / 2}" y1="${SIZE / 2}" x2="${SIZE / 2}" y2="${SIZE}" gradientUnits="userSpaceOnUse">
      <stop stop-color="${sunsetColors[2]}" />
      <stop offset="1" stop-color="${sunsetColors[3]}" />
    </linearGradient>
  </defs>
</svg>`;
};
