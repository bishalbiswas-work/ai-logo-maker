import { db } from "@/configs/FirebaseConfig";
import { collection, doc, getDoc, getDocs } from "firebase/firestore";
import { NextResponse } from "next/server";

export async function POST(req) {
    try {
        const body = await req.json();
        const email = body.email;

        if (!email) {
            return NextResponse.json({ message: "Email is required" }, { status: 400 });
        }

        // Check if the email exists in the "admin" collection
        const adminRef = doc(db, "admin", email);
        const adminSnap = await getDoc(adminRef);

        if (!adminSnap.exists()) {
            return NextResponse.json({ message: "Access Denied" }, { status: 403 });
        }

        // Fetch all users from the "users" collection
        const usersCollection = collection(db, "users");
        const usersSnapshot = await getDocs(usersCollection);

        let usersData = [];

        for (const userDoc of usersSnapshot.docs) {
            const userData = userDoc.data();
            const logosCollection = collection(userDoc.ref, "logos");
            const logosSnapshot = await getDocs(logosCollection);

            let logosCount = logosSnapshot.size; // Count of logos

            usersData.push({
                id: userDoc.id,
                name: userData.name,
                credit: userData.credit,
                email: userData.email,
                logosCount, // Only returning the count
            });
        }

        return NextResponse.json({ users: usersData }, { status: 200 });

    } catch (error) {
        console.error("Error fetching users:", error);
        return NextResponse.json({ message: "Internal Server Error" }, { status: 500 });
    }
}
