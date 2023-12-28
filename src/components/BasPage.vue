<template>
    <div class="footer-bg">
        <div class="footer">
            <div class="col-1">
                <p>Megan Martel</p>
            </div>
            <div class="col-2">
                <p>Cégep de Trois-Rivières</p>
                <p class="cours">Intégration d'interface utilisateur - 2023</p>
            </div>
        </div>
    </div>
</template>

<style>
    .footer-bg {
        background-color: black;
    }

    .footer {
        display: flex;
        justify-content: space-between;
        clear: both;
        margin: 0 auto;
        color: white;
        font-family: Arial, Helvetica, sans-serif;
        width: 95%;
    }

    .col-2 {
        display: flex;
    }

    .cours {
        margin-left: 30px;
    }
</style>