<template>
    <nav class="navbar">
        <div class="header">
            <div>
                <h1 class="logo">eSport</h1>
            </div>

            <ul class="menu">
                <li>
                    <RouterLink to="/">Accueil</RouterLink>
                </li>
                <li>
                    <RouterLink to="/equipes">Équipes</RouterLink>
                </li>
            </ul>
        </div>
    </nav>
</template>

<script>
    import { RouterLink } from 'vue-router';
</script>

<style>
    .navbar {
        background-color: black;
        color: white;
        font-family: Arial, Helvetica, sans-serif;
    }

    .header{
        width: 95%;
        margin: 0 auto;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 15px;
    }

    .logo {
        font-size: 40px;
        font-weight: bold;
        margin: 0
    }

    .menu {
        display: flex;
        font-size: 18px;
    }

    .menu a {
        text-decoration: none;
        color: white;
    }

    .menu li {
        list-style: none;
        padding-left: 30px;
    }

    .menu li:hover {
        text-decoration: underline;
    }

.menu a.router-link-exact-active {
    text-decoration: underline;
    
}

</style>