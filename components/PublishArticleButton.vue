<template>
  <v-dialog v-model="dialog" persistent width="400">
    <template #activator="{ on: dOn, attrs: dAttrs }">
      <v-tooltip :disabled="disabled" top>
        <template #activator="{ on: tOn, attrs: tAttrs }">
          <v-btn
            :loading="loading"
            :disabled="disabled"
            icon
            color="warning"
            v-bind="{ ...tAttrs, ...dAttrs }"
            v-on="{ ...tOn, ...dOn }"
          >
            <v-icon>mdi-publish</v-icon>
          </v-btn>
        </template>
        <span>Publish</span>
      </v-tooltip>
    </template>
    <v-card>
      <v-card-title class="primary white--text">Publish Article</v-card-title>
      <v-divider />
      <v-card-text class="mt-5">
        Really publish `{{ articleTitle }}`?
      </v-card-text>
      <v-divider />
      <v-card-actions>
        <v-btn text color="warning" @click="deleteArticle"> Publish</v-btn>
        <v-btn text @click="close"> Cancel</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  name: 'PublishArticleButton',
  props: {
    articleTitle: {
      type: String,
      required: true,
    },
    disabled: {
      type: Boolean,
      default: () => false,
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
      this.$store.dispatch('publishArticle', this.articleTitle).then(() => {
        this.loading = false
        this.$store.commit(
          'setSnackbarContent',
          'Article published successfully'
        )
      })
    },
  },
}
</script>

<style scoped></style>
