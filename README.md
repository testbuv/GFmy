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

### api

- `/api/generate.ts`: API route for generating images using AI models.
- `/api/subscribe.ts`: API route for handling user subscriptions and payments.
- `/api/webhook.ts`: Webhook endpoint for handling Stripe events.
- `/api/qrgen/route.ts`: API route for generating QR codes using Replicate models.
- `/api/upscale/route.ts`: API route for upscaling images using Replicate models.
- `/api/bg-remove/route.ts`: API route for removing backgrounds from images using Replicate models.

### components

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
