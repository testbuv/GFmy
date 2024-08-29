# Growth Fast.io

A SaaS application for image editing using AI.

## Technologies

- ✨ Next js 13 `App Router`
- ⚒ Models from **Replicate**
- 💎 Styled using **Tailwind CSS**
- 🎨 Components and Theme using **Shadcn/ui**
- 🔒 Authentication using **NextAuth.js**
- 🐻 State Management using **Zustand**
- 📊 ORM using **Prisma**
- 🧧 Database - SQL on **PlanetScale**
- 💳 Subscriptions using **Stripe**
- 🔧 Form Validations using **Zod**
- 📷 Image Storage using **Cloudinary**
- 📤 Drag n Drop using **React-dropzone**
- 🌀 Written in **TypeScript**

## Database Schema

The application uses a PostgreSQL database with the following tables and relationships:

### User

- `id`: Unique identifier for the user (primary key)
- `role`: User role (enum: USER or ADMIN)
- `name`: User's name
- `email`: User's email address (unique)
- `emailVerified`: Timestamp of email verification
- `image`: User's profile image URL
- `createdAt`: Timestamp of user creation
- `updatedAt`: Timestamp of user update
- `credits`: User's credit balance (default: 400)

Relationships:
- One-to-many with `Account` (a user can have multiple accounts)
- One-to-many with `Session` (a user can have multiple sessions)
- One-to-many with `Creation` (a user can have multiple creations)
- One-to-many with `Purchase` (a user can have multiple purchases)

### Account

- `id`: Unique identifier for the account (primary key)
- `userId`: Foreign key referencing the `User` table
- `type`: Account type
- `provider`: Authentication provider
- `providerAccountId`: Provider-specific account ID
- `refresh_token`: Refresh token for the account
- `access_token`: Access token for the account
- `expires_at`: Timestamp of token expiration
- `token_type`: Type of token
- `scope`: Scope of the token
- `id_token`: ID token for the account
- `session_state`: Session state
- `createdAt`: Timestamp of account creation
- `updatedAt`: Timestamp of account update

Relationships:
- Many-to-one with `User` (an account belongs to a user)

### Session

- `id`: Unique identifier for the session (primary key)
- `sessionToken`: Unique session token
- `userId`: Foreign key referencing the `User` table
- `expires`: Timestamp of session expiration

Relationships:
- Many-to-one with `User` (a session belongs to a user)

### Creation

- `id`: Unique identifier for the creation (primary key)
- `prompt`: Prompt used for the creation
- `imageUrl`: URL of the generated image (unique)
- `domain`: Domain of the creation
- `model_latency`: Latency of the model used for the creation
- `createdAt`: Timestamp of creation
- `userId`: Foreign key referencing the `User` table

Relationships:
- Many-to-one with `User` (a creation belongs to a user)

### Purchase

- `id`: Unique identifier for the purchase (primary key)
- `userId`: Foreign key referencing the `User` table
- `creditAmount`: Amount of credits purchased
- `eurAmount`: Amount paid in EUR
- `createdAt`: Timestamp of purchase creation
- `updatedAt`: Timestamp of purchase update

Relationships:
- Many-to-one with `User` (a purchase belongs to a user)

### Newsletter

- `id`: Unique identifier for the newsletter subscription (primary key)
- `email`: Email address of the subscriber (unique)
- `createdAt`: Timestamp of subscription creation
- `updatedAt`: Timestamp of subscription update

### VerificationToken

- `identifier`: Identifier for the verification token
- `token`: Verification token (unique)
- `expires`: Timestamp of token expiration

## Main Functionalities

### lib

- `session.ts`: Provides functions to retrieve the current user session, user credits, and add user credits.
- `db.ts`: Exports the Prisma client instance for database operations.
- `api-limit.ts`: Implements API rate limiting and credit checking functionality.
- `auth.ts`: Defines the NextAuth configuration for authentication, including providers and email verification.

