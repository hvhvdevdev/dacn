<template>
  <v-row justify="center">
    <v-col cols="12">
      <h1>Generator Settings</h1>
    </v-col>
    <v-col cols="12" sm="10" md="8">
      <v-card>
        <v-card-title>Jekyll Settings</v-card-title>
        <v-card-text>
          <v-form v-model="formIsValid">
            <v-text-field
              v-model="repository"
              :rules="notEmpty"
              label="Target Repository"
            />
            <v-text-field
              v-model="postLayout"
              :rules="notEmpty"
              label="Post Layout Name"
            />
            <v-btn
              :disabled="!formIsValid"
              color="primary"
              :loading="loading"
              @click="saveSettings()"
            >
              <v-icon left>mdi-content-save</v-icon>
              Save
            </v-btn>
          </v-form></v-card-text
        >
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'Jekyll',
  data() {
    return {
      formIsValid: false,
      loading: false,
      notEmpty: [(v) => !!v || 'This field must not be empty'],
      postLayout: this.$store.getters['generator/getPostLayout'],
      repository: this.$store.getters['generator/getRepository'],
    }
  },
  methods: {
    async saveSettings() {
      this.loading = true
      await this.$store.dispatch('generator/setJekyllSettings', {
        generator: 'jekyll.yml',
        postLayout: this.postLayout,
        repository: this.repository,
      })
      this.$store.commit(
        'setSnackbarContent',
        'Generator settings updated successfully'
      )
      await this.$router.push('/generators')
    },
  },
}
</script>

<style scoped></style>
