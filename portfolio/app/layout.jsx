import '../styles/globals.css';
import Providers from '../components/Providers';
import Navbar from '../components/Navbar';

export const metadata = {
  title: 'Deepthi Sebastian | Portfolio',
  description: 'Full Stack Developer Portfolio — Deepthi Sebastian'
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <Navbar />
          {children}
        </Providers>
      </body>
    </html>
  );
}
