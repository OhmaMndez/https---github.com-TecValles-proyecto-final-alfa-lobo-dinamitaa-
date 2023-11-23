<template>
    <div class="relative w-full flex items-center bg-gray-600 h-35">
        <img src="@/assets/fondoTitle.jpg" class="absolute h-full w-full object-cover object-center">
        <div class="absolute inset-0 bg-black opacity-50"></div>
        <p class="relative text-center m-auto text-white font-montserrat text-6xl font-bold">{{ texto }}</p>
    </div>
</template>

<script>
export default {
    name: 'TitleComp',
    props: ['texto'],
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Montserrat&display=swap');

.font-montserrat {
    font-family: 'Montserrat', sans-serif;
}

.h-35 {
    height: 38em;
}
</style>
