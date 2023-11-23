<template>
    <div class="carta">
        <img :src="imagen" alt="">
        <div class="fondoTexto">
            <p class="funcion">{{ funcion }}</p>
            <p class="nombre">
                {{ nombre }}
            </p>
            <p class="puesto">{{ puesto }}</p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'TarjetaComp',
    props: ['imagen', 'funcion', 'nombre', 'puesto']
}
</script>

<style scoped>
* {
    --fondoTarjeta: #CBEA7B;
    --fondoTexto: #C1EBC3;
}

.carta {
    @apply rounded-t-xl m-5;
    width: 415px;
    height: 498px;
    background-color: var(--fondoTarjeta);
    position: relative;
}

.carta img {
    @apply p-8 pt-3;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center top;
}

.puesto {
    color: #157012;
    font-weight: 600;
}

.fondoTexto {
    @apply rounded-tr-3xl;
    width: 100%;
    height: 30%;
    background-color: var(--fondoTexto);
    padding: 25px;
    position: absolute;
    bottom: 0;
    overflow: auto;
    word-wrap: break-word;
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.nombre {
    @apply text-lg;
    font-weight: bold;
}
</style>
