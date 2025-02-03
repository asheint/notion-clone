'use server';

import { adminDb } from "@/firebase-admin";
import { auth } from "@clerk/nextjs/server";

export async function createNewDocument() {
    try {
        // Check if the user is authenticated
        const { sessionClaims, userId } = await auth();

        if (!userId || !sessionClaims?.email) {
            // Return a specific response for unauthenticated users
            return { error: "Unauthorized: Please sign in to create a new document." };
        }

        // Proceed with creating the document
        const docCollectionRef = adminDb.collection('documents');
        const docRef = await docCollectionRef.add({
            title: "New Doc"
        });

        await adminDb.collection('users').doc(sessionClaims.email).collection('rooms').doc(docRef.id).set({
            userId: sessionClaims.email,
            role: 'owner',
            createdAt: new Date(),
            roomId: docRef.id,
        });

        return { docId: docRef.id };
    } catch (error) {
        console.error("Error creating document:", error);
        return { error: "An error occurred while creating the document." };
    }
}