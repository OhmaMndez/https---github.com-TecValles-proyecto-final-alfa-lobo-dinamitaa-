<template>
    <TitleComp texto="Sobre nosotros" />

    <div>
        <p style="margin-bottom: 8rem;" class="subtitulos"><b>Historia</b> del proyecto</p>
        <div class="flex flex-row">
            <img src="@/assets/granjero.jpg" class="m-auto ml-60 w-3/12 h-3/12" style="box-shadow: -4.5em -2.5em 0 green;">
            <div class="m-auto  w-1/2">
                <p style="font-size: 2em;">
                    Los fundadores del Centro de Agricultura Regenerativa de la Huasteca tienen raíces
                    en Ejido El Chino que se remonta a más de 50 años. Han sido testigos de cambios dramáticos
                    a medida que la región pasó de un clima tropical húmedo a un clima tropical semiárido.
                    La adopción de un monocultivo de caña de azúcar trajo consigo una deforestación generalizada, erosión
                    y contaminación que plantean desafíos directos a la calidad de vida en la región.
                </p>
            </div>
        </div>
    </div>

    <div class="mt-16 mb-32">
        <p class="p-20" style="font-size: 2em;">
            A partir de hace más de tres décadas, los miembros del equipo comenzaron
            un ambicioso proyecto de preservación forestal en el área, que ahora conserva
            aproximadamente 600 hectáreas de bosque. La presidenta de la junta directiva del
            centro es una mujer nacida y criada en la región, que cofundó varias iniciativas de apoyo
            comunitario en algunas de las áreas más empobrecidas de nuestro estado.
        </p>
    </div>

    <div>
        <p style="margin-bottom: 8rem;" class="subtitulos"><b>Historia</b> del proyecto</p>
        <div class="flex flex-row">
            <div class="m-auto ml-32 w-1/2">
                <p style="font-size: 2em;">
                    El centro existente se puso en marcha en 2021 con el generoso apoyo de Terra Advocati, una organización
                    sin fines de lucro con sede en Texas que apoya una amplia gama de proyectos, incluida la preservación
                    del medio ambiente.
                    La financiación inicial generosamente proporcionada por Terra Advocati cubrió una parte sustancial de
                    los costos de construcción.
                    Además, las contribuciones de talento, tiempo y fondos privados de generosos donantes dedicados a la
                    preservación
                    del medio ambiente permitieron poner en marcha los proyectos que ahora se están implementando en el
                    centro.

                </p>
            </div>
            <img src="@/assets/fondoSurcos.jpg" class="m-auto mr-60 w-3/12 h-[550px]"
                style="box-shadow: 3.5em -3.5em 0 green;">
        </div>
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

    <div>
        <p class="subtitulos">
            Estructura <b>organizativa</b>
        </p>
        <p class="mt-10 p-20" style="font-size: 2em;">
            El Centro de Agricultura Regenerativa de la Huasteca es una corporación cooperativa de producción rural
            legalmente constituida de acuerdo con la normatividad mexicana correspondiente. La junta directiva está
            conformada por cuatro ciudadanos mexicanos originarios de Ejido El Chino. La presidenta del consejo, María
            Guadalupe Vega Mendoza, ha trabajado en proyectos de preservación ambiental y desarrollo comunitario en la
            Huasteca durante décadas. El centro cuenta con el apoyo de colaboradores internacionales que comprometen sus
            habilidades y recursos para que sea un éxito.
        </p>
    </div>

    <FooterComp />
</template>

<script>
import FooterComp from '@/components/FooterComp.vue';
import TitleComp from '@/components/TitleComp.vue';



export default {
    name: 'SobreNos',
    components: { TitleComp, FooterComp }
};
</script>