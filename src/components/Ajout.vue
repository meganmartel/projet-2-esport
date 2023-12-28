<template>
    <div class="container">
        <h2>Ajouter une équipe</h2>
        <hr>
        <form @submit="ajouterEquipe">
            <p class="form-valide" v-if="formValide">Formulaire valide</p>
            <fieldset>
                <legend>Informations de l'équipe</legend>
                <div class="infos">
                    <div class="groupe">
                        <label for="idEquipe">Entrez l'id de l'équipe</label>
                        <input type="text" v-model="nouvelleEquipe.idEquipe">
                        <span v-if="erreurs.idEquipe" class="error-message">Veuillez entrer l'id de l'équipe.</span>
                    </div>
                    <div class="groupe">
                        <label for="nom">Entrez le nom de l'équipe</label>
                        <input type="text" v-model="nouvelleEquipe.nom">
                        <span v-if="erreurs.nom" class="error-message">Veuillez entrer le nom de l'équipe.</span>
                    </div>
                    <div class="groupe">
                        <label for="logo">Entrez le logo de l'équipe</label>
                        <input type="text" v-model="nouvelleEquipe.logo">
                        <span v-if="erreurs.logo" class="error-message">Veuillez entrer le lien du logo.</span>
                    </div>
                </div>
                <legend>Liste des joueurs</legend>
                    <div class="joueurs">
                        <div class="groupe">
                            <label for="joueurs">Entrez le nom du joueur 1</label>
                            <input type="text" v-model="nouvelleEquipe.joueurs[0]">
                            <span v-if="erreurs.joueurs[0]" class="error-message">Veuillez entrer le nom du joueur 1.</span>
                        </div>
                        <div class="groupe">
                            <label for="joueurs">Entrez le nom du joueur 2</label>
                            <input type="text" v-model="nouvelleEquipe.joueurs[1]">
                            <span v-if="erreurs.joueurs[1]" class="error-message">Veuillez entrer le nom du joueur 2.</span>
                        </div>
                        <div class="groupe">
                            <label for="joueurs">Entrez le nom du joueur 3</label>
                            <input type="text" v-model="nouvelleEquipe.joueurs[2]">
                            <span v-if="erreurs.joueurs[2]" class="error-message">Veuillez entrer le nom du joueur 3.</span>
                        </div>
                        <div class="groupe">
                            <label for="joueurs">Entrez le nom du joueur 4</label>
                            <input type="text" v-model="nouvelleEquipe.joueurs[3]">
                            <span v-if="erreurs.joueurs[3]" class="error-message">Veuillez entrer le nom du joueur 4.</span>
                        </div>
                        <div class="groupe">
                            <label for="joueurs">Entrez le nom du joueur 5</label>
                            <input type="text" v-model="nouvelleEquipe.joueurs[4]">
                            <span v-if="erreurs.joueurs[4]" class="error-message">Veuillez entrer le nom du joueur 5.</span>
                        </div>
                        <div class="groupe">
                            <label for="joueurs">Entrez le nom du joueur 6</label>
                            <input type="text" v-model="nouvelleEquipe.joueurs[5]">
                            <span v-if="erreurs.joueurs[5]" class="error-message">Veuillez entrer le nom du joueur 6.</span>
                        </div>
                    </div>
                <button type="submit">Ajouter l'équipe</button>
            </fieldset>
        </form>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                nouvelleEquipe: {
                    idEquipe:null,
                    nom:"",
                    logo:"",
                    joueurs:["", "", "", "", "", ""],
                },
                erreurs: {
                    idEquipe: false,
                    nom: false,
                    logo: false,
                    joueurs: [false, false, false, false, false, false],
                },
                formValide: false,
            }
        },
        methods: {
            ajouterEquipe(e) {
                e.preventDefault()

                this.resetErreurs();

                let valide = true

                if(this.nouvelleEquipe.idEquipe === null) {
                    this.erreurs.idEquipe = true
                    valide = false
                }

                if(this.nouvelleEquipe.nom === "") {
                    this.erreurs.nom = true
                    valide = false
                }

                if(this.nouvelleEquipe.logo === "") {
                    this.erreurs.logo = true
                    valide = false
                }

                if(this.nouvelleEquipe.joueurs[0] === "") {
                    this.erreurs.joueurs[0] = true
                    valide = false
                }

                if(this.nouvelleEquipe.joueurs[1] === "") {
                    this.erreurs.joueurs[1] = true
                    valide = false
                }

                if(this.nouvelleEquipe.joueurs[2] === "") {
                    this.erreurs.joueurs[2] = true
                    valide = false
                }

                if(this.nouvelleEquipe.joueurs[3] === "") {
                    this.erreurs.joueurs[3] = true
                    valide = false
                }

                if(this.nouvelleEquipe.joueurs[4] === "") {
                    this.erreurs.joueurs[4] = true
                    valide = false
                }

                if(this.nouvelleEquipe.joueurs[5] === "") {
                    this.erreurs.joueurs[5] = true
                    valide = false
                }
                
                if (!valide) {
                    this.formValide = false;
                    return;
                }
                
                this.formValide = true;
                this.ajouterDansTableau();
            },
            resetErreurs() {
                this.erreurs.idEquipe = false
                this.erreurs.nom = false
                this.erreurs.logo = false
                this.erreurs.joueurs[0] = false
                this.erreurs.joueurs[1] = false
                this.erreurs.joueurs[2] = false
                this.erreurs.joueurs[3] = false
                this.erreurs.joueurs[4] = false
                this.erreurs.joueurs[5] = false
            },
            ajouterDansTableau() {
                this.$root.ajouterEquipe(this.nouvelleEquipe);

                this.$router.push('/equipes');
            }
        },
    }
    
</script>

<style>

.container {
    width: 95%;
    margin: 0 auto;
}

form {
    font-family: Arial, Helvetica, sans-serif;
    width: 50%;
    margin: 100px auto 100px auto;
    background-color: lightgrey;
    border-radius: 5px;
    padding: 50px;
    text-align: center;
}

fieldset {
    border: none;
}

legend {
    font-size: 32px;
    font-family: Arial, Helvetica, sans-serif;
    text-align: center;
}

label {
    font-size: 22px;
}

input {
    font-size: 18px;
    padding: 5px;
}

.infos {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr;
}

.joueurs {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr;
}

.groupe {
    display: flex;
    flex-direction: column;
    padding: 20px;
}

.error-message {
    color: red;
}

button {
    font-size: 20px;
    padding: 10px;
    border-radius: 5px;
    margin-top: 15px;
    cursor: pointer;
    background-color: black;
    color: white;
}

</style>