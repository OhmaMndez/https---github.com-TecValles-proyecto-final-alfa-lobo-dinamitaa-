<template>
  <nav class="flex flex-row m-4">
    <div class="carh-text">
      <router-link to="/" class="text-wrapper flex flex-row">
        <img src="./assets/Logo.jpg" class="h-full">
        <p class="m-auto mt-2 ml-3">CARH</p>
      </router-link>
    </div>

    <div class="flex flex-row text-center m-auto mr-5">
      <router-link class="rlink" to="/">Regenerando</router-link>

      <div @mouseover="showCompania = true" @mouseleave="showCompania = false">
        <router-link class="rlink" to="/sobre-nosotros">Compañia <span class="arrow">&#9662;</span></router-link>
        <div v-if="showCompania" class="flex flex-col absolute pl-5 pr-5 ml-2"
          style="z-index: 2; background-color: rgba(145, 145, 145, 0.451);">
          <router-link class="rlinkH" to="/sobre-nosotros">Sobre Nosotros</router-link>
          <router-link class="rlinkH" to="/mision-vision">Mision y Vision</router-link>
        </div>
      </div>

      <div @mouseover="showProyectos = true" @mouseleave="showProyectos = false">
        <router-link class="rlink" to="/desarrollando">Proyectos <span class="arrow">&#9662;</span></router-link>
        <div v-if="showProyectos" class="flex flex-col absolute pl-5 pr-5 ml-2"
          style="z-index: 2; background-color: rgba(145, 145, 145, 0.451);">
          <router-link class="rlinkH" to="/desarrollando">Desarrollando</router-link>
          <router-link class="rlinkH" to="/cuidando">Cuidando</router-link>
          <router-link class="rlinkH" to="/descubriendo">Descubriendo</router-link>
        </div>
      </div>

      <router-link class="rlink" to="/conociendonos">Conociendonos</router-link>

      <router-link class="rlink" to="/contacto">Contacto</router-link>

      <div @mouseover="showIdioma = true" @mouseleave="showIdioma = false">
        <router-link class="rlink" to="/desarrollando">Español <span class="arrow">&#9662;</span></router-link>
        <div v-if="showIdioma" class="flex flex-col absolute pl-5 pr-5 ml-2"
          style="z-index: 2; background-color: rgba(145, 145, 145, 0.451);">
          <router-link class="rlinkH" to="/">Español</router-link>
          <router-link class="rlinkH" to="/">Inglés</router-link>
        </div>
      </div>

    </div>

  </nav>

  <router-view />
</template>

<script>
export default {
  data() {
    return {
      showCompania: false,
      showProyectos: false,
      showIdioma: false,
    };
  }
};
</script>