import {
  Hero,
  Customer,
  Footer,
  PopularProduct,
  Services,
  Subscribe,
  SuperQulity,
  SpecialOffer,
} from "./Section/Index";

import Nav from "./Components/Nav";

const App = () => {
  return (
    <main className="relative">
      <Nav />
      <section className="xl:padding-1 wide:padding-l padding-b">
        <Hero />
      </section>
      <section className="padding">
        <PopularProduct />
      </section>
      <section className="padding">
        <SuperQulity />
      </section>
      <section className="padding -x py-10">
        <Services />
      </section>
      <section className="padding">
        <SpecialOffer />
      </section>
      <section className="bg-pale-blue padding">
        <Customer />
      </section>
      <section className="padding-x sm:py-32 py-16 w-full">
        <Subscribe />
      </section>
      <section className="bg-black padding-x padding-t pb-8">
        <Footer />
      </section>
    </main>
  );
};

export default App;
