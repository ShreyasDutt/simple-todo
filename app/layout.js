import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ui/theme-provider";
import {
  ClerkProvider
} from '@clerk/nextjs'
import { dark } from "@clerk/themes";
import Navbar from "@/components/Navbar";
import { Toaster } from "sonner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Todo",
  description: "Simple Todos App made with Nextjs",
};

export default function RootLayout({ children }) {
  return (
        <ClerkProvider
          appearance={{
            baseTheme: dark,
          }}
        >
          <html lang="en" suppressHydrationWarning>
            <body
              className={`${geistSans.variable} ${geistMono.variable} antialiased`}
            >
               <ThemeProvider
                attribute="class"
                defaultTheme="system"
                enableSystem
                disableTransitionOnChange
              >
                <Navbar/>
                {children}
                <Toaster/>
              </ThemeProvider>
            
            </body>
          </html>
    </ClerkProvider>
    
  );
}
