
# Fooseball Game

A 3D foosball (table soccer) game built with React, TypeScript, Vite, and Three.js using [`@react-three/fiber`](https://docs.pmnd.rs/react-three-fiber) and [`@react-three/drei`](https://docs.pmnd.rs/drei/introduction).

## Features

- Interactive 3D foosball table rendered with Three.js
- Keyboard controls for moving the ball (WASD or arrow keys)
- Modular React components for table, rods, players, and ball
- Realistic field markings, goal posts, and player rods
- Modern TypeScript setup with strict linting and fast HMR via Vite
- Easily extensible for more advanced gameplay or physics

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or newer recommended)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Installation

```sh
npm install
```

### Development

Start the development server:

```sh
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build

To build for production:

```sh
npm run build
```

### Lint

To check code quality:

```sh
npm run lint
```

## Controls

- **Move Ball:** Arrow keys or WASD

## Project Structure

- [`src/App.tsx`](src/App.tsx): Main app entry
- [`src/components/FoosballScene.tsx`](src/components/FoosballScene.tsx): Sets up the 3D scene, camera, and controls
- [`src/components/Table.tsx`](src/components/Table.tsx): Renders the foosball table, field, and goals
- [`src/components/Rod.tsx`](src/components/Rod.tsx): Renders a rod with a configurable number of players
- [`src/components/Player.tsx`](src/components/Player.tsx): Renders a single player figure
- [`src/components/Ball.tsx`](src/components/Ball.tsx): Ball logic, movement, and keyboard controls

## Customization

- Change the number of players per rod by editing the `players` prop in [`src/components/FoosballScene.tsx`](src/components/FoosballScene.tsx).
- Adjust table and field dimensions in [`src/components/Table.tsx`](src/components/Table.tsx).
- Add more advanced physics or scoring logic by extending [`src/components/Ball.tsx`](src/components/Ball.tsx).

## License

MIT

---

Inspired by classic foosball, built with [React Three Fiber](https://docs.pmnd.rs/react-three-fiber) and [Vite](https://vitejs.dev/).
