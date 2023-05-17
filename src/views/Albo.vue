<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="albo">
    <div v-if="loading === true">
      <h2 class="text-center">Loading</h2>
    </div>
    <v-container class=" d-flex flex-column align-center" v-else>
      <v-list-item-content class="text-center">
          <v-list-item-title class="text-h3">{{ comic.safe_title }}</v-list-item-title>
          <v-list-item-title class="text-button">Comic number: {{ comic.num }}</v-list-item-title>
          <v-list-item-title class="text-button">Date: {{ comic.day }}/{{ comic.month }}/{{ comic.year }}</v-list-item-title>
      </v-list-item-content>

      <v-img v-bind:src="comic.img" />

      <v-list class="d-flex mb-6">
        <v-list-item-content>
          <v-list-item-icon icon class="pa-2">
            <v-icon color="primary lighten-2" size="50" @click="prevComic()">mdi-arrow-left-bold-box</v-icon>
          </v-list-item-icon>
        </v-list-item-content>
        <v-list-item-content class="pa-2 align-self-center">
          <v-list-item-title class="text-button"> Prev Comic  |</v-list-item-title>
        </v-list-item-content>
        <v-list-item-content class="pa-2 align-self-center">
          <v-list-item-title class="text-button">| Next Comic</v-list-item-title>
        </v-list-item-content>
        <v-list-item-content>
          <v-list-item-icon icon class="pa-8">
            <v-icon color="primary lighten-2" size="50" @click="nextComic()">mdi-arrow-right-bold-box</v-icon>
          </v-list-item-icon>
        </v-list-item-content>
      </v-list>
    </v-container>
  </div>
</template>
<script>
import axios from 'axios';


export default {
  data() {
    return {
      numberComic: 100,
      apiUrl: 'https://getxkcd.vercel.app/api/comic?num=',
      comic: {},
      prev: false,
      loading: false
    }
  },
  methods: {
    async getComic() {
      this.loading = true
      const getComicResponse = await axios
        .get(`${this.apiUrl}${this.numberComic}`)
      this.comic = getComicResponse.data
      this.loading = false
    },
    async prevComic() {
      this.prev = true
      console.log(this.numberComic)
      this.numberComic--
      console.log(this.numberComic)
      this.loading = true
      const getComicResponse = await axios.get(`${this.apiUrl}${this.numberComic}`)
      this.comic = getComicResponse.data
      this.prev = false
      this.loading = false
    },
    async nextComic() {
      this.next = true
      this.numberComic++
      this.loading = true
      const getComicResponse = await axios.get(`${this.apiUrl}${this.numberComic}`)
      this.comic = getComicResponse.data
      this.next = false
      this.loading = false
    }
  },
  async mounted() {

    await this.getComic()


  }
}
</script>
