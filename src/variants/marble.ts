import { hashCode, getUnit, getRandomColor, generateId } from '../utilities.js';

const ELEMENTS = 3;
const SIZE = 80;

interface MarbleProperties {
  color: string;
  translateX: number;
  translateY: number;
  scale: number;
  rotate: number;
}

function generateColors(name: string, colors: string[]): MarbleProperties[] {
  const numFromName = hashCode(name);
  const range = colors.length;

  const elementsProperties = Array.from({ length: ELEMENTS }, (_, i) => ({
    color: getRandomColor(numFromName + i, colors, range),
    translateX: getUnit(numFromName * (i + 1), SIZE / 10, 1),
    translateY: getUnit(numFromName * (i + 1), SIZE / 10, 2),
    scale: 1.2 + getUnit(numFromName * (i + 1), SIZE / 20) / 10,
    rotate: getUnit(numFromName * (i + 1), 360, 1),
  }));

  return elementsProperties;
}

export interface MarbleOptions {
  name: string;
  colors: string[];
  title?: boolean;
  square?: boolean;
  size?: number | string;
}

export const generateMarble = (options: MarbleOptions): string => {
  const { name, colors, title, square, size = '40px' } = options;
  const properties = generateColors(name, colors);
  const maskID = generateId();
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
    <rect width="${SIZE}" height="${SIZE}" fill="${properties[0].color}" />
    <path
      filter="url(#filter_${maskID})"
      d="M32.414 59.35L50.376 70.5H72.5v-71H33.728L26.5 13.381l19.057 27.08L32.414 59.35z"
      fill="${properties[1].color}"
      transform="translate(${properties[1].translateX} ${properties[1].translateY}) rotate(${properties[1].rotate} ${SIZE / 2} ${SIZE / 2}) scale(${properties[2].scale})"
    />
    <path
      filter="url(#filter_${maskID})"
      style="mix-blend-mode: overlay"
      d="M22.216 24L0 46.75l14.108 38.129L78 86l-3.081-59.276-22.378 4.005 12.972 20.186-23.35 27.395L22.215 24z"
      fill="${properties[2].color}"
      transform="translate(${properties[2].translateX} ${properties[2].translateY}) rotate(${properties[2].rotate} ${SIZE / 2} ${SIZE / 2}) scale(${properties[2].scale})"
    />
  </g>
  <defs>
    <filter id="filter_${maskID}" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
      <feFlood floodOpacity="0" result="BackgroundImageFix" />
      <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
      <feGaussianBlur stdDeviation="7" result="effect1_foregroundBlur" />
    </filter>
  </defs>
</svg>`;
};
