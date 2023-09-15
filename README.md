# Coingecko API Consumer

This project consists of a Next.js project that consumes the Coingecko API


App is accessible here: https://coingecko-api-consumer.vercel.app/

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

