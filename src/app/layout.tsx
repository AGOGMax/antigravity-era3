import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Provider } from "@/components/RainbowKit";
import "@rainbow-me/rainbowkit/styles.css";
import { IMAGEKIT_BACKGROUNDS } from "@/images";
import { Toaster } from "react-hot-toast";
import Metrics from "./metrics";

const inter = Inter({ subsets: ["latin"] });

const title = "Antigravity | Join The Space Cult!";
const description = "Join The Space Cult.";
const previewImage = IMAGEKIT_BACKGROUNDS.MINING_PAGE_ERA_3;
const websiteUrl = new URL("https://agproject.io");

export const metadata: Metadata = {
  title: title,
  description: description,
  // manifest: "./site.webmanifest",
  metadataBase: websiteUrl,
  applicationName: "Antigravity",
  openGraph: {
    type: "website",
    url: websiteUrl,
    title: title,
    description: description,
    siteName: "Antigravity",
    images: [
      {
        url: previewImage,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@HexrayVision",
    creator: "@HexrayVision",
    title: title,
    description: description,
    images: {
      url: previewImage,
      alt: "Antigravity Preview image",
    },
  },
  other: {
    "twitter:url": "https://agproject.io",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Provider>
          <Toaster />
          {children}
        </Provider>
        <Metrics />
      </body>
    </html>
  );
}
