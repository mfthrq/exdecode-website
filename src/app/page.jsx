import 'tailwindcss/tailwind.css';
import Navbar from '../components/navbar.jsx';
import Cta from '../components/cta.jsx';

function Home() {
  return (
    <section>
      <div className='bg-gray-900'>

        <Navbar />
        <Cta />

      </div>
      

    </section>

  )
}

export default Home;
