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
            Delete
          </v-btn>
        </template>
        <span>Delete</span>
      </v-tooltip>
    </template>
    <v-card>
      <v-card-title class="primary white--text">Delete Model</v-card-title>
      <v-divider />
      <v-card-text class="mt-5"> Really delete `{{ modelName }}`? </v-card-text>
      <v-divider />
      <v-card-actions>
        <v-btn text color="error" @click="deleteModel"> Delete </v-btn>
        <v-btn text @click="close"> Cancel </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  name: 'DeleteModelButton',
  props: {
    modelName: {
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
    deleteModel() {
      this.close()
      this.loading = true
      this.$store.dispatch('models/deleteModel', this.modelName).then(() => {
        this.loading = false
        this.$store.commit('setSnackbarContent', 'Model deleted successfully')
      })
    },
  },
}
</script>

<style scoped></style>
