<template>
<main class="grid">
  <section class="container-fluid movies">
    <Card
      v-for="(item, index) in releases"
      :key="`card-${index}`"
      >
      <template v-slot:header>
        <h4>{{ item.title }}</h4>
      </template>
      <p>
        <img
          :src="item.poster_url" 
          :alt="item.title"  
        />
      </p>  
      <p>
        <strong>Em: </strong>{{ item.source_name }}
      </p>
      <p>
        <strong>Tipo: </strong>{{ getType(item.type) }}
      </p>
      <template v-slot:footer>
        <button>ver detalhes</button>
      </template>  
    </Card>  
  </section>
</main>  
</template>

<script>
import Card from '@/components/Card.vue'
export default {
  components: { Card },
  data() {
    return {
      releases: [
        {
          "id": 3165490,
          "title": "Slow Horses",
          "type": "tv_series",
          "tmdb_id": 95480,
          "tmdb_type": "tv",
          "imdb_id": "tt5875444",
          "season_number": 1,
          "poster_url": "https://cdn.watchmode.com/posters/03165490_poster_w185.jpg",
          "source_release_date": "2022-04-01",
          "source_id": 371,
          "source_name": "AppleTV+",
          "is_original": 1
        },
        {
          "id": 3175997,
          "title": "Luxe Listings Sydney",
          "type": "tv_series",
          "tmdb_id": 128912,
          "tmdb_type": "tv",
          "imdb_id": "tt14344354",
          "season_number": 2,
          "poster_url": "https://cdn.watchmode.com/posters/03175997_poster_w185.jpg",
          "source_release_date": "2022-04-01",
          "source_id": 26,
          "source_name": "Amazon Prime",
          "is_original": 1
        },
      ],
    }  
  },
  methods: {
    getType(value) {
      switch (value) {
        case 'tv_series':
          return 'série';
        case 'movie':
          return 'filme';
        default:
          break;
      }
    }
  },

}
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