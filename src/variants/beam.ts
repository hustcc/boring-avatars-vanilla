import { hashCode, getUnit, getBoolean, getRandomColor, getContrast, generateId } from '../utilities.js';

const SIZE = 36;

interface BeamData {
  wrapperColor: string;
  faceColor: string;
  backgroundColor: string;
  wrapperTranslateX: number;
  wrapperTranslateY: number;
  wrapperRotate: number;
  wrapperScale: number;
  isMouthOpen: boolean;
  isCircle: boolean;
  eyeSpread: number;
  mouthSpread: number;
  faceRotate: number;
  faceTranslateX: number;
  faceTranslateY: number;
}

function generateData(name: string, colors: string[]): BeamData {
  const numFromName = hashCode(name);
  const range = colors.length;
  const wrapperColor = getRandomColor(numFromName, colors, range);
  const preTranslateX = getUnit(numFromName, 10, 1);
  const wrapperTranslateX = preTranslateX < 5 ? preTranslateX + SIZE / 9 : preTranslateX;
  const preTranslateY = getUnit(numFromName, 10, 2);
  const wrapperTranslateY = preTranslateY < 5 ? preTranslateY + SIZE / 9 : preTranslateY;

  const data: BeamData = {
    wrapperColor: wrapperColor,
    faceColor: getContrast(wrapperColor),
    backgroundColor: getRandomColor(numFromName + 13, colors, range),
    wrapperTranslateX: wrapperTranslateX,
    wrapperTranslateY: wrapperTranslateY,
    wrapperRotate: getUnit(numFromName, 360),
    wrapperScale: 1 + getUnit(numFromName, SIZE / 12) / 10,
    isMouthOpen: getBoolean(numFromName, 2),
    isCircle: getBoolean(numFromName, 1),
    eyeSpread: getUnit(numFromName, 5),
    mouthSpread: getUnit(numFromName, 3),
    faceRotate: getUnit(numFromName, 10, 3),
    faceTranslateX:
      wrapperTranslateX > SIZE / 6 ? wrapperTranslateX / 2 : getUnit(numFromName, 8, 1),
    faceTranslateY:
      wrapperTranslateY > SIZE / 6 ? wrapperTranslateY / 2 : getUnit(numFromName, 7, 2),
  };

  return data;
}

export interface BeamOptions {
  name: string;
  colors: string[];
  title?: boolean;
  square?: boolean;
  size?: number | string;
}

export const generateBeam = (options: BeamOptions): string => {
  const { name, colors, title, square, size = '40px' } = options;
  const data = generateData(name, colors);
  const maskID = generateId();
  const sizeStr = typeof size === 'number' ? `${size}px` : size;

  const rect = square
    ? `<rect width="${SIZE}" height="${SIZE}" fill="#FFFFFF" />`
    : `<rect width="${SIZE}" height="${SIZE}" rx="${SIZE * 2}" fill="#FFFFFF" />`;

  const mouth = data.isMouthOpen
    ? `<path d="M15 ${19 + data.mouthSpread}c2 1 4 1 6 0" stroke="${data.faceColor}" fill="none" stroke-linecap="round" />`
    : `<path d="M13,${19 + data.mouthSpread} a1,0.75 0 0,0 10,0" fill="${data.faceColor}" />`;

  const rx = data.isCircle ? SIZE : SIZE / 6;

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
    <rect width="${SIZE}" height="${SIZE}" fill="${data.backgroundColor}" />
    <rect
      x="0"
      y="0"
      width="${SIZE}"
      height="${SIZE}"
      transform="translate(${data.wrapperTranslateX} ${data.wrapperTranslateY}) rotate(${data.wrapperRotate} ${SIZE / 2} ${SIZE / 2}) scale(${data.wrapperScale})"
      fill="${data.wrapperColor}"
      rx="${rx}"
    />
    <g transform="translate(${data.faceTranslateX} ${data.faceTranslateY}) rotate(${data.faceRotate} ${SIZE / 2} ${SIZE / 2})">
      ${mouth}
      <rect x="${14 - data.eyeSpread}" y="14" width="1.5" height="2" rx="1" stroke="none" fill="${data.faceColor}" />
      <rect x="${20 + data.eyeSpread}" y="14" width="1.5" height="2" rx="1" stroke="none" fill="${data.faceColor}" />
    </g>
  </g>
</svg>`;
};
