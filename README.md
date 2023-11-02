Web Application made with Next.js and Bootstrap to show the data of the original Pokemons from the pokeapo.co API. The app has a customized state management made with global context and useReducer hoos, based on Redux.

The app has 2 different pages: The Homepage and the Details page. In the homepage you can see a paginated view of all the available pokemons, if the pokemons are favorite and a filter to look for specific pokemons. In the details page you can see more info about the selected pokemon and you can set it as a favourite. The app uses the Local Storage to persist the data from the user. To finish things there is only one unit test, it test some things for the Card component, the tests are made with Jest and Testing library (couldn't make more tests because the lack of time).

After downloading the project make sure to open it and create a `.env.local` file where you add the following code to it:
`NEXT_PUBLIC_API_URL=https://pokeapi.co/api/v2`
This is the only environment variable you need in order to run the project.

In order to test the app you can download the repo, install dependencies with the command pnpm install and run the project with pnpm dev.

Hope you like it!

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

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
