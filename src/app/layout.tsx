import "./globals.css";

export const metadata = {
  title: "Linh Portfolio",
  description: "Modern Frontend Developer Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}