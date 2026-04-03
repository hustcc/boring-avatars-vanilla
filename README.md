# boring-avatars-vanilla

Boring avatars is a tiny JavaScript library that generates custom, SVG-based avatars from any username and color palette. Works in both browsers and Node.js server-side rendering.

![oring-avatars-preview](https://github.com/user-attachments/assets/76a800a7-5571-44c5-86a2-26b9eda8412c)

<a href="https://www.npmjs.com/package/boring-avatars-vanilla">

![npm](https://img.shields.io/npm/v/boring-avatars-vanilla)
![build](https://github.com/hustcc/boring-avatars-vanilla/actions/workflows/build.yml/badge.svg)
![deploy](https://github.com/hustcc/boring-avatars-vanilla/actions/workflows/deploy.yml/badge.svg)

</a>

## Install

```
npm install boring-avatars-vanilla
```

## Browser Usage (CDN)

You can use boring-avatars directly in the browser without any build tools:

### Via unpkg

```html
<script src="https://unpkg.com/boring-avatars-vanilla/dist/index.umd.js"></script>
```

### Via jsDelivr

```html
<script src="https://cdn.jsdelivr.net/npm/boring-avatars-vanilla/dist/index.umd.js"></script>
```

### Complete Example

```html
<!DOCTYPE html>
<html>
  <head>
    <script src="https://unpkg.com/boring-avatars-vanilla/dist/index.umd.js"></script>
  </head>
  <body>
    <div id="avatar"></div>
    <script>
      document.getElementById('avatar').innerHTML = BoringAvatars({ name: 'Maria Mitchell' });
    </script>
  </body>
</html>
```

## Usage

```javascript
import boring from 'boring-avatars-vanilla';

const svg = boring({ name: 'Maria Mitchell' });

// Use in browser
document.getElementById('avatar').innerHTML = svg;

// Use in Node.js server-side rendering
fs.writeFileSync('avatar.svg', svg);
```

### Props

| Prop    | Type                                                         | Default                                                   |
|---------|--------------------------------------------------------------|-----------------------------------------------------------|
| size    | number or string                                             | `40px`                                                    |
| square  | boolean                                                      | `false`                                                   |
| title   | boolean                                                      | `false`                                                   |
| name    | string                                                       | `Clara Barton`                                            |
| variant | oneOf: `marble`, `beam`, `pixel`,`sunset`, `ring`, `bauhaus` | `marble`                                                  |
| colors  | array                                                        | `['#92A1C6', '#146A7C', '#F0AB3D', '#C271B4', '#C20D90']` |


#### Name

The `name` prop is used to generate the avatar. It can be the username, email or any random string.

```javascript
boring({ name: 'Maria Mitchell' });
```

#### Variant

The `variant` prop is used to change the theme of the avatar. The available variants are: `marble`, `beam`, `pixel`, `sunset`, `ring` and `bauhaus`.

```javascript
boring({ name: 'Alice Paul', variant: 'beam' });
```

#### Size

The `size` prop is used to change the size of the avatar.

```javascript
boring({ name: 'Ada Lovelace', size: 88 });
```

#### Colors

The `colors` prop is used to change the color palette of the avatar.

```javascript
boring({ name: 'Grace Hopper', colors: ['#fb6900', '#f63700', '#004853', '#007e80', '#00b9bd'] });
```

#### Square

The `square` prop is used to make the avatar square.

```javascript
boring({ name: 'Helen Keller', square: true });
```

## API service

> [!IMPORTANT]  
> Please note that the old service was paused in July 31st 2024. We recommend transitioning to our new API service to ensure uninterrupted access and support.

Get access to the Boring avatars API service [here →](https://boringdesigners.gumroad.com/l/boring-avatars-service).

## License

MIT, Thanks for [boring-avatars](https://github.com/boringdesigners/boring-avatars).
