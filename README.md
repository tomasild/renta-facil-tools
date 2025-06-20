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

## How can I deploy this project to GitHub Pages?

This project is configured for easy deployment to GitHub Pages.

**Steps:**

1.  **Run the deploy script:**
    ```sh
    npm run deploy
    ```
    This command will first build your project (creating a `dist` folder) and then push the contents of the `dist` folder to a branch named `gh-pages` in your GitHub repository.

2.  **Configure GitHub Pages:**
    *   Go to your repository on GitHub: `https://github.com/tomasild/renta-facil-tools`
    *   Click on "Settings" (⚙️).
    *   In the left sidebar, navigate to "Pages".
    *   Under "Build and deployment", for "Source", select "Deploy from a branch".
    *   Under "Branch", select `gh-pages` as the source branch.
    *   Ensure the folder is set to `/ (root)`.
    *   Click "Save".

    Your site should be live shortly at `https://tomasild.github.io/renta-facil-tools/`.

## Can I connect a custom domain?

Yes, GitHub Pages supports custom domains. After deploying, you can configure this in the "Pages" section of your repository settings. See [Configuring a custom domain for your GitHub Pages site](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site).

---
*Deployment instructions updated by an AI assistant.*
