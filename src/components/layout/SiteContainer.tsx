// src/components/layout/SiteContainer.tsx
import { ReactNode } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";

interface SiteContainerProps {
  children: ReactNode;
}

export function SiteContainer({ children }: SiteContainerProps) {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 pt-20">{children}</main>
      <Footer />
    </div>
  );
}