import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import './styles/layout.css';

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body>
        <Navbar />
        <div className="flex">
          <Sidebar />
          <main>{children}</main>
        </div>
      </body>
    </html>
  );
}
