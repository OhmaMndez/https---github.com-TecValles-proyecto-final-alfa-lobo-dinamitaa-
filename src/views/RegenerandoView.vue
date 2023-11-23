<template>
    <TituloComp texto="Centro de Agricultura Regenerativa de la Huasteca" />
    <div style="height: 60em;">
        <p class="subtitulos m-20 mb-5 text-center">Sobre <b>nosotros</b></p>
        <div class="flex">
            <img src="@/assets/sobre-nos.png" class="m-auto ml-60" style="box-shadow: -4.5em 4.5em 0 green;">
            <div>
                <p class="m-auto mb-20 p-32 pb-0" style="font-size: 2em;">
                    El Centro de Agricultura Regenerativa de la Huasteca es una entidad cooperativa de producción rural
                    mexicana
                    con un
                    enfoque exclusivamente comunitario para regenerar suelos y al mismo tiempo descontaminar tierras y
                    cursos de
                    agua.
                    Creamos sinergia integrando recursos humanos y físicos locales/regionales/internacionales relevantes
                    necesarios para
                    reducir el costo en el medio ambiente, la economía y la salud humana causados por la contaminación en la
                    región.
                    <br>

                </p>
                <BotonComp class="ml-32" texto="Leer Más"></BotonComp>
            </div>
        </div>

        <div>
            <p class="subtitulos">
                Le doy a la gente las <b>herramientas</b> que necesita para...
            </p>

            <CarouselComp
                :images="[{ image: require('@/assets/Logo.jpg'), title: '', description: 'Reducir erosión y el riesgo de derrumbes.' },
                { image: require('@/assets/sobre-nos.png'), title: '', description: 'Regenerar de forma natural el suelo desgastado.' },
                { image: require('@/assets/relleno.png'), title: '', description: 'Disminuir el flujo de contaminantes agrícolas a los ríos.' },]" />

        </div>

        <div style="width: 100%; height: 650px; position: relative;" class="mt-32 mb-32">
            <img src="@/assets/plantita.png" class="absolute"
                style="width: 100%; height: 100%; object-fit: cover; object-position: center 70%;">
            <div class="absolute" style="background-color: rgba(0, 0, 0, 0.3); width: 100%; height: 100%;"></div>
            <p class="absolute text-white"
                style="width: 15em; font-size: 3em; font-weight: 550; margin: 5em; margin-left: 21em;">
                Cuidar el medio ambiente es asegurar nuestro futuro.
            </p>
        </div>


        <div class="mb-72">

            <p class="subtitulos">
                !<b>Descubre</b> quienes somos!
            </p>

            <div class="flex flex-row justify-center">
                <TarjetasComp :imagen="require('@/assets/persona1.png')" :funcion="'Nuestro guía sobre todo lo local'"
                    :nombre="'Armando Méndez Martínez'" :puesto="'Representante Legal'" />
                <TarjetasComp :imagen="require('@/assets/persona2.png')" :funcion="'Defensor de todo lo vegano'"
                    :nombre="'Sofia Mónica Lewis Vega'" :puesto="'Comunicación y Mercadotecnia'" />
                <TarjetasComp :imagen="require('@/assets/persona3.png')" :funcion="'Nuestro vínculo con el mundo vegetal'"
                    :nombre="'Amanda María Dolores Meza'" :puesto="'Investigación y Relaciones Académicas'" />
            </div>


        </div>

        <FooterComp />

    </div>
</template>

<script>
import TituloComp from '@/components/TituloComp.vue';
import BotonComp from '@/components/BotonComp.vue';
import CarouselComp from '@/components/CarouselComp.vue';
import TarjetasComp from '@/components/TarjetasComp.vue';
import FooterComp from '@/components/FooterComp.vue';

export default {
    name: 'RegenerandoView',
    components: { TituloComp, BotonComp, CarouselComp, TarjetasComp, FooterComp }
};
</script>