<template>
  <v-dialog v-model="dialog" persistent width="400">
    <template #activator="{ on: dOn, attrs: dAttrs }">
      <v-tooltip top>
        <template #activator="{ on: tOn, attrs: tAttrs }">
          <v-btn
            :loading="loading"
            text
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
      <v-card-title class="primary white--text">Delete Content</v-card-title>
      <v-divider />
      <v-card-text class="mt-5">
        Really delete `{{ entryIdentifier }}` of `{{ modelName }}`?
      </v-card-text>
      <v-divider />
      <v-card-actions>
        <v-btn text color="error" @click="deleteEntry"> Delete </v-btn>
        <v-btn text @click="close"> Cancel </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  name: 'DeleteEntryButton',
  props: {
    entryIdentifier: {
      type: String,
      required: true,
    },
    modelName: {
      type: String,
      required: true,
    },
    idField: {
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
    deleteEntry() {
      this.close()
      this.loading = true
      this.$store
        .dispatch('content/deleteEntry', {
          id: this.entryIdentifier,
          model: this.modelName,
          idField: this.idField,
        })
        .then(() => {
          this.loading = false
          this.$store.commit('setSnackbarContent', 'Entry deleted successfully')
        })
    },
  },
}
</script>

<style scoped></style>
