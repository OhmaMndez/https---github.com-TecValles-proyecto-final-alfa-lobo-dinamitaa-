<template>
    <div class="flex justify-center select-none">
        <div class="relative w-full" style="width: 100%; height: 800px; overflow: hidden;">
            <div class="absolute bottom-0 left-0 right-0 z-[2] mx-[15%] mb-4 flex list-none justify-center p-0">
                <button v-for="(image, index) in images" :key="index" @click="currentIndex = index"
                    :class="{ 'opacity-100': currentIndex === index, 'opacity-50': currentIndex !== index }"
                    class="mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-zinc-500 bg-clip-padding p-0 -indent-[999px] transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none"></button>
            </div>

            <div v-for="(image, index) in images" :key="index"
                class="flex justify-center items-center relative -mr-[100%] w-full transition-transform duration-[600ms] ease-in-out"
                :style="{ 'backface-visibility': 'hidden', 'display': currentIndex === index ? 'block' : 'none' }">
                <div class="flex justify-center" style="height: 800px; position: relative;">
                    <img :src="image.image" style="width: 100%; height: 100%; object-fit: contain;" />
                    <div class="absolute inset-x-[20%] bottom-[28em] text-center text-white">
                        <div class="carousel-text">
                            <h5 class="text-xl">{{ image.title }}</h5>
                            <p class="text-2xl">{{ image.description }}</p>
                        </div>
                    </div>
                </div>
            </div>

            <button @click="currentIndex > 0 ? currentIndex-- : currentIndex = images.length - 1"
                class="absolute bottom-0 left-0 top-0 z-[1] flex w-[10%] items-center justify-center border-0 bg-none p-0 text-center text-black opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-black hover:no-underline hover:opacity-90 hover:outline-none focus:text-black focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none"
                type="button">
                <span class="inline-block h-8 w-8">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="currentColor" class="h-6 w-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                    </svg>
                </span>
            </button>

            <button @click="currentIndex < images.length - 1 ? currentIndex++ : currentIndex = 0"
                class="absolute bottom-0 right-0 top-0 z-[1] flex w-[10%] items-center justify-center border-0 bg-none p-0 text-center text-black opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-black hover:no-underline hover:opacity-90 hover:outline-none focus:text-black focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none"
                type="button">
                <span class="inline-block h-8 w-8">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="currentColor" class="h-6 w-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                    </svg>
                </span>
            </button>
        </div>
    </div>
</template>
  
<script>
export default {
    props: {
        images: {
            type: Array,
            required: true
        }
    },
    data() {
        return {
            currentIndex: 0
        }
    }
};
</script>
  
<style>
.carousel-text {
    position: absolute;
    width: 100%;
    padding: 1em;
    background-color: rgba(0, 0, 0, 0.5);
    color: white;
    margin-top: 20em;
}
</style>