// src/app/page.tsx

import type { Metadata } from "next";

// components
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "R & D Security | Professional Security Services for Your Business",
  description: `R & D Security offers top-notch security services for businesses. From surveillance systems to access control, we provide comprehensive solutions to keep your business safe and secure. Contact us today for a consultation!`,
};

export default function Home() {
  return (
    <main className="mt-0">
      <div id="scrollto" className="col scroll-mt-28">
        <h1>R & D Security Home</h1>
        <p className="page-description">
          Welcome to R & D Security, your trusted partner for comprehensive security solutions. 
          We help businesses stay secure.
        </p>
      </div>
      <ContactForm />
    </main>
  );
}
