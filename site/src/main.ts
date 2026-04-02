import boring from 'boring-avatars-vanilla';
import { exampleNames } from './example-names.js';

// Default palette (matching original playground)
const defaultPalette = ['#92A1C6', '#146A7C', '#F0AB3D', '#C271B4', '#C20D90'];

// State
let state = {
  variant: 'beam' as 'beam' | 'bauhaus' | 'ring' | 'sunset' | 'pixel' | 'marble',
  colors: [...defaultPalette],
  size: 80,
  square: false,
};

// DOM Elements
const variantSelector = document.getElementById('variant-selector') as HTMLElement;
const sizeSelector = document.getElementById('size-selector') as HTMLElement;
const colorsSection = document.getElementById('colors-section') as HTMLElement;
const randomPaletteBtn = document.getElementById('random-palette') as HTMLButtonElement;
const toggleSquareBtn = document.getElementById('toggle-square') as HTMLButtonElement;
const avatarsGrid = document.getElementById('avatars-grid') as HTMLElement;

// Random palettes
const palettes: string[][] = [
  ['#92A1C6', '#146A7C', '#F0AB3D', '#C271B4', '#C20D90'],
  ['#264653', '#2A9D8F', '#E9C46A', '#F4A261', '#E76F51'],
  ['#606C38', '#283618', '#FEFAE0', '#DDA15E', '#BC6C25'],
  ['#8ECAE6', '#219EBC', '#023047', '#FFB703', '#FB8500'],
  ['#000000', '#14213D', '#FCA311', '#E5E5E5', '#FFFFFF'],
  ['#D8E2DC', '#FFE5D9', '#FFCAD4', '#F4ACB7', '#9D8189'],
  ['#E63946', '#F1FAEE', '#A8DADC', '#457B9D', '#1D3557'],
  ['#F72585', '#7209B7', '#3A0CA3', '#4361EE', '#4CC9F0'],
  ['#FFBE0B', '#FB5607', '#FF006E', '#8338EC', '#3A86FF'],
  ['#F94144', '#F3722C', '#F8961E', '#F9C74F', '#90BE6D'],
];

function getRandomPalette(): string[] {
  return palettes[Math.floor(Math.random() * palettes.length)];
}

// Update UI based on state
function updateUI() {
  // Update variant selector
  variantSelector.querySelectorAll('.segment').forEach((btn) => {
    btn.classList.toggle('selected', btn.getAttribute('data-variant') === state.variant);
  });

  // Update size selector
  sizeSelector.querySelectorAll('.segment').forEach((btn) => {
    btn.classList.toggle('selected', parseInt(btn.getAttribute('data-size')!) === state.size);
  });

  // Update color dots
  colorsSection.querySelectorAll('.color-input').forEach((input, index) => {
    (input as HTMLInputElement).value = state.colors[index];
  });

  // Update square button
  toggleSquareBtn.textContent = state.square ? 'Round' : 'Square';
}

// Render avatars
function renderAvatars() {
  avatarsGrid.innerHTML = '';

  exampleNames.forEach((name) => {
    const container = document.createElement('div');
    container.className = 'avatar-container';

    const avatarSection = document.createElement('div');
    avatarSection.className = 'avatar-section';

    // Generate SVG using vanilla library
    const svg = boring({
      name,
      variant: state.variant,
      colors: state.colors,
      size: state.size,
      square: state.square,
    });

    avatarSection.innerHTML = svg;

    const input = document.createElement('input');
    input.className = 'avatar-input';
    input.value = name;
    input.addEventListener('change', (e) => {
      const newName = (e.target as HTMLInputElement).value;
      // Re-render this avatar with new name
      const newSvg = boring({
        name: newName,
        variant: state.variant,
        colors: state.colors,
        size: state.size,
        square: state.square,
      });
      avatarSection.innerHTML = newSvg;
    });
    input.addEventListener('focus', (e) => {
      (e.target as HTMLInputElement).select();
    });

    container.appendChild(avatarSection);
    container.appendChild(input);
    avatarsGrid.appendChild(container);
  });
}

// Event Listeners
variantSelector.querySelectorAll('.segment').forEach((btn) => {
  btn.addEventListener('click', () => {
    state.variant = btn.getAttribute('data-variant') as typeof state.variant;
    updateUI();
    renderAvatars();
  });
});

sizeSelector.querySelectorAll('.segment').forEach((btn) => {
  btn.addEventListener('click', () => {
    state.size = parseInt(btn.getAttribute('data-size')!);
    updateUI();
    renderAvatars();
  });
});

colorsSection.querySelectorAll('.color-input').forEach((input) => {
  input.addEventListener('input', (e) => {
    const index = parseInt((e.target as HTMLElement).getAttribute('data-index')!);
    state.colors[index] = (e.target as HTMLInputElement).value;
    renderAvatars();
  });
});

randomPaletteBtn.addEventListener('click', () => {
  state.colors = getRandomPalette();
  updateUI();
  renderAvatars();
});

toggleSquareBtn.addEventListener('click', () => {
  state.square = !state.square;
  updateUI();
  renderAvatars();
});

// Initialize
updateUI();
renderAvatars();
