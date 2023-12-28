<template>
    <div class="banner-container">
        <img class="banner" src="../assets/banner.jpg" alt="banner">
        <div class="text-overlay">
            <h1>Ligue eSport</h1>
            <h2>Le jeu par excellence</h2>
        </div>
    </div>
    <div class="flex-colonnes">
        <div class="colonnes">
            <h3>Fortnite</h3>
            <img src="../assets/fortnite.jpg" alt="fortnite">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt dicta impedit pariatur fugit quis dolorum sequi, repellendus natus harum voluptatem laboriosam magnam doloribus quasi id nobis est nihil provident aliquam!</p>
        </div>
        <div class="colonnes">
            <h3>Call Of Duty</h3>
            <img src="../assets/cod.jpg" alt="cod">
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde fugiat necessitatibus deserunt, reiciendis facere, quidem alias sed accusantium blanditiis a placeat illum officiis sint suscipit ea quod ex incidunt est.</p>
        </div>
        <div class="colonnes">
            <h3>The Legend of Zelda</h3>
            <img src="../assets/zelda.jpg" alt="zelda">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque asperiores saepe unde nihil ipsam enim, molestias pariatur laboriosam sed cupiditate aut exercitationem qui rem, facere aspernatur molestiae, nisi veniam. Nostrum!</p>
        </div>
        <div class="colonnes">
            <h3>Assassin's Creed</h3>
            <img src="../assets/assasinscreed.jpg" alt="assassinscreed">
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui et iusto eos ipsam optio accusamus totam architecto ratione illum nesciunt. Unde tenetur sint accusantium quia quidem atque, dolores suscipit quae!</p>
        </div>
    </div>

</template>

<script>

</script>



<style>
.banner-container {
    overflow: hidden;
    position: relative;
}

.banner {
    width: 100%;
    height: auto;
    margin: 0;
}

.text-overlay {
    position: absolute;
    top: 70%;
    left: 2%;
    text-align: left;
    color: white;
    font-family: Arial, Helvetica, sans-serif;
    font-weight: bold;
}

.text-overlay h1 {
    font-size: 100px;
    margin-bottom: 10px;
}

.text-overlay h2 {
    font-size: 60px;
    margin: 0;
}

.flex-colonnes {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    margin: 0 auto;
    gap: 50px;
    width: 70%;
    text-align: center;
    margin-top: 100px;
    margin-bottom: 100px;
}

.colonnes {
    color: white;
    font-family: Arial, Helvetica, sans-serif;
    width: 100%;
}

.colonnes h3 {
    font-size: 32px;
    background-color: black;
    padding: 15px;
    margin: 0;
}

.colonnes p {
    background-color: black;
    padding: 30px 70px;
    margin: 0;
    font-size: 20px;
}

.colonnes img {
    width: 100%;
    height: auto;
    display: block;
    margin: auto;
}

</style>