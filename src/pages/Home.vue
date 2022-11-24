<template>
  <main class="grid">
    <section class="container-fluid movies">
      <Card v-for="(item, index) in movies" :key="`card-${index}`">
        <template v-slot:header>
          <h4>{{ item.title }}</h4>
        </template>
        <p>
          <img :src="item.poster_url" :alt="item.title" />
        </p>
        <p><strong>Em: </strong>{{ item.source_name }}</p>
        <p><strong>Tipo: </strong>{{ getType(item.type) }}</p>
        <template v-slot:footer>
          <button @click="showDetails(item.id)">ver detalhes</button>
        </template>
      </Card>
    </section>
  </main>
</template>

<script>
import Card from "@/components/Card.vue";
export default {
  components: { Card },
  props: ["movies"],
  methods: {
    getType(value) {
      switch (value) {
        case "tv_series":
          return "série";
        case "movie":
          return "filme";
        default:
          break;
      }
    },
    showDetails(id) {
      this.$router.push({ path: `/movie/${id}` });
    },
  },
};
</script>

<style scoped>
.movies {
  display: grid;
  grid-template-columns: auto;
  gap: 10px;
}
@media screen and (min-width: 768px) {
  .movies {
    grid-template-columns: 350px 350px;
  }
}

@media screen and (min-width: 992px) {
  .movies {
    grid-template-columns: 350px 350px 350px;
  }
}
</style>
