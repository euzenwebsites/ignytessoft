
import HomeHero from './components/HomeHero'
import NavBarHeader from './components/ui/NavBarHeader'
import ServicesSec from './components/ServicesSec'
import PortfolioSec from './components/PortfolioSec'
import ClientSec from './components/ClientSec'
import PricingSec from './components/PricingSec'
import SocialSec from './components/SocialSec'
import ContactSec from './components/ContactSec'
import Footer from './components/ui/Footer'
import Animation from './components/animations/Animation'



export default function Home() {
    return (
   <main>
    <Animation/>
    <NavBarHeader/>
    <HomeHero/>
    <ServicesSec/>
    <PortfolioSec/>
    <ClientSec/>
    <PricingSec/>
    <SocialSec/>
    <ContactSec/>
    <Footer/>
   </main>
  )
}
