<template>
    <div class="footer mt-32">

        <div class="watermark">
            <img src="@/assets/hoja.svg">
            <p>Centro de Agricultura Regenerativa de la Huasteca</p>
        </div>

        <div class="info">

            <div style="margin-left: 0;" class="telDiv">
                <img src="@/assets/iconotel.svg">
                <p>(+52) 481-139-0962 </p>
            </div>

            <div class="division"></div>


            <div style="margin-left: 2rem;" class="ubiDiv">
                <img src="@/assets/iconoubi.svg">
                <p>Avenida Damián Carmona S/N
                    El Chino, San Luis Potosí 79721
                </p>
            </div>

            <div class="division"></div>

            <div class="emailDiv">
                <img src="@/assets/iconoemail.svg">
                <p>agregenhuasteca@gmail.com</p>
            </div>

        </div>

        <div class="flex flex-row m-auto mt-32">

            <div class="contInf">
                <p class="titulo">Regenerando</p>
                <div class="linea"></div>
                <p style="margin-left: 0;" class="subtext">
                    The Centro de Agricultura Regenerativa de la Huasteca is a Mexican cooperative rural.
                </p>

                <div class="redes flex flex-row w-10/12">
                    <BotonSocial class="m-auto ml-0" social="Facebook" />
                    <BotonSocial class="m-auto" social="Twitter" />
                    <BotonSocial class="m-auto" social="Instagram" />
                    <BotonSocial class="m-auto" social="LinkedIn" />
                </div>
            </div>

            <div class="contInf">
                <p class="titulo">Compañía</p>
                <div class="linea"></div>
                <div class="subtext">
                    <ul>
                        <li>Historia del proyecto</li>
                        <li>Estructura organizativa</li>
                        <li>Misión</li>
                        <li>Visión</li>
                    </ul>
                </div>
            </div>

            <div class="contInf">
                <p class="titulo">Proyectos</p>
                <div class="linea"></div>
                <div class="subtext">
                    <ul>
                        <li>Desarrollando</li>
                        <li>Descubriendo</li>
                        <li>Cuidando</li>
                    </ul>
                </div>
            </div>

            <div class="contInf">
                <p class="titulo">Conociéndonos</p>
                <div class="linea"></div>
                <div class="subtext">
                    <ul>
                        <li>Contacto</li>
                    </ul>
                    ¿Eres colaborador?
                    <br>
                    <router-link to="/login" class="hover:underline">Ingresa aquí</router-link>
                </div>
            </div>

        </div>

        <div style="border-color: rgba(255, 255, 255, 0.20);" class="absolute border-b-[2px] w-3/4 ml-52 mb-10"></div>
        <p style="color: rgba(255, 255, 255, 0.70);" class="absolute w-full text-center mb-2">Noviembre 2023</p>

    </div>
</template>

<script>
import BotonSocial from './BotonSocial.vue';

export default {
    name: 'FooterComp',
    components: { BotonSocial }
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Rubik:wght@300&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Jost:wght@700&display=swap');

* {
    font-family: 'Rubik', sans-serif;
}

.footer {
    @apply flex flex-row relative w-full items-end;
    height: 50vh;
    background-color: #0F4229F2;
}

.watermark {
    @apply flex flex-row absolute rounded-2xl p-[24px] top-0 left-24 transform -translate-y-1/2 w-[300px] h-[150px] bg-lime-600 text-white;
    box-shadow: -5px 5px 10px rgb(0, 0, 0, 0.2);
}

.watermark img {
    @apply w-1/4;
}

.watermark p {
    @apply text-center m-auto ml-2 text-lg;
}

.info {
    @apply flex flex-row justify-start absolute rounded-2xl top-0 right-48 transform -translate-y-1/2 w-[1100px] h-[150px];
    background-color: #C1EBC3;
    box-shadow: -5px 5px 10px rgb(0, 0, 0, 0.2);

}

.division {
    @apply border-r-[2px] h-3/5 m-auto mr-0 ml-0 w-0;
    border-color: #539407;
}

.telDiv,
.ubiDiv,
.emailDiv {
    @apply flex justify-center ml-6 mr-6 border-none w-full h-[150px];

}

.info img {
    @apply h-auto w-[40px] m-auto ml-0 mr-0;
}

.info p {
    @apply m-auto ml-3 mr-0 text-lg;

}

.contInf {
    @apply w-[250px] h-auto m-4 text-white;
}

.titulo {
    @apply text-xl mb-2;
    font-family: 'Josh', sans-serif;
}

.linea {
    @apply border-b-[3px] w-[20px] mb-4;
    border-color: rgb(81, 146, 7);
}

.subtext {
    @apply ml-5 mb-10 text-base;
}

ul {
    list-style-type: disc;

}

li {
    @apply mb-5;
}
</style>