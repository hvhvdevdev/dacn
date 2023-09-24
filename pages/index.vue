<template>
  <v-row justify="center" align="stretch">
    <v-col cols="12">
      <h1>Dashboard</h1>
    </v-col>
    <v-col cols="12" sm="10" md="4">
      <v-card dark color="success">
        <v-card-title> {{ countPublished }} Published Articles </v-card-title>
        <v-card-text>
          {{ countArticles }} total articles <br />
          {{ countArticles - countPublished }} drafts
        </v-card-text>
      </v-card>
    </v-col>
    <v-col cols="12" sm="10" md="4">
      <v-card dark color="warning">
        <v-card-title> {{ countTags }} Unique tags </v-card-title>
        <v-card-text>
          {{ averageTagsPerArticle }} average tags per articles <br />
          {{ averageArticlesPerTag }} average articles per tags
        </v-card-text>
      </v-card>
    </v-col>
    <v-col cols="12" sm="10" md="4">
      <v-card dark color="info" class="fill-height">
        <v-card-title> {{ countAuthors }} Active Authors </v-card-title>
        <v-card-text>
          {{ averageArticlesPerAuthor }} average articles per author <br />
        </v-card-text>
      </v-card>
    </v-col>
    <v-col cols="12" sm="10" md="9">
      <v-card>
        <v-card-title> Latest Articles </v-card-title>
        <LatestArticleTable
          :latest-articles="latestArticles"
          show-authors
        ></LatestArticleTable>
      </v-card>
    </v-col>
    <v-col cols="12" sm="10" md="3">
      <v-card>
        <v-card-title> Top Tags </v-card-title>
        <TopTagsTable :top-tags="topTags"></TopTagsTable>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'IndexPage',
  computed: {
    topTags() {
      return [...this.$store.getters.getTags].sort(
        (a, b) => b.articles.length - a.articles.length
      )
    },
    latestArticles() {
      return [...this.$store.getters.getArticles].sort((a, b) =>
        a.date < b.date ? 1 : 0
      )
    },
    countArticles() {
      return this.$store.getters.countArticles
    },
    countPublished() {
      return this.$store.getters.countPublished
    },
    countTags() {
      return this.$store.getters.countTags
    },
    averageTagsPerArticle() {
      return Math.round((this.countTags / this.countArticles) * 10) / 10
    },
    averageArticlesPerTag() {
      return Math.round((this.countArticles / this.countTags) * 10) / 10
    },
    countAuthors() {
      return this.$store.getters.countAuthors
    },
    averageArticlesPerAuthor() {
      return Math.round((this.countArticles / this.countAuthors) * 10) / 10
    },
  },
  mounted() {
    this.$store.dispatch('loadArticles')
  }
}
</script>
