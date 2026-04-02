import {
  generateMarble,
  generatePixel,
  generateRing,
  generateBeam,
  generateBauhaus,
  generateSunset,
} from './variants/index.js';
import type { AvatarProps, AvatarVariant } from './types.js';

export type { AvatarProps, AvatarVariant };

const DEFAULT_COLORS = ['#92A1C6', '#146A7C', '#F0AB3D', '#C271B4', '#C20D90'];

const VARIANT_GENERATORS = {
  marble: generateMarble,
  pixel: generatePixel,
  ring: generateRing,
  beam: generateBeam,
  bauhaus: generateBauhaus,
  sunset: generateSunset,
  geometric: generateBeam,  // Deprecated, use 'beam'
  abstract: generateBauhaus,  // Deprecated, use 'bauhaus'
};

/**
 * Generate an SVG avatar
 * @param props - Avatar configuration options
 * @returns SVG string
 *
 * @example
 * ```ts
 * import boring from 'boring-avatars-vanilla';
 *
 * const svg = boring({
 *   name: 'John Doe',
 *   variant: 'beam',
 *   size: 40,
 *   colors: ['#92A1C6', '#146A7C', '#F0AB3D']
 * });
 *
 * // Use in browser
 * document.getElementById('avatar').innerHTML = svg;
 *
 * // Use in Node.js
 * fs.writeFileSync('avatar.svg', svg);
 * ```
 */
function boring(props: AvatarProps = {}): string {
  const {
    name = 'Clara Barton',
    colors = DEFAULT_COLORS,
    title = false,
    square = false,
    size = '40px',
    variant = 'marble',
  } = props;

  const generator = VARIANT_GENERATORS[variant] || generateMarble;

  return generator({
    name,
    colors,
    title,
    square,
    size,
  });
}

export { boring };
export default boring;
