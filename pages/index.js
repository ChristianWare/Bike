import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Layout from "../Layout/Layout";

export default function Home() {
  return (
    <Layout>
      <Navbar />
      <Hero />
    </Layout>
  );
}
