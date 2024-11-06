import "./globals.css";
import { Poppins, Roboto, Playfair_Display } from "next/font/google";
import NavigationBar from "./ui/NavigationBar";

const poppins = Poppins({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-poppins",
});

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-roboto",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-playfair-display",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} ${playfair.variable} antialiased bg-[#050301]`}
      >
        <div>
          <NavigationBar />
        </div>
        {children}
      </body>
    </html>
  );
}