### Api

- `/api/generate.ts`: API route for generating images using AI models.
- `/api/subscribe.ts`: API route for handling user subscriptions and payments.
- `/api/webhook.ts`: Webhook endpoint for handling Stripe events.
- `/api/qrgen/route.ts`: API route for generating QR codes using Replicate models.
- `/api/upscale/route.ts`: API route for upscaling images using Replicate models.
- `/api/bg-remove/route.ts`: API route for removing backgrounds from images using Replicate models.

### Components

- `landing/pricing.tsx`: Renders the pricing section on the landing page, displaying different pricing plans and their features.
- `pricing-table.tsx`: Renders a pricing table component with options for selecting currency and custom credit amounts.
- `email/new-user.tsx`: Renders the email template for new user registration.
- `email/activation.tsx`: Renders the email template for account activation.

## Running Locally

1. Install dependencies using yarn:


```sh
yarn
```

2. Copy `.env.example` to `.env` and update the variables according to the need.

```sh
cp .env.example .env
```

3. Start the development server:

```sh
yarn run dev
```

<br />
<br />

_Note_: Sometimes the generations can take upto 3 to 5 mins because of Replicate's Cold Start. [Learn More](https://replicate.com/docs/how-does-replicate-work#cold-boots)


## Deployment

## Deploy on Azure Cloud

To deploy your Next.js app with Prisma ORM and PostgreSQL to Azure Cloud, follow these steps:

1. **Prerequisites**:
   - Azure account
   - Azure CLI installed
   - Next.js app with Prisma ORM and PostgreSQL

2. **Log in to Azure**: Open a terminal and log in to your Azure account using the Azure CLI:
   ```
   az login
   ```

