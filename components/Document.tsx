'use client'

import { FormEvent, useState, useTransition } from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

function Document({id}: {id: String}) {
    const [input, setInput] = useState("");
    const [isUpdating, startTransition] = useTransition();
    const updateTitle = (e: FormEvent) => {
        e.preventDefault();
        
        if (input.trim()) {
            
        } 
    };

  return (
    <div>
        <div>
            <form onSubmit={updateTitle}>
                {/* update title */}
                <Input value={input} onChange={(e) => setInput(e.target.value)} />

                <Button disabled={isUpdating} type="submit">
                    {isUpdating ? "Updating..." : "Update"}
                </Button>

                {/* If */}
                {/* isOwner && invite user, DeleteDocument */}
            </form>
        </div>

        <div>
            {/* Manage users */}

            {/* Avatarts */}
        </div>

        {/* Collaborative Editor */}

    </div>
  )
}
export default Document;