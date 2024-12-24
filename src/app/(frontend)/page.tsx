import { AboutUs } from "./_components/about-us";
import { ExtraFeatures } from "./_components/extra-features";
import { FeaturedProduct } from "./_components/featured-product";
import { Features } from "./_components/features";
import { Hero } from "./_components/hero";
import { Products } from "./_components/products";
import { UseCases } from "./_components/use-cases";

export default function Homepage() {
  return (
    <main>
      <Hero />
      <AboutUs />
      <Features />
      <ExtraFeatures />
      <FeaturedProduct />
      <Products />
      <UseCases />
    </main>
  );
}
