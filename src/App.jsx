import { CustomerReviews, Deals, Footer, Hero, Navbar, PopularProducts, Quality, Services, Subscribe } from "./pages";
import './App.css'

const App = () => {
  return <>
    <main className="">
      <Navbar />
      <section className=" ">
        <Hero />
      </section>
      <section className="">
        <PopularProducts />
      </section>
      <section className="">
        <Quality />
      </section>
      <section className="">
        <Services />
      </section>
      <section className="">
        <Deals />
      </section>
      <section className="">
        <CustomerReviews />
      </section>
      <section className="">
        <Subscribe />
      </section>
      <section className="">
        <Footer />
      </section>
    </main>
  </>
}

export default App;