import { describe, it, expect } from 'vitest';
import fs from 'fs';
import path from 'path';
import boring from '../src/index.js';

const TEST_COLORS = ['#92A1C6', '#146A7C', '#F0AB3D', '#C271B4', '#C20D90'];
const SNAPSHOT_DIR = path.join(__dirname, 'snapshots');

/**
 * Compare or create SVG snapshot
 * @param name - snapshot file name (without .svg extension)
 * @param svg - the SVG string to compare
 * @returns true if matches, throws if different
 */
function matchSnapshot(name: string, svg: string): boolean {
  // Ensure snapshot directory exists
  if (!fs.existsSync(SNAPSHOT_DIR)) {
    fs.mkdirSync(SNAPSHOT_DIR, { recursive: true });
  }

  const snapshotPath = path.join(SNAPSHOT_DIR, `${name}.svg`);

  // Normalize SVG for comparison (remove unique IDs)
  const normalizedSvg = svg.replace(/boring-avatar-[\w-]+/g, 'boring-avatar-ID');

  if (!fs.existsSync(snapshotPath)) {
    // Create snapshot if it doesn't exist
    fs.writeFileSync(snapshotPath, normalizedSvg, 'utf-8');
    console.log(`  📸 Created snapshot: ${name}.svg`);
    return true;
  }

  const existing = fs.readFileSync(snapshotPath, 'utf-8');

  if (existing !== normalizedSvg) {
    // Write the new version for comparison
    const failedPath = path.join(SNAPSHOT_DIR, `${name}.failed.svg`);
    fs.writeFileSync(failedPath, normalizedSvg, 'utf-8');
    throw new Error(
      `Snapshot mismatch for "${name}.svg"\n` +
      `  Expected: ${snapshotPath}\n` +
      `  Received: ${failedPath}\n` +
      `  Run with --update to regenerate snapshots`
    );
  }

  return true;
}

describe('boring-avatars-vanilla', () => {
  describe('main API - snapshots', () => {
    it('should generate default avatar (marble)', () => {
      const svg = boring();
      expect(matchSnapshot('default', svg)).toBe(true);
    });

    it('should generate avatar with custom name', () => {
      const svg = boring({ name: 'John Doe' });
      expect(matchSnapshot('john-doe', svg)).toBe(true);
    });

    it('should include title when specified', () => {
      const svg = boring({ name: 'Jane Doe', title: true });
      expect(matchSnapshot('with-title', svg)).toBe(true);
    });

    it('should handle number size', () => {
      const svg = boring({ size: 100 });
      expect(matchSnapshot('size-100', svg)).toBe(true);
    });

    it('should handle string size', () => {
      const svg = boring({ size: '5rem' });
      expect(matchSnapshot('size-5rem', svg)).toBe(true);
    });

    it('should generate beam variant', () => {
      const svg = boring({ variant: 'beam', colors: TEST_COLORS });
      expect(matchSnapshot('variant-beam', svg)).toBe(true);
    });

    it('should generate pixel variant', () => {
      const svg = boring({ variant: 'pixel', colors: TEST_COLORS });
      expect(matchSnapshot('variant-pixel', svg)).toBe(true);
    });

    it('should generate ring variant', () => {
      const svg = boring({ variant: 'ring', colors: TEST_COLORS });
      expect(matchSnapshot('variant-ring', svg)).toBe(true);
    });

    it('should generate bauhaus variant', () => {
      const svg = boring({ variant: 'bauhaus', colors: TEST_COLORS });
      expect(matchSnapshot('variant-bauhaus', svg)).toBe(true);
    });

    it('should generate sunset variant', () => {
      const svg = boring({ variant: 'sunset', colors: TEST_COLORS });
      expect(matchSnapshot('variant-sunset', svg)).toBe(true);
    });

    it('should generate marble variant explicitly', () => {
      const svg = boring({ variant: 'marble', colors: TEST_COLORS });
      expect(matchSnapshot('variant-marble', svg)).toBe(true);
    });

    it('should handle deprecated geometric variant', () => {
      const svg = boring({ variant: 'geometric', colors: TEST_COLORS });
      expect(matchSnapshot('variant-geometric', svg)).toBe(true);
    });

    it('should handle deprecated abstract variant', () => {
      const svg = boring({ variant: 'abstract', colors: TEST_COLORS });
      expect(matchSnapshot('variant-abstract', svg)).toBe(true);
    });

    it('should apply square mask', () => {
      const svg = boring({ square: true });
      expect(matchSnapshot('square', svg)).toBe(true);
    });

    it('should apply square mask with beam variant', () => {
      const svg = boring({ variant: 'beam', square: true, colors: TEST_COLORS });
      expect(matchSnapshot('square-beam', svg)).toBe(true);
    });

    it('should generate with all options', () => {
      const svg = boring({
        name: 'Test User',
        colors: TEST_COLORS,
        size: 80,
        title: true,
        square: false,
        variant: 'marble',
      });
      expect(matchSnapshot('full-options-marble', svg)).toBe(true);
    });

    it('should handle names with spaces', () => {
      const svg = boring({
        name: 'Test User With Spaces',
        colors: TEST_COLORS,
        variant: 'sunset',
      });
      expect(matchSnapshot('sunset-spaces', svg)).toBe(true);
    });
  });

  describe('deterministic generation', () => {
    it('should generate identical SVGs for same name and colors', () => {
      const svg1 = boring({ name: 'Alice', colors: TEST_COLORS, variant: 'marble' });
      const svg2 = boring({ name: 'Alice', colors: TEST_COLORS, variant: 'marble' });

      // Normalize both
      const normalized1 = svg1.replace(/boring-avatar-[\w-]+/g, 'ID');
      const normalized2 = svg2.replace(/boring-avatar-[\w-]+/g, 'ID');

      expect(normalized1).toBe(normalized2);
    });

    it('should generate different SVGs for different names', () => {
      const svg1 = boring({ name: 'Alice', colors: TEST_COLORS, variant: 'marble' });
      const svg2 = boring({ name: 'Bob', colors: TEST_COLORS, variant: 'marble' });

      // Normalize both
      const normalized1 = svg1.replace(/boring-avatar-[\w-]+/g, 'ID');
      const normalized2 = svg2.replace(/boring-avatar-[\w-]+/g, 'ID');

      expect(normalized1).not.toBe(normalized2);
    });
  });

  describe('SVG structure validation', () => {
    it('should generate valid SVG structure', () => {
      const svg = boring();
      expect(svg).toContain('<svg');
      expect(svg).toContain('</svg>');
      expect(svg).toContain('viewBox');
      expect(svg).toContain('xmlns="http://www.w3.org/2000/svg"');
      expect(svg).toContain('role="img"');
    });

    it('should include title element when specified', () => {
      const svg = boring({ name: 'Test Name', title: true });
      expect(svg).toContain('<title>Test Name</title>');
    });

    it('should not include title when not specified', () => {
      const svg = boring({ name: 'Test Name', title: false });
      expect(svg).not.toContain('<title>');
    });
  });
});
