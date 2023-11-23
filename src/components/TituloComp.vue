<template>
    <div class="relative flex items-center">
        <img src="@/assets/fondoTitulo.png" class="absolute">
        <p class="absolute text-white">{{ texto }}</p>
    </div>
</template>

<script>
export default {
    name: 'TituloComp',

    props: ['texto'],
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Montserrat&display=swap');

div {
    @apply bg-gray-600;
    height: 60em;
}

img {
    @apply h-full w-full;
    z-index: 1;
}

p {
    @apply pl-40;
    font-family: 'Montserrat', sans-serif;
    width: 10em;
    font-size: 5em;
    font-weight: 700;
    z-index: 1;
}
</style>
