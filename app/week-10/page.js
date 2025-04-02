"use client";

import Link from "next/link";
// Import the useUserAuth hook
import { useUserAuth } from "./_utils/auth-context";

export default function Page() {
  // Use the useUserAuth hook to get the user object and the login and logout functions
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <div>
        {user ? (
          <button
            onClick={firebaseSignOut}
            className="bg-red-400 text-black px-4 py-2 rounded-md hover:bg-red-600 transition"
          >
            Sign out
          </button>
        ) : (
          <button
            onClick={gitHubSignIn}
            className="bg-gray-800 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition"
          >
            Sign in with GitHub
          </button>
        )}
      </div>
      <div>
        {user && (
          <div className="mt-6 bg-white shadow-lg rounded-lg p-6 w-full max-w-md text-center">
            <h2 className="font-bold text-2xl m-2 p-2">
              It's good to see you again {user.displayName}!
            </h2>
            <p>E-mail: {user.email}</p>
            <p className="m-2 p-2">
              <Link
                href="/week-10/shopping-list"
                className="text-blue-500 hover:underline"
              >
                Access Shopping List
              </Link>
            </p>
          </div>
        )}
      </div>
    </main>
  );
}
