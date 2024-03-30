import Footer from "@/component/Footer/Footer";
import Header from "@/component/Header/Header";
import InnerSection from "@/component/InnerSession/InnerSession";
import SecondSection from "@/component/SecondSection/SecondSection";
import ThirdSection from "@/component/ThirdSection/ThirdSection";
import UpperSection from "@/component/UpperSection/UpperSection";

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
