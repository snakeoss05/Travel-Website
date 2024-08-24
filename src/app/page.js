import Feateurs from "./pages/Home/Services";
import Hero from "./pages/Home/Hero";
import Destinations from "./pages/Home/Destinations";
import Book from "./pages/Home/Book";
import Testimonials from "./pages/Home/Testimonials";
import Logos from "./pages/Home/Logos";
import Subscribe from "./pages/Home/Subscribe";
import Footer from "./pages/Home/Footer";
export default function Home() {
  return (
    <main className="flex flex-col gap-28  ">
      <Hero />
      <Feateurs />
      <Destinations />
      <Book />
      <Testimonials />
      <Logos />
      <Subscribe />
      <Footer />
    </main>
  );
}
