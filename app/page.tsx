import Banner from './components/Banner/index';
import Companies from './components/Companies/index';
import Work from './components/Work/index';
import Token from './components/Token/index';
import Table from './components/Table/index';
import Features from './components/Features/index';
import History from './components/Histroy';
import Simple from './components/Simple/index';
import MeetTheTeam from './components/Team/index';
import Trade from './components/Trade/index';
import Faq from './components/Faq/index';


export default function Home() {
  return (
    <main>
      <Banner />
      <Companies />
      <Work />
      <Features />
      <Token />
      <Trade />
      <Table />
      <History />
      <Simple />
      <MeetTheTeam />
      <Faq />
    </main>
  )
}
