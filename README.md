# Coingecko API Consumer

This project consists of a Next.js project that consumes the Coingecko API


App is accessible here: https://coingecko-api-consumer.vercel.app/

## CI

Continous Integration has been setup through a GitHub workflow.

```
name: Deploy App to Vercel Production
env:
  VERCEL_ORG_ID: ${{ secrets.VERCEL_ORG_ID }}
  VERCEL_PROJECT_ID: ${{ secrets.VERCEL_PROJECT_ID }}
on:
  push:
    branches:
      - main
jobs:
  Deploy-Production:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - name: Set Up Project
        run: npm install
      - name: Test Project
        run: npm run test
      - name: Install Vercel CLI
        run: npm install --global vercel@latest
      - name: Pull Vercel Environment Information
        run: vercel pull --yes --environment=production --token=${{ secrets.VERCEL_TOKEN }}
      - name: Build Project Artifacts
        run: vercel build --prod --token=${{ secrets.VERCEL_TOKEN }}
      - name: Deploy Project Artifacts to Vercel
        run: vercel deploy --prebuilt --prod --token=${{ secrets.VERCEL_TOKEN }}

```

The workflow has a step called `Test Project` that executes everything change has been made in `main` branch. It tests the app using the unit tests defined, and then proceeds to initate CD - Continous Deployment to Vercel.

## Deployment
- Application is deployed to Vercel through a GitHub workflow.
- Application is accessible through: https://coingecko-api-consumer.vercel.app/

### Step 01: Setting up Vercel

Install Vercel CLI:

```
npm i -g vercel
```

Next, login to Vercel using `vercel login` and use your preferred auth mechanism.

### Step 02: Create Vercel Token

- Follow the link: https://vercel.com/account/tokens and create an access token on Vercel for the CLI to use during deployment (Step 04). 

### Step 03: Create Vercel Project.

**Note: Run these commands in project root**

- Create a Vercel project using `vercel link`.
- Use default commands
- This will generate a `.vercel` directory in the root that contains `project.json` that will contain Project and Org ID that'll be used in step 04.

### Step 04: Update Repository Secrets

Create three repository level secrets:
- VERCEL_ORG_ID: Get from `project.json` located in `.vercel`
- VERCEL_PROJECT_ID: Get from `project.json` located in `.vercel`
- VERCEL_TOKEN: The token created in Step 02.

These secrets are used by Vercel during the Workflow to deploy the app.

### Step 05: Run the Workflow

Run the GitHub actions workflow after adding the repo level secrets, and it'll deploy the app to the project ID you specified in the particular org.

