import { 
  CustomerReviews, 
  Deals, 
  Footer, 
  Hero, 
  Navbar, 
  PopularProducts, 
  Quality, 
  Services, 
  Subscribe 
} from "./pages";
import './App.css'

const App = () => {
  return (
    <>
      <main className="app-main">
        <Navbar />
        <section className="hero-section">
          <Hero />
        </section>
        <section className="popular-products-section">
          <PopularProducts />
        </section>
        <section className="quality-section">
          <Quality />
        </section>
        <section className="services-section">
          <Services />
        </section>
        <section className="deals-section">
          <Deals />
        </section>
        <section className="customer-reviews-section">
          <CustomerReviews />
        </section>
        <section className="subscribe-section">
          <Subscribe />
        </section>
        <section className="footer-section">
          <Footer />
        </section>
      </main>
    </>
  );
};

export default App;