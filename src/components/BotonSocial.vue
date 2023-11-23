<template>
    <button class="btn"><img :src="getSocial()"></button>
</template>

<script>
import Facebook from '@/assets/Facebook.svg';
import Twitter from '@/assets/Twitter.svg';
import Instagram from '@/assets/Instagram.svg';
import LinkedIn from '@/assets/LinkedIn.svg';

export default {
    name: 'BotonSocial',
    props: ['social'],
    data() {
        return {
            socials: {
                Facebook,
                Twitter,
                Instagram,
                LinkedIn,
            }
        };
    },
    methods: {
        getSocial() {
            return this.socials[this.social];
        }
    },
};
</script>

<style scoped>
button {
    @apply flex justify-center items-center rounded-full w-[40px] h-[40px];
    background-color: #FFFFFF1A;
    transition: 0.5s ease;
}

button:hover {
    background-color: #539407;
}

img {
    @apply w-1/2;
}
</style>
