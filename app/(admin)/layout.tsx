import CmsNavbar from "../components/CMSNavbar";
import { Provider } from "../utils/Provider";
import "./globals.css";

export const metadata = {
  title: "Studio do Leo",
  description: "Local onde você pode criar seus posts",
  icons: {
    icon: '/blog-writing-svgrepo-com.svg', // /public path
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <body>
        <Provider>
          <CmsNavbar />
          {children}
        </Provider>
      </body>
    </html>
  );
}
