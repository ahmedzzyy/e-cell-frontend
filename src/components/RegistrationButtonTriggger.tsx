// RegisterButtonTrigger.tsx
"use client";
import React, { useState } from 'react';
import { RegisterIPCForm } from './register-ipc-form'; // Import the form component
import { Dialog, DialogTrigger } from './ui/dialog'; // Assuming Dialog and DialogTrigger from Shadcn

interface RegisterButtonTriggerProps {
  /** The text displayed on the button. */
  text?: string;
}

export const RegisterButtonTrigger: React.FC<RegisterButtonTriggerProps> = ({ 
  text = "Register Now" 
}) => {
  const [isOpen, setIsOpen] = useState(false);

  // Styling matches the Hero Banner's "Register Now" button
  const buttonClassName = "px-6 py-3 rounded-full bg-slate-900/60 ring-1 ring-slate-700 hover:ring-blue-500 transition focus:outline-none text-white font-semibold";

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <button
          className={buttonClassName}
          // The button uses the same styles as the anchor link in the HeroBanner
        >
          {text}
        </button>
      </DialogTrigger>
      
      {/* The DialogContent is rendered by the RegisterIPCForm component itself for full control */}
      <RegisterIPCForm />
    </Dialog>
  );
};