"use client";

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { SignInButton, useUser, useClerk } from '@clerk/nextjs';
import { FaGoogle, FaSpinner, FaSignOutAlt } from 'react-icons/fa';

export default function AdminLogin() {
    const { user, isSignedIn } = useUser();
    const { signOut, openSignIn } = useClerk();  // Using Clerk methods
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const verifyAdmin = async () => {
            if (!user?.emailAddresses[0]?.emailAddress) {
                setError('No email found. Please sign in again.');
                return;
            }

            setIsLoading(true);

            try {
                const response = await fetch("/api/admin", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({ email: user.emailAddresses[0].emailAddress }),
                });

                if (response.ok) {
                    router.push('/admin/dashboard'); // Redirect if verified
                } else {
                    setError("You do not have access to visit this page.");
                }
            } catch (err) {
                console.error("Verification error:", err);
                setError("An error occurred during verification.");
            } finally {
                setIsLoading(false);
            }
        };

        if (isSignedIn) {
            verifyAdmin();
        }
    }, [isSignedIn, user, router]);

    // Handles logout and triggers login modal while staying on /admin/login
    const handleSignOutAndReLogin = async () => {
        await signOut();  // Logs the user out
        openSignIn({ redirectUrl: "/admin/login" });  // Immediately reopens login modal
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-orange-500 via-pink-500 to-purple-500">
            <div className="bg-white p-10 rounded-xl shadow-2xl w-full max-w-md text-center">
                <h1 className="text-3xl font-bold bg-gradient-to-r from-orange-500 via-pink-500 to-purple-500 text-transparent bg-clip-text mb-4">
                    Logoipsum Admin Portal
                </h1>
                <p className="text-gray-500 mb-8">Sign in to access the admin dashboard</p>

                {!isSignedIn && (
                    <SignInButton mode="modal" redirectUrl="/admin/login">
                        <button className="flex items-center justify-center w-full bg-gradient-to-r from-orange-500 via-pink-500 to-purple-500 text-white px-6 py-3 rounded-lg hover:opacity-90 transition-all duration-300 shadow-md hover:shadow-lg">
                            <FaGoogle className="mr-2 text-lg" />
                            Sign in with Google
                        </button>
                    </SignInButton>
                )}

                {isLoading && (
                    <div className="flex items-center justify-center mt-6 text-pink-600">
                        <FaSpinner className="animate-spin mr-2" />
                        <p>Verifying admin access...</p>
                    </div>
                )}

                {error && (
                    <div className="mt-6 bg-red-100 text-red-600 px-4 py-3 rounded-lg shadow-sm border border-red-200">
                        <p>{error}</p>

                        {/* Auto Logout and Immediate Login while Staying on /admin/login */}
                        <div className="mt-4 space-y-2">
                            <button
                                onClick={handleSignOutAndReLogin}
                                className="w-full flex items-center justify-center bg-gradient-to-r from-orange-500 via-pink-500 to-purple-500 text-white px-4 py-2 rounded-md hover:opacity-90 transition-all duration-300 shadow-sm hover:shadow-md"
                            >
                                <FaSignOutAlt className="mr-2" />
                                Change Email / Re-login
                            </button>
                        </div>
                    </div>
                )}

                <footer className="mt-8 text-gray-400 text-sm">
                    &copy; {new Date().getFullYear()} Logoipsum Admin Panel. All rights reserved.
                </footer>
            </div>
        </div>
    );
}
