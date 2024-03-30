import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import InnerSection from "@/components/InnerSession/InnerSession";
import SecondSection from "@/components/SecondSection/SecondSection";
import ThirdSection from "@/components/ThirdSection/ThirdSection";
import UpperSection from "@/components/UpperSection/UpperSection";


export default function Home() {
  return (
    <div className="w-full">
      <Header />

      <main>
        <UpperSection />
        <InnerSection />
        <SecondSection />
        <ThirdSection />
      </main>
      <Footer />
    </div>
  );
}
