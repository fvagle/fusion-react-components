<!--prettier-ignore-start-->
# @equinor/fusion-react-badge 

[![Published on npm](https://img.shields.io/npm/v/@equinor/fusion-react-badge.svg)](https://www.npmjs.com/package/@equinor/fusion-react-badge)

[Storybook](https://equinor.github.io/fusion-react-components/?path=/docs/data-badge)

[Fusion Web Component](https://github.com/equinor/fusion-web-components/tree/main/packages/badge)

## Installation

```sh
npm install @equinor/fusion-react-badge
```

## Properties/Attributes

Name                    | Type                            | Default          | Description
---------------------   | --------------                  | -----------      | -----------------
`size`                  | `BadgeSize*`                    | `medium`         | Size of the badge.
`position`              | `BadgePosition**`               | `top-right`      | Absolute corner position for the badge.
`color`                 | `BadgeColor***`                 | `secondary`      | Color of the badge.
`value`                 | `string`                        | ``               | Text value to be rendered within the badge.
`icon`                  | `IconName****`                  | ``               | Icon to be rendered within the badge.
`circular`              | `boolean`                       | `false`          | Set to true if badge is placed within a circular wrapper for correct position.
`tooltip`               | `string`                        | ``               | Tooltip text to show on hover.

\*  `BadgeSize` is exported by `fwc-badge`.
```ts
type BadgeSize = 'small' | 'medium' | 'large';
```

\*\*  `BadgePosition` is exported by `fwc-badge`.
```ts
type BadgePosition = 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
```

\*\*\*  `BadgeColor` is exported by `fwc-badge`.
```ts
type BadgeColor = 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'disabled';
```

\*\*\*\*  `IconName` is exported by `fwc-icon` and is based on EDS icon tokens.
```ts
type IconName = 'calendar' | 'settings'...;
```
<!--prettier-ignore-end-->