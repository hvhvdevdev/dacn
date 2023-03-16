<template>
  <v-dialog v-model="dialog" persistent width="400">
    <template #activator="{ on: dOn, attrs: dAttrs }">
      <v-tooltip top>
        <template #activator="{ on: tOn, attrs: tAttrs }">
          <v-btn
            :loading="loading"
            icon
            color="error"
            v-bind="{ ...tAttrs, ...dAttrs }"
            v-on="{ ...tOn, ...dOn }"
          >
            <v-icon>mdi-trash-can</v-icon>
          </v-btn>
        </template>
        <span>Delete</span>
      </v-tooltip>
    </template>
    <v-card>
      <v-card-title class="primary white--text">Delete Article</v-card-title>
      <v-divider />
      <v-card-text class="mt-5">
        Really delete `{{ articleTitle }}`?
      </v-card-text>
      <v-divider />
      <v-card-actions>
        <v-btn text color="error" @click="deleteArticle"> Delete </v-btn>
        <v-btn text @click="close"> Cancel </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  name: 'DeleteArticleButton',
  props: {
    articleTitle: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      dialog: false,
      loading: false,
    }
  },
  methods: {
    close() {
      this.dialog = false
    },
    deleteArticle() {
      this.close()
      this.loading = true
      this.$store.dispatch('deleteArticle', this.articleTitle).then(() => {
        this.loading = false
        this.$store.commit('setSnackbarContent', 'Article deleted successfully')
      })
    },
  },
}
</script>

<style scoped></style>
