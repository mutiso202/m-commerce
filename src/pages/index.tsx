
import Navbar from '@/components/Navbar'
import Products from '@/components/ProductImage'
import Hero from '@/components/Hero'
import MostDemandedProducts from '@/components/MostPopularProducts'
import Footer from '@/components/Footer'
import SubscriptionPrompt from '@/components/SubscriptionPrompt'
import Testimonials from '@/components/Testimonials'
import OurTeam from '@/components/OurTeam'
import Header from '@/components/Header'



export default function Home() {
  return (
    <>

<Hero />
<MostDemandedProducts/>
<Header/>
<Testimonials/>
<OurTeam/>
<SubscriptionPrompt/>


    </>
  )
}
