import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Products from "@/components/Products";
import BrandStory from "@/components/BrandStory";
import Target from "@/components/Target";
import Reviews from "@/components/Reviews";
import FAQ from "@/components/FAQ";
import Purchase from "@/components/Purchase";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Products />
        <BrandStory />
        <Target />
        <Reviews />
        <FAQ />
        <Purchase />
      </main>
      <Footer />
    </>
  );
}
