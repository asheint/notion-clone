'use client'
import React from 'react';
import Document from "@/components/Document";

export default function DocumentPage({
    params,
}: {
    params: { id: string };
}) {
    // Unwrap `params` directly
    const { id } = params;

    return (
        <div className="flex flex-col flex-1 min-h-screen">
            <Document id={id} />
        </div>
    );
}




