<template>
  <v-row v-if="authorName" justify="center" align="stretch">
    <v-col cols="12">
      <h1>Author {{ authorName }}'s Summary</h1>
    </v-col>
    <v-col cols="12">
      <v-card dark color="success">
        <v-card-title> {{ countPublished }} Published Articles </v-card-title>
        <v-card-text>
          {{ countArticles }} total articles <br />
          {{ countArticles - countPublished }} drafts
        </v-card-text>
      </v-card>
    </v-col>
    <v-col cols="12">
      <v-card>
        <v-card-title> {{ authorName }}'s Latest Articles </v-card-title>
        <LatestArticleTable
          :latest-articles="latestArticles"
        ></LatestArticleTable>
      </v-card>
    </v-col>
  </v-row>
  <v-row v-else>
    <v-col cols="12">
      <h1>Authors</h1>
    </v-col>
    <v-col
      v-for="author in authors"
      :key="author.name"
      cols="12"
      sm="10"
      md="4"
    >
      <v-card>
        <v-card-title>
          {{ author.name }}
        </v-card-title>
        <v-card-text>
          <NuxtLink :to="{ query: { name: author.name } }"
            >{{ author.articles.length }} written articles</NuxtLink
          >
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'Authors',
  computed: {
    authorName() {
      return this.$route.query.name
    },
    authorNames() {
      return this.$store.getters.getAuthors.map((au) => au.name)
    },
    latestArticles() {
      return [...this.$store.getters.getArticles]
        .filter((a) => a.authors.includes(this.authorName))
        .sort((a, b) => (a.date < b.date ? 1 : 0))
    },
    authors() {
      return this.$store.getters.getAuthors
    },
    countPublished() {
      return this.$store.getters.getArticles.filter(
        (a) => a.authors.includes(this.authorName) && a.published
      ).length
    },
    countArticles() {
      return this.$store.getters.getArticles.filter((a) =>
        a.authors.includes(this.authorName)
      ).length
    },
  },
  mounted() {
    if (this.authorName && !this.authorNames.includes(this.authorName)) {
      this.$nuxt.context.error({ statusCode: 404, message: 'Unknown Author' })
    }
  },
}
</script>

<style scoped></style>
