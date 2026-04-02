export type AvatarVariant = 'pixel' | 'bauhaus' | 'ring' | 'beam' | 'sunset' | 'marble' | 'geometric' | 'abstract';

export interface AvatarProps {
  /** The name to generate the avatar from */
  name?: string;
  /** Array of colors to use in the avatar */
  colors?: string[];
  /** Include a title element in the SVG */
  title?: boolean;
  /** Make the avatar square instead of round */
  square?: boolean;
  /** Size of the avatar (number for pixels, or string with unit) */
  size?: number | string;
  /** Variant style of the avatar */
  variant?: AvatarVariant;
}

export interface AvatarResult {
  /** The SVG string */
  svg: string;
  /** The generated avatar data (for advanced use) */
  data: {
    name: string;
    colors: string[];
    size: string;
    square: boolean;
    variant: AvatarVariant;
  };
}
