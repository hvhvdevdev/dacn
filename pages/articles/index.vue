<template>
  <v-row justify="center" align="stretch">
    <v-col cols="12"><h1>Manage Articles</h1></v-col>
    <v-col cols="12">
      <v-card :loading="loadingArticles">
        <v-card-title> List of Articles</v-card-title>
        <v-card-text>
          <v-text-field
            v-model="searchParams.title"
            label="Title"
            class="d-inline-block"
            outlined
            dense
          ></v-text-field>
          <v-autocomplete
            v-model="searchParams.authors"
            multiple
            label="Authors"
            :items="authors"
            class="d-inline-block"
            outlined
            dense
          >
          </v-autocomplete>
          <v-autocomplete
            v-model="searchParams.tags"
            multiple
            label="Tags"
            :items="tags"
            class="d-inline-block"
            outlined
            dense
          >
          </v-autocomplete>
          <v-select
            v-model="searchParams.published"
            label="Status"
            outlined
            dense
            :items="[
              { label: 'All', value: null },
              { label: 'Published', value: true },
              { label: 'Draft', value: false },
            ]"
            item-text="label"
            item-value="value"
            class="d-inline-block"
          ></v-select>
          <v-menu
            v-model="menuMinDate"
            offset-y
            :close-on-content-click="false"
          >
            <template #activator="{ on, attrs }">
              <v-text-field
                v-model="searchParams.minDate"
                label="Min Date"
                append-icon="mdi-calendar"
                readonly
                outlined
                dense
                clearable
                class="d-inline-block"
                v-bind="attrs"
                v-on="on"
              ></v-text-field>
            </template>
            <v-date-picker
              v-model="searchParams.minDate"
              no-title
              @input="menuMinDate = false"
            ></v-date-picker>
          </v-menu>
          <v-menu
            v-model="menuMaxDate"
            offset-y
            :close-on-content-click="false"
          >
            <template #activator="{ on, attrs }">
              <v-text-field
                v-model="searchParams.maxDate"
                label="Max Date"
                append-icon="mdi-calendar"
                readonly
                outlined
                dense
                clearable
                class="d-inline-block"
                v-bind="attrs"
                v-on="on"
              ></v-text-field>
            </template>
            <v-date-picker
              v-model="searchParams.maxDate"
              no-title
              @input="menuMaxDate = false"
            ></v-date-picker>
          </v-menu>
          <div class="text-center">
            <v-btn class="d-inline-block" color="success" @click="search">
              <v-icon left>mdi-magnify</v-icon>
              Search
            </v-btn>
            <v-btn
              class="d-inline-block"
              color="primary"
              @click="$router.push('/articles/create')"
            >
              <v-icon left>mdi-plus</v-icon>
              Create
            </v-btn>
          </div>
        </v-card-text>
        <v-card-text>
          <LatestArticleTable
            show-authors
            show-actions
            :latest-articles="filteredArticles"
          ></LatestArticleTable>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
function getSearchParams() {
  return {
    tags: this.$route.query.tags ? [this.$route.query.tags].flat() : null,
    authors: this.$route.query.authors
      ? [this.$route.query.authors].flat()
      : null,
    published:
      this.$route.query.published === 'true'
        ? true
        : this.$route.query.published === 'false'
        ? false
        : null,
    title: this.$route.query.title ?? null,
    minDate: this.$route.query.minDate ?? null,
    maxDate: this.$route.query.maxDate ?? null,
  }
}

export default {
  name: 'Articles',
  data() {
    return {
      searchParams: getSearchParams.call(this),
      activeSearchParams: getSearchParams.call(this),
      menuMinDate: false,
      menuMaxDate: false,
      loadingArticles: false,
    }
  },
  computed: {
    allArticles() {
      return this.$store.getters.getArticles
    },
    filteredArticles() {
      return this.allArticles.filter((a) => {
        if (
          this.activeSearchParams?.authors?.length &&
          !a.authors.filter((au) =>
            this.activeSearchParams?.authors?.includes(au)
          ).length > 0
        ) {
          return false
        }
        if (
          this.activeSearchParams?.tags?.length &&
          !a.tags.filter((t) => this.activeSearchParams?.tags?.includes(t))
            .length > 0
        ) {
          return false
        }
        if (
          this.activeSearchParams?.published !== null &&
          a.published !== this.activeSearchParams?.published
        ) {
          return false
        }
        if (
          this.activeSearchParams?.title?.length &&
          !a.title
            .toLowerCase()
            .includes(this.activeSearchParams?.title?.toLowerCase())
        ) {
          return false
        }
        if (
          this.activeSearchParams.minDate?.length &&
          a.date < this.activeSearchParams.minDate
        ) {
          return false
        }
        if (
          this.activeSearchParams.maxDate?.length &&
          a.date > this.activeSearchParams.maxDate
        ) {
          return false
        }
        return true
      })
    },
    authors() {
      return this.$store.getters.getAuthors.map((au) => au.name)
    },
    tags() {
      return this.$store.getters.getTags.map((t) => t.name)
    },
  },
  watch: {
    $route: function (to, _from) {
      if (to.path === '/articles') {
        this.searchParams = getSearchParams.call(this)
        this.activeSearchParams = { ...this.searchParams }
      }
    },
  },
  mounted() {
    this.loadingArticles = true
    this.$store.dispatch('loadArticles').then(() => {
      this.loadingArticles = false
    })
  },
  methods: {
    search() {
      this.$router.push({ query: this.searchParams })
    },
  },
}
</script>

<style scoped></style>
