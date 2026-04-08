import WelcomeCard from '../../components/cards/WelcomeCard'
import './HomePage.css'

function HomePage() {
  return (
    <main className="home-page">
      <section className="home-page__stage">
        <WelcomeCard />
      </section>
    </main>
  )
}

export default HomePage
