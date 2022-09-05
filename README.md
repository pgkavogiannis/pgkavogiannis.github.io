# Deploying to GitHub Pages

This example supports deploying a static Next.js application (using `next export`) to GitHub Pages.

## How to use

Execute [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app)
with [npm](https://docs.npmjs.com/cli/init), [Yarn](https://yarnpkg.com/lang/en/docs/cli/create/),
or [pnpm](https://pnpm.io) to bootstrap the example:

```bash
npx create-next-app --example github-pages nextjs-github-pages
# or
yarn create next-app --example github-pages nextjs-github-pages
# or
pnpm create next-app --example github-pages nextjs-github-pages
```

### Deploy to GitHub Pages

1. Create a new public GitHub repository.
2. Edit `next.config.js` to match your GitHub repository name.
3. Push the starter code to the `main` branch.
4. Run the `deploy` script (e.g. `npm run deploy`) to create the `gh-pages` branch.
5. On GitHub, go to **Settings** > **Pages** > **Source**, and choose `gh-pages` as the branch with the `/root` folder.
   Hit **Save**.
6. Make a change.
7. Run the `deploy` script again to push the changes to GitHub Pages.

Congratulations! You should have a URL like:

```bash
https://<github-user-name>.github.io/<github-project-name>/
```
