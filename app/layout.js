import "./globals.css";

export const metadata = {
  title: "Dr. Maya Reynolds, PsyD | Therapy in Santa Monica, CA",
  description: "Dr. Maya Reynolds, PsyD offers warm, collaborative therapy for adults in Santa Monica and secure telehealth throughout California."
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}