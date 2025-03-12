"use client";

import { ThemeProvider } from "next-themes";
import Providers from "./providers";

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="light"
      enableSystem
      disableTransitionOnChange
    >
      <Providers>{children}</Providers>
    </ThemeProvider>
  );
}
