"use client";

import React, { useEffect, useState, useContext, Suspense } from "react";
import { UserDetailContex } from "@/app/_context/UserDetailContext";
import DataView from "./_components/DataView";

function AdminPage() {
    const { userDetail } = useContext(UserDetailContex);
    const [isVerified, setIsVerified] = useState(null);
    const [loading, setLoading] = useState(true);
    const [usersData, setUsersData] = useState([]);

    useEffect(() => {
        const verifyAdmin = async () => {
            if (!userDetail?.email) {
                setIsVerified(false);
                setLoading(false);
                return;
            }

            try {
                const response = await fetch("/api/admin", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({ email: userDetail.email }),
                });

                if (response.ok) {
                    const data = await response.json();
                    setIsVerified(true);
                    setUsersData(data.users || []);
                } else {
                    setIsVerified(false);
                    console.log("Verification failed");
                }
            } catch (error) {
                console.error("Verification error:", error);
                setIsVerified(false);
            } finally {
                setLoading(false);
            }
        };

        verifyAdmin();
    }, [userDetail]);

    // **Loading State**
    if (loading) {
        return <p className="text-center text-gray-700 text-lg py-16">Checking authorization...</p>;
    }

    // **Unauthorized User**
    if (!isVerified) {
        return <p className="text-center text-red-500 text-lg py-16">You are not authorized to access this page </p>;
    }

    // **Authorized User**
    return (
        <Suspense>
            <div className="">
                {/* <p className="text-lg mb-4 mt-4">Welcome, {userDetail.name}!</p> */}
                {/* Pass users data to DataView component */}
                <DataView users={usersData} />
            </div>
        </Suspense>
    );
}

export default AdminPage;
