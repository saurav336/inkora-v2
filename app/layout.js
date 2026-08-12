import "./globals.css";

export const metadata = {
  title: "Inkora — Identity you can hold, and systems that run.",
  description:
    "Inkora designs the logo and brand system, produces the print and packaging that carries it into the world, and builds the digital tools that keep it working. One studio, start to finish.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="font-sans">{children}</body>
    </html>
  );
}
