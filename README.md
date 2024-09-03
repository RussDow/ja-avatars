# Junior Avatars
A simple avatar creator based on [react-nice-avatar](https://github.com/dapi-labs/react-nice-avatar)

## Kiosk Mode Usage
This application is meant to be used in Kiosk mode. Refer to to the [readme.txt](scripts/readme.txt) for more information about how to set up the project to run in Kiosk mode.

## Assets
- Designer: [@Micah](https://www.figma.com/@Micah) on Figma
- Figma files: [Avatar Illustration System](https://www.figma.com/community/file/829741575478342595)

## Development
Built with React + TypeScript + Vite + Tailwind

1. Clone this repository
    ```sh
    git clone https://github.com/RussDow/ja-avatars.git
    ```

2. Install dependencies
    ```sh
    npm install
    ```

3. Start the dev server
    ```sh
    npm run dev
    ```

4. Start the Tailwind CLI build process
    ```sh
    npx tailwindcss -i ./src/index.css -o ./src/styles.css --watch
    ```

## Deployment
This app is intended to be served as a static site. Follow instructions for deploying a Vite-based app here: https://vitejs.dev/guide/static-deploy

Note: There is a github workflow in the repository already, should you choose github-pages as your deployment target
