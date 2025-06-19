# Welcome to your Lovable project

## Project info

**URL**: https://lovable.dev/projects/ae1f3dab-c6a0-454d-af3b-52298ee032d0

## How can I edit this code?

There are several ways of editing your application.

**Use Lovable**

Simply visit the [Lovable Project](https://lovable.dev/projects/ae1f3dab-c6a0-454d-af3b-52298ee032d0) and start prompting.

Changes made via Lovable will be committed automatically to this repo.

**Use your preferred IDE**

If you want to work locally using your own IDE, you can clone this repo and push changes. Pushed changes will also be reflected in Lovable.

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```

**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## How can I deploy this project?

This project is configured to be deployed to GitHub Pages or Netlify.

### Build Command

First, ensure all dependencies are installed:
```sh
npm install
```
Then, build the project:
```sh
npm run build
```
This command will generate a `dist` folder with the static assets ready for deployment.

### Deploying to GitHub Pages

1.  **Base Path Configuration (if deploying to a repository subpath, e.g., `username.github.io/repo-name/`):**
    *   Open `vite.config.ts`.
    *   Change `base: './'` to `base: '/repo-name/'` (replace `repo-name` with your actual repository name).
    *   Re-run `npm run build`.
    *   If deploying to `username.github.io` (root), `base: './'` is usually fine, or you can use `base: '/'`.

2.  **Push `dist` folder to GitHub:**
    *   The simplest way is to commit the `dist` folder to your `main` branch (or another branch).
    *   Alternatively, use a tool like `gh-pages` package to push the `dist` folder content to a `gh-pages` branch.
        ```sh
        npm install --save-dev gh-pages
        ```
        Add a script to `package.json`:
        ```json
        "scripts": {
          // ... other scripts
          "deploy:gh": "gh-pages -d dist"
        }
        ```
        Then run:
        ```sh
        npm run deploy:gh
        ```
        (Ensure your `vite.config.ts` has the correct `base` path before running this).

3.  **Configure GitHub Repository Settings:**
    *   Go to your repository on GitHub.
    *   Click on "Settings" > "Pages".
    *   Under "Build and deployment", for "Source", select "Deploy from a branch".
    *   Choose the branch where your `dist` folder (or its contents) are located (e.g., `main` if you committed `dist` directly, or `gh-pages` if you used the `gh-pages` package).
    *   For the folder, select `/dist` if you committed the `dist` folder itself, or `/ (root)` if you pushed the contents of `dist` to the root of the `gh-pages` branch.
    *   Click "Save". Your site should be live shortly at `https://<username>.github.io/<repo-name>/` (or `https://<username>.github.io/` if it's a user/org page).

### Deploying to Netlify

Netlify typically makes this process very straightforward.

1.  **Connect your GitHub Repository to Netlify:**
    *   Sign up or log in to Netlify.
    *   Click "Add new site" > "Import an existing project".
    *   Connect to GitHub and authorize Netlify to access your repositories.
    *   Select the repository for this project.

2.  **Configure Build Settings in Netlify:**
    *   **Branch to deploy:** Choose your main branch (e.g., `main`, `master`).
    *   **Build command:** `npm run build` (or `vite build`). Netlify often auto-detects this for Vite projects.
    *   **Publish directory:** `dist`. Netlify also often auto-detects this.
    *   **Base directory (optional):** Leave blank unless your project is in a monorepo subdirectory.

3.  **Environment Variables (if needed):**
    *   If your `vite.config.ts` uses `base: './'`, Netlify should handle it correctly. If you used a specific repository name for GitHub Pages (e.g., `base: '/repo-name/'`), ensure this doesn't conflict. For Netlify, `base: '/'` or `base: './'` in `vite.config.ts` is generally best. The current configuration `base: './'` is suitable.

4.  **Deploy:**
    *   Click "Deploy site". Netlify will build and deploy your site.
    *   Netlify will provide you with a unique URL (e.g., `your-project-name.netlify.app`). You can also set up a custom domain.

## Can I connect a custom domain?

Yes, both GitHub Pages and Netlify support custom domains.

*   **GitHub Pages:** See [Configuring a custom domain for your GitHub Pages site](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site).
*   **Netlify:** In your site's dashboard on Netlify, go to "Domain settings" (or "Site settings" > "Domain management").

---
*This README was updated by an AI assistant to include deployment instructions.*
