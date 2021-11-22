# Technologies

- NextJS
- stitches.dev for styling: I could have used a ready to use tool like tailwind or mui but wanted to experiment with stitches
- Prisma for connecting to a Postgress DB (the demo db will be hosted in Supabase)
- Formik for handling
- Storybook, for developing and documenting the component library.

# Getting started

## Configure required env variables.

1. Copy and paste `.env.example`
2. Rename it to `.env`
3. Follow the instructions for each env variable as is indicated in `.env.example`

## Run migrations against the db

You can check if Prisma can actually connect to the db by running `yarn prisma migrate status`. Once it's connected you should be able to run the migrations with `yarn prisma migrate deploy`.

## Start project

1. First, let's run `yarn install`, to install the dependencies.
2. Run the porject with `yarn dev` (dev mode) or `yarn build && yarn start` (prod mode)

## Play with the components in Storybook

Most of the components are documented in Storybook, you can play with them by running `yarn storybook`.
