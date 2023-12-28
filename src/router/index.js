import { createRouter, createWebHistory } from "vue-router";
import Accueil from '../components/Accueil.vue'
import Equipes from '../components/Equipes.vue'
import DetailsEquipe from '../components/DetailsEquipe.vue'
import Ajout from '../components/Ajout.vue'
import Erreur from '../components/Erreur.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'accueil',
            component: Accueil
        },
        {
            path: '/equipes',
            name: 'equipes',
            component: Equipes
        },
        {
            path: '/equipe/:id',
            name: 'details-equipe',
            component: DetailsEquipe,
        },
        {
            path: '/ajout',
            name: 'ajout',
            component: Ajout
        },
        {
            path: '/erreur',
            name: 'erreur',
            component: Erreur,
        },
        {
            path: '/:catchAll(.*)',
            component: Erreur,
        }
    ]
})

export default router