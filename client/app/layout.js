import NavBar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer"
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="/css/bootstrap.min.css"/>
      </head>

      <body>
      <script src="/js/bootstrap.bundle.min.js" defer></script>
        <div className="container-fluid">
          <NavBar/>
          {children}
          </div>
        <Footer/>
      </body>
    </html>
  );
}