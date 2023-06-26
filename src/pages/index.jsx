import 'tailwindcss/tailwind.css';
import Navbar from '@/components/navbar.jsx';
import Cta from '@/components/cta.jsx';
import Footer from '@/components/footer.jsx';
import Head from 'next/head';

function Home() {
  return (
    <section>
      <Head>
        <link rel="icon" href="/logo-exdecode-bgblue.png" />
        <title>Home</title>
      </Head>
      <div className='bg-gray-900'>


        <Navbar />
        <Cta />

      </div>
      <Footer />


    </section>

  )
}

export default Home;
