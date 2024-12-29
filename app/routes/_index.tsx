import { type MetaFunction } from "@remix-run/node";
import Header from "~/components/header";
import Hero from "~/components/hero";
import FeatureCards from "~/components/feature-cards";
import Footer from "~/components/footer";

export const meta: MetaFunction = () => {
  return [
    { title: "Paul Mothapo - Engineer" },
    { name: "description", content: "Expirienced software engineer specializing in building scalable and efficient solutions." },
    { name: "og:title", content: "Paul Mothapo - Engineer" },
    { name: "og:description", content: "Expirienced software engineer specializing in building scalable and efficient solutions." },
    { name: "og:type", content: "website" },
  ];
};

export default function Index() {
  return (
    <div className="min-h-screen max-w-7xl mx-auto">
      <Header/>
      <Hero/>
      <FeatureCards />
      <Footer/>
    </div>
  );
}
