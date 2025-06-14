import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Imran Shaikh",
  description: "Web Developer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth" >
      <body
        className={`bg-gradient-to-r from-slate-200 to-indigo-200 ${geistSans.variable} ${geistMono.variable} antialiased`}
      >
      
        
        {children}
      </body>
    </html>
  );
}
