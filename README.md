This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

### Deploying changes from the Codex environment

The hosted Codex workspace cannot reach external networks, so `git push` commands will fail from here. To ship new commits and trigger a Vercel deployment:

1. **Export your work**
   - Create a patch or archive of the repository in Codex. For example: `git bundle create factara-web.bundle --all`.
   - Download the bundle from the Codex interface.
2. **Apply the bundle locally**
   - On your machine, clone the GitHub repository that Vercel is connected to.
   - Run `git bundle unbundle factara-web.bundle` (or `git am` if you exported as patches) from inside that clone.
   - Verify the changes with `git status` and run any tests you need.
3. **Push from your local machine**
   - Ensure the remote URL is correct: `git remote -v` should point to `git@github.com:<your-user>/<repo>.git` or the HTTPS equivalent.
   - Push the branch you want Vercel to deploy, for example `git push origin work:main`.
4. **Monitor the deployment on Vercel**
   - Vercel will automatically rebuild the project when it sees the new commit on the configured branch.
   - Track the build status in the Vercel dashboard and confirm the deployment succeeded.

These steps let you bridge the gap between the isolated Codex environment and your production deployment pipeline.
