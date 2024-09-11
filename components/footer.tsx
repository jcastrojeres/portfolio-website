import React from "react";

export default function Footer() {
  return (
    <footer className="mb-6 px-4 text-center text-gray-500 dark:text-white/20">
      <small className="mb-2 block text-xs">
        &copy; 2024 Joshua Garcia. All rights reserved
      </small>
      <p className="text-xs">
        <span className="text-bold">About this website:</span> build with React
        & Next.js(App Router & Server Actions), TypeScript, Tailwind CSS, Framer
        Motion, React Email & Resend, Vercel hosting.
      </p>
    </footer>
  );
}
