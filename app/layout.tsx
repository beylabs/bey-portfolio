export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-ghost text-slateC">
        {children}
      </body>
    </html>
  );
}
