"use client";
import { useRouter } from "next/navigation";

export default function FooterClient() {
  const router = useRouter();

  return (
    <footer className="w-full bg-white/40 backdrop-blur-md text-green-500 p-4 text-center">
      <p>Tous droits réservés - Motiv Sport © 2025</p>
      <button
        onClick={() => router.push("/confidentialite")}
        className="text-green-600 hover:text-green-800 underline text-sm mt-1 transition-colors duration-200"
      >
        Politique de confidentialité
      </button>
    </footer>
  );
}