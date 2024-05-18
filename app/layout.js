import { Inter } from "next/font/google";
import "@/styles/main.css";
import Providers from "@/src/context/Providers";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Naturalmente Bom",
  description: "Seu mercado de produtos naturais e orgânicos",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
