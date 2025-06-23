
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
<<<<<<< HEAD
/* import { BrowserRouter, Routes, Route } from "react-router-dom"; */
import { HashRouter as Router, Routes, Route } from "react-router-dom";
=======
import { BrowserRouter, Routes, Route, HashRouter } from "react-router-dom";
>>>>>>> acc961cbb6b97eb8f668219e64727fca610c728c
import { ThemeProvider } from "./components/ThemeProvider";
import { QuoteProvider } from "./contexts/QuoteContext";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Catalog from "./pages/Catalog";
import About from "./pages/About";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider defaultTheme="system" storageKey="dmac-ui-theme">
      <QuoteProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
<<<<<<< HEAD
          <Router>
=======
          {/* Usar HashRouter para compatibilidad con GitHub Pages */}
          {/* Alternativamente, se podría configurar el basename en BrowserRouter si se prefiere no usar hash routing:
          <BrowserRouter basename={import.meta.env.PROD ? "/renta-facil-tools/" : "/"}> */}
          <HashRouter>
>>>>>>> acc961cbb6b97eb8f668219e64727fca610c728c
            <div className="min-h-screen flex flex-col bg-background text-foreground">
              <Header />
              <main className="flex-grow">
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/catalogo" element={<Catalog />} />
                  <Route path="/sobre-nosotros" element={<About />} />
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </main>
              <Footer />
            </div>
<<<<<<< HEAD
          </Router>
=======
          </HashRouter>
>>>>>>> acc961cbb6b97eb8f668219e64727fca610c728c
        </TooltipProvider>
      </QuoteProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
