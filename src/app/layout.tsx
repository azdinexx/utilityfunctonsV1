import '../styles/globals.css';
import NavBar from '../components/NavBar';

export const metadata = {
  title: 'Utility Functions',
  description: 'Discover and Share Utility Functions',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body>
        <div className='main'>
          <div className='gradient' />
        </div>
        <NavBar />
        {children}
      </body>
    </html>
  );
}
