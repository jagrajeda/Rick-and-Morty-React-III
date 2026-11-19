# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some Oxlint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the Oxlint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and Oxlint's TypeScript related rules in your project.

# Rick and Morty React III

By the end of this assignment your project should meet the following requirements:
  
  - CharacterDetailsPage.jsx should display all the information pertaining to a single character. Ensure to utilize useParams.
  - A dynamic route that will display CharacterDetailsPage.jsx
  - Implement a functionality for useNavigate through your program

## Hints

- Keep working in your Rick and Morty React II project.
- The dynamic route is another child of App in `router.jsx`, for example `{ path: 'characters/:id', element: <CharacterDetailsPage /> }`. Inside the page, `useParams()` gives you `{ id }`, and `https://rickandmortyapi.com/api/character/${id}` returns that one character.
- Import `useParams` and `useNavigate` from `'react-router'`. `useNavigate` replaced the old `useHistory` / `history.push`, so skip tutorials that use those.