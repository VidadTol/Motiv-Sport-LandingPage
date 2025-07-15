// app/components/GardientBackground.tsx (ou GradientBackground.tsx)
import React from "react";

const GradientBackground = ({ children }: { children: React.ReactNode }) => (
  <div
    className="min-h-screen py-8 bg-gradient-to-br from-yellow-400 via-green-400 to-green-500" // Ajout de 'w-full' et suppression de 'flex items-center justify-center'
  >
    {children}
  </div>
);

export default GradientBackground;