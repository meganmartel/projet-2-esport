<template>
 
  <Navbar />
  <RouterView />
  <BasPage />
  
</template>

<script>
  import { RouterView } from 'vue-router'
  import Navbar from '../src/components/NavBar.vue'
  import BasPage from '../src/components/BasPage.vue'

  export default {
    components: {
      Navbar,
      BasPage
    },
    provide() {
      return {
        equipes: this.equipes,
        ajouterEquipe: this.ajouterEquipe,
      }
    },
    methods: {
      ajouterEquipe(equipe) {
        this.equipes.push(equipe);
      }
    },
    data() {
      return {
        equipes: [
          {
            idEquipe: '01',
            nom: 'Dranix',
            logo: 'https://static.vecteezy.com/system/resources/previews/023/157/474/original/dragon-logo-esport-team-gaming-free-vector.jpg',
            joueurs: ['Ethan Miller', 'Olivia Chen', 'Liam Rodriguez', 'Mia Patel', 'Jackson Kim', 'Ava William']
          },
        ]
      }
    }
  }
</script>