import Cities from 'components/landingPage/Cities/Cities'
import Explore from 'components/landingPage/Explore/Explore'
import Hero from 'components/landingPage/Hero/Hero'
import Layout from 'components/landingPage/Layout/Layout'


const IndexPage = () => (
  <Layout title="Travel_Table | Adventure awaits with us">
    <Hero />
    <Explore />
    <Cities />
  </Layout>
) 

export default IndexPage



