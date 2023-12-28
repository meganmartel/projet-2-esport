<template>
    <div class="container">
        <div class="titre-bouton">
            <h2>Nos équipes</h2>
            <router-link to="/ajout">
                <button class="bouton-ajout">Ajouter une équipe</button>
            </router-link>    
        </div>
        <hr>
        <ul class="equipes">
            <li v-for="equipe in equipes" :key="equipe.idEquipe">
                <router-link :to="{ name: 'details-equipe', params: { id: equipe.idEquipe } }" :key="equipe.idEquipe" class="router-link">
                    <img :src="equipe.logo" :alt="equipe.nom" />
                    <h3> {{ equipe.nom }} </h3>
                </router-link>
            </li>
        </ul>
    </div>  

</template>

<script>
export default {
    inject: ['equipes'],
};
</script>


<style>

.container {
    width: 95%;
    margin: 0 auto;
}

h2 {
    font-family: Arial, Helvetica, sans-serif;
    font-size: 48px;
    margin-top: 50px;
}

.titre-bouton {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.bouton-ajout {
    background-color: black;
    color: white;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 20px;
    padding: 10px;
    border-radius: 10px;
    cursor: pointer;
}

hr {
    border: 2px solid black;
}

.equipes {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 50px 20px;
    margin: 100px auto;
    padding-left: 0;
    width: 70%;
}

.equipes li {
    list-style: none;
    display: flex;
    flex-direction: column;
    text-align: center;
}

.equipes img {
    width: 400px;
    height: 400px;
}

.router-link h3 {
    font-size: 32px;
    font-family: Arial, Helvetica, sans-serif;
    margin-bottom: 0;
    margin-top: 15px;
    color: black;
}

.router-link {
    text-decoration: none;
}


</style>