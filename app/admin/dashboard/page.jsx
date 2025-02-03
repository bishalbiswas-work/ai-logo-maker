"use client";

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { UserButton, useUser } from '@clerk/nextjs';
import DataView from "./_components/DataView";

export default function AdminDashboard() {
    const { user, isSignedIn } = useUser();
    const router = useRouter();
    const [adminData, setAdminData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchAdminData = async () => {
            if (!isSignedIn) {
                router.push('/admin/login');
                return;
            }

            try {
                const response = await fetch('/api/admin', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ email: user?.emailAddresses[0]?.emailAddress }),
                });

                if (response.ok) {
                    const data = await response.json();
                    setAdminData(data || []);
                } else {
                    router.push('/admin/login');  // Redirect if not authorized
                }
            } catch (err) {
                console.error('Error fetching admin data:', err);
                setError('Failed to load admin data.');
                router.push('/admin/login');  // Redirect on error
            } finally {
                setLoading(false);
            }
        };

        fetchAdminData();
    }, [isSignedIn, user, router]);

    if (loading) {
        return (
            <div className="flex items-center justify-center h-screen bg-gray-100">
                <p className="text-lg text-blue-500">Loading admin data...</p>
            </div>
        );
    }

    if (error) {
        return (
            <div className="flex items-center justify-center h-screen bg-gray-100">
                <p className="text-lg text-red-500">{error}</p>
            </div>
        );
    }

    return (
        <div className="">
            {/* <h1 className="text-2xl font-semibold mb-4">Welcome, {user?.firstName}!</h1>
            <UserButton afterSignOutUrl="/admin/login" /> */}

            {adminData && (
                <div className="mt-6 text-left">
                    {/* <h2 className="text-xl font-medium mb-2">Admin Data:</h2>
                        <pre className="bg-gray-200 p-4 rounded-md text-sm">
                            {JSON.stringify(adminData, null, 2)}
                        </pre> */}
                    <DataView users={adminData?.users || []} />
                </div>
            )}
        </div>
    );
}
