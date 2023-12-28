<template>
    <div class="container">
        <h2>Les joueurs</h2>
        <hr>
        <div class="joueurs-equipe">
            <div class="equipe">
                <img :src="logo" :alt="nom" />
                <h3>{{ nom }}</h3>
            </div>
            <div class="liste-joueurs">
                <ul>
                    <li v-for="joueur in joueurs" :key="joueur">
                        {{ joueur }}
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        inject: ['equipes'],
        data() {
            return {
                idEquipe: this.$route.params.id,
                nom: "",
                logo: "",
                joueurs: []
            }
        },
        mounted() {
            for (let i = 0; i < this.equipes.length; i++) {
                if (this.equipes[i].idEquipe == this.idEquipe) {
                    this.nom = this.equipes[i].nom
                    this.logo = this.equipes[i].logo
                    this.joueurs = this.equipes[i].joueurs
                    console.log(this.joueurs)
                }
            }
        }
    }
</script>


<style>
    .container {
        width: 95%;
        margin: 0 auto;
        font-family: Arial, Helvetica, sans-serif;
    }

    img {
        width: 400px;
        height: 400px;
    }

    .equipe {
        text-align: center;
        background-color: black;
    }

    .equipe h3 {
        font-size: 40px;
        background-color: black;
        margin: 0 auto;
        color: white;
        padding: 15px;
    }

    .liste-joueurs ul {
        list-style: none;
        font-size: 30px;
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-template-rows: 1fr 1fr 1fr;
        gap: 50px;
        margin-left: 100px;
    }

    .liste-joueurs li {
        background-color: lightgray;
        padding: 15px 20px;
        text-align: center;
        width: 300px;
        border-radius: 5px;
    }

    .joueurs-equipe {
        display: flex;
        align-items: center;
        justify-content: center;
        margin-top: 100px;
        margin-bottom: 100px;
    }

</style>