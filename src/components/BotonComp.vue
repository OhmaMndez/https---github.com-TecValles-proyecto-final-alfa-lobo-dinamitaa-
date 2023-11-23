<template>
    <button>
        {{ texto }}
    </button>
</template>

<script>
export default {
    name: 'BotonComp',
    props: ['texto'],
};
</script>

<style scoped>
button {
    @apply text-white bg-green-700 p-5;
    font-family: 'Poppins', sans-serif;
    border-radius: 2em;
    width: 10em;
    font-size: 1.5em;
    transition: 0.5s ease;
}

button:hover {
    @apply bg-green-600;
}
</style>