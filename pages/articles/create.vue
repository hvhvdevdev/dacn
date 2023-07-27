<template>
  <v-row justify="center">
    <v-col cols="12">
      <h1>Create Article</h1>
    </v-col>
    <v-col cols="12" sm="10" md="6">
      <v-card>
        <v-card-title>New Article</v-card-title>
        <v-card-text>
          <v-form ref="form" v-model="formIsValid">
            <v-text-field
              v-model="article.title"
              :rules="notEmpty"
              label="Title"
            ></v-text-field>
            <RichTextEditor v-model="article.content"></RichTextEditor>
            <v-autocomplete
              v-model="article.tags"
              :items="tags"
              :search-input.sync="currentTagInput"
              label="Tags"
              small-chips
              multiple
              auto-select-first
              @change="onTagInputChange($event)"
            ></v-autocomplete>
            <v-menu v-model="menuDate" offset-y :close-on-content-click="false">
              <template #activator="{ on, attrs }">
                <v-text-field
                  v-model="article.date"
                  label="Date"
                  append-icon="mdi-calendar"
                  readonly
                  v-bind="attrs"
                  :rules="notEmpty"
                  v-on="on"
                ></v-text-field>
              </template>
              <v-date-picker
                v-model="article.date"
                no-title
                @input="menuDate = false"
              ></v-date-picker>
            </v-menu>
            <v-switch
              v-model="article.published"
              :label="'Status: ' + (article.published ? 'Published' : 'Draft')"
            ></v-switch>
            <v-btn
              :disabled="!formIsValid"
              color="primary"
              :loading="loading"
              @click="createArticle"
            >
              <v-icon left>mdi-content-save</v-icon>
              Save
            </v-btn>
          </v-form>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'Create',
  data() {
    return {
      article: {
        title: '',
        content: '',
        tags: [],
        published: false,
        authors: [],
      },
      menuDate: false,
      loading: false,
      currentTagInput: '',
      customTags: [],
      notEmpty: [(v) => !!v || 'This field must not be empty'],
      formIsValid: false,
    }
  },
  computed: {
    tags() {
      return (this.currentTagInput ? [this.currentTagInput] : []).concat(
        this.$store.getters.getTags.map((t) => t.name).concat(this.customTags)
      )
    },
  },
  methods: {
    async createArticle() {
      this.loading = true
      await this.$store.dispatch('createArticle', this.article)
      this.$store.commit('setSnackbarContent', 'Article created successfully')
      await this.$router.push('/articles')
    },
    onTagInputChange(tags) {
      this.currentTagInput = ''
      this.customTags = [
        ...this.$store.getters.getTags.map((t) => t.name),
        ...tags,
      ]
    },
  },
}
</script>

<style scoped></style>
