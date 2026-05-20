import TopBar from '@/components/TopBar';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Vision from '@/components/Vision';
import Manifesto from '@/components/Manifesto';
import Eligibility from '@/components/Eligibility';
import RegistrationForm from '@/components/RegistrationForm';
import Footer from '@/components/Footer';
import CreatorSupport from '@/components/CreatorSupport';
import Gallery from '@/components/Gallery';

export default function Page() {
  return (
    <>
      <TopBar />
      <Navbar />
      <main className="flex-1 overflow-hidden">
        <Hero />
        <div id="about">
          <Vision />
          <Manifesto />
        </div>
        <CreatorSupport />
        <Gallery />
        <div id="join">
          <Eligibility />
          <RegistrationForm />
        </div>
      </main>
      <Footer />
    </>
  );
}
