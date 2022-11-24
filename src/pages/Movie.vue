<template>
  <Card>
    <template v-slot:header>
      <h4>{{ movie.title }}</h4>
    </template>
    <p>
      <img :src="movie.poster_url" :alt="movie.title" />
    </p>
    <p><strong>Temporada: </strong>{{ movie.season_number }}</p>
    <p><strong>Disponível em: </strong>{{ movie.source_name }}</p>
    <p><strong>Tipo: </strong>{{ getType(movie.type) }}</p>
    <p><strong>Lançamento: </strong>{{ movie.source_release_date | formatDate }}</p>
    <template v-slot:footer>
      <div role="button" @click="goBack()">voltar</div>
    </template>
  </Card>
</template>

<script>
import Card from "@/components/Card.vue";
export default {
  name: "Movie",
  props: ["movies"],
  components: { Card },
  computed: {
    movie() {
      return this.movies.filter(
        (movie) => movie.id == this.$route.params.id
      )[0];
    },
  },
  methods: {
    getType(value) {
      switch (value) {
        case "tv_series":
          return "Série";
        case "movie":
          return "Filme";
        default:
          break;
      }

      return null;
    },
    goBack() {
      return this.$router.push({ path: "/" });
    },
  },
};
</script>

<style></style>