3. **Create an Azure PostgreSQL database**:
   - Go to the Azure Portal (https://portal.azure.com).
   - Create a new Azure Database for PostgreSQL server.
   - Configure the server settings, such as the server name, admin username, and password.
   - Note down the server name, admin username, and password for later use.

4. **Update Prisma schema and connection URL**:
   - Open your Prisma schema file (`prisma/schema.prisma`).
   - Update the `datasource` block with the Azure PostgreSQL connection URL:
     ```prisma
     datasource db {
       provider = "postgresql"
       url      = env("DATABASE_URL")
     }
     ```
   - Set the `DATABASE_URL` environment variable in your `.env` file or Azure App Settings (step 6) with the connection URL in the following format:
     ```
     postgresql://<admin-username>:<admin-password>@<server-name>.postgres.database.azure.com:5432/<database-name>?ssl=true
     ```
     Replace `<admin-username>`, `<admin-password>`, `<server-name>`, and `<database-name>` with your Azure PostgreSQL server details.

5. **Create an Azure App Service**:
   ```
   az webapp create --name <app-name> --resource-group <resource-group-name> --plan <app-service-plan-name> --runtime "NODE|14-lts"
   ```
   Replace `<app-name>`, `<resource-group-name>`, and `<app-service-plan-name>` with your desired values.

6. **Configure App Settings**:
   - Set the `DATABASE_URL` environment variable in the Azure App Service settings:
     ```
     az webapp config appsettings set --name <app-name> --resource-group <resource-group-name> --settings DATABASE_URL="<your-database-url>"
     ```
     Replace `<app-name>`, `<resource-group-name>`, and `<your-database-url>` with your actual values.
   - Set any other required environment variables for your Next.js app.

7. **Deploy your Next.js app**:
   - Build your Next.js app:
     ```
     npm run build
     ```
   - Deploy the app to Azure App Service:
     ```
     az webapp deployment source config-zip --name <app-name> --resource-group <resource-group-name> --src <path-to-zip-file>
     ```
     Replace `<app-name>`, `<resource-group-name>`, and `<path-to-zip-file>` with your actual values.

8. **Run Prisma migrations**:
   - SSH into your Azure App Service:
     ```
     az webapp ssh --name <app-name> --resource-group <resource-group-name>
     ```
   - Navigate to your app directory.
   - Run Prisma migrations:
     ```
     npx prisma migrate deploy
     ```

9. **Access your deployed app**:
   - Get the URL of your deployed app:
     ```
     az webapp show --name <app-name> --resource-group <resource-group-name> --query defaultHostName --output tsv
     ```
   - Open the URL in your browser to access your deployed Next.js app.

Make sure to replace the placeholders (`<app-name>`, `<resource-group-name>`, etc.) with your actual values when following the steps.

For more information on deploying Next.js apps to Azure and working with Prisma ORM, refer to the following resources:
- [Next.js deployment documentation](https://nextjs.org/docs/deployment)
- [Azure App Service documentation](https://docs.microsoft.com/en-us/azure/app-service/)
- [Prisma documentation](https://www.prisma.io/docs/)

## Implementing Custom Payment Provider

To implement a custom payment provider, follow these steps:

1. Update the Prisma schema (`prisma/schema.prisma`):

   ```prisma
   model Purchase {
     id              String   @id @default(cuid())
     userId          String
     user            User     @relation(fields: [userId], references: [id], onDelete: Cascade)
     creditAmount    Int
     paymentProvider String
     paymentId       String
     createdAt       DateTime @default(now())
     updatedAt       DateTime @updatedAt

     @@index([userId])
     @@map("purchases")
   }
   ```
   - Add a `paymentProvider` field to store the name of the custom payment provider.
   - Add a `paymentId` field to store the unique identifier of the payment from the custom provider.
   - Remove the `eurAmount` field since it's specific to Stripe. It's also called in app/(dashboard)/(routes)/purchase-history/page.tsx so if changed then needs to be adjusted.

2. Create a new API route (`pages/api/pay/route.ts`):
   ```typescript
   import { NextApiRequest, NextApiResponse } from 'next';
   import prismadb from '@/lib/db';
   import { getCurrentUser } from '@/lib/session';

   export default async function handler(req: NextApiRequest, res: NextApiResponse) {
     if (req.method !== 'POST') {
       return res.status(405).json({ message: 'Method not allowed' });
     }

     const { amount, paymentId } = req.body;
     const user = await getCurrentUser();

     if (!user) {
       return res.status(401).json({ message: 'Unauthorized' });
     }

     const credits = amount * 100; // 1 EUR = 100 credits

     await prismadb.purchase.create({
       data: {
         userId: user.id,
         creditAmount: credits,
         paymentProvider: 'CustomProvider',
         paymentId,
       },
     });

     await prismadb.user.update({
       where: { id: user.id },
       data: {
         credits: { increment: credits },
       },
     });

     return res.status(200).json({ message: 'Payment successful' });
   }
   ```
   - This API route handles the payment processing for the custom payment provider.
   - It expects the `amount` and `paymentId` in the request body.
   - It creates a new `Purchase` record with the payment details and updates the user's credits.

3. Update the pricing table component (`components/pricing-table.tsx`):
   - Modify the `Buy Now` button click handler to call the new API route (`/api/pay`) with the selected plan details.
   - Pass the `amount` and `paymentId` (generated by the custom payment provider) in the request body.

4. Implement the webhook function for the custom payment provider:
   - Create a new API route (`pages/api/custom-webhook/route.ts`) to handle the webhook events from the custom payment provider.
   - Process the webhook events and update the corresponding `Purchase` records in the database.

5. Update the `addUserCredits` function in `lib/session.ts`:
   ```typescript
   export async function addUserCredits(amount: number) {
     const user = await getCurrentUser();

     if (!user) return;

     const credits = amount * 100; // 1 EUR = 100 credits

     return prismadb.user.update({
       where: { id: user.id },
       data: {
         credits: { increment: credits },
       },
     });
   }
   ```
   - This function is called after a successful payment to add the purchased credits to the user's account.



