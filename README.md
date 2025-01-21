# 🛡️ Next.js Clerk Authentication Example

This is a Next.js application that demonstrates how to implement user authentication using [Clerk](https://clerk.dev/). This example includes sign-in and sign-up pages with Clerk's pre-built components.

## 🚀 Features

- **User Authentication**: Sign in and sign up using Clerk.
- **Responsive Design**: Mobile-friendly interface.
- **Easy Setup**: Quick installation and configuration.

## 📦 Prerequisites

Before you begin, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v14 or later)
- [npm](https://www.npmjs.com/) (comes with Node.js)

## 🛠️ Getting Started

### 1. Clone the Repository

```bash
git clone git@github.com:RoystonDAlmeida/clerk-signup_signin-page.git
cd clerk-signup_signin-page/
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Create a Clerk Account

- Go to [Clerk](https://clerk.dev/) and create an account.
- Set up a new application in the Clerk dashboard.

### 4. Configure Environment Variables

Create a `.env.local` file at the root of your project and add your Clerk API keys:

```bash
NEXT_PUBLIC_CLERK_SIGN_IN_URL = 
NEXT_PUBLIC_CLERK_SIGN_UP_URL = 
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY =
CLERK_SECRET_KEY = 
```

### 5. Run the Development Server

Start your local development server:

```bash
npm run dev
```

Visit [Sign In Page](http://localhost:3000/sign-in) to see the application in action.

## 📱 Usage

### Sign In

To sign in, navigate to the sign-in page:

[Sign In Page](http://localhost:3000/sign-in)

### Sign Up

If you don't have an account, click on "Sign up here" to create a new account:

[Sign Up Page](http://localhost:3000/sign-up)

## 📚 Documentation

For more information on how to customize Clerk's components, refer to the [Clerk Documentation](https://clerk.dev/docs).

## 🛠️ Built With

- [Next.js](https://nextjs.org/) - The React Framework for Production
- [Clerk](https://clerk.dev/) - Authentication for Your App