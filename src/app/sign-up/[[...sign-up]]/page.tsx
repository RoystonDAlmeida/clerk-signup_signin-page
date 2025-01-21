// src/app/sign-up/[[...sign-up]]/page.tsx
"use client";

import { SignUp } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function SignUpPage() {
  const router = useRouter();

  const handleSignUpSuccess = () => {
    // Redirect to home or another page after successful sign-up
    router.push("/sign-in");
  };

  return (
    <div className="h-screen flex flex-col items-center justify-center gap-6 min-w-full">
      <h2 className="text-2xl font-semibold text-gray-800">Create an Account</h2>
      <SignUp 
        appearance={{ elements: { footer: "hidden" } }} 
        onSuccess={handleSignUpSuccess} 
      />
      <div className="flex flex-row gap-1 text-sm">
        <p>Already have an account?</p>
        <Link href="/sign-in" className="text-blue-700 underline font-semibold">
          Sign in here.
        </Link>
      </div>
    </div>
  );
}