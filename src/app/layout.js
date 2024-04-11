import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Provider from "./Provider";
import NavBar from "./components/NavBar";
import SearchBox from "./components/SearchBox";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Phim Moi Da Den",
  description: "See the summaries of your favorite movies here",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <link rel="icon" href="/favicon.ico" sizes="any" />
      <body className={inter.className}>
        <Provider>
          <Header/>
          <NavBar/>
          <SearchBox/>
          {children}
        </Provider>
      </body>
    </html>
  );
}
