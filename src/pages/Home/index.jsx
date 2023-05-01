import React from 'react'
import Accueil from '../../components/Accueil'
import Biographie from '../../components/Biographie'
import Slogan from '../../components/Slogan'
import Avis from '../../components/Avis'

function Home() {
  return (
    <React.Fragment>
      <Accueil />
      <Biographie />
      <Slogan />
      <Avis />
    </React.Fragment>
  )
}

export default Home
