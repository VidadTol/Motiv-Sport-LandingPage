"use client";
import CookieConsent from "react-cookie-consent";
import { useEffect, useState } from "react";

export default function Cookies() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const alreadySet = localStorage.getItem("cookieConsent");
    if (!alreadySet) setShow(true);
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookieConsent", "accepted");
    setShow(false);
  };

  const handleDecline = () => {
    localStorage.setItem("cookieConsent", "declined");
    setShow(false);
  };

  if (!show) return null;

  return (
    <CookieConsent
      location="bottom"
      cookieName="MotivSportsCookieConsent"
      enableDeclineButton
      disableStyles={true}
      buttonText="Accept"
      declineButtonText="Decline"
      onAccept={handleAccept}
      onDecline={handleDecline}
      containerClasses="fixed bottom-0 left-0 w-full flex flex-col md:flex-row items-center justify-between px-4 py-3 bg-white/95 border-t border-gray-200 shadow-lg z-[9999] transition-all duration-300"
      buttonClasses="bg-green-600 text-white font-bold rounded px-6 py-2 mx-1 hover:bg-green-700 transition"
      declineButtonClasses="bg-gray-200 text-gray-800 font-bold rounded px-6 py-2 mx-1 hover:bg-gray-300 transition"
      expires={365}
    >
      This site uses cookies to improve your experience.{" "}
      <a
        href="/cookie-policy"
        className="underline text-green-700 hover:text-green-900 ml-1"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn more
      </a>
    </CookieConsent>
  );
}