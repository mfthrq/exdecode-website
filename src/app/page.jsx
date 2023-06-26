import 'tailwindcss/tailwind.css';
import Navbar from '@/components/navbar.jsx';
import Cta from '@/components/cta.jsx';
import Footer from '@/components/footer.jsx';

function Home() {
  return (
    <section>
      <div className='bg-gray-900'>

        <Navbar />
        <Cta />

      </div>
      <Footer />
      

    </section>

  )
}

export default Home;
