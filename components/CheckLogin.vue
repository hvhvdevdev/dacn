<template>
  <v-row justify="center">
    <v-col cols="12">
      <h1>Authentication</h1>
    </v-col>
    <v-col cols="12" sm="10" md="6">
      <v-card>
        <v-card-title>Sign In</v-card-title>

        <v-card-text>
          <v-form ref="form" v-model="formIsValid">
            <v-text-field
              v-model="repository"
              :rules="notEmpty"
              label="Repository"
            ></v-text-field>
            <v-text-field
              v-model="password"
              type="password"
              :rules="notEmpty"
              label="Token"
            ></v-text-field>
            <v-btn
              :disabled="!formIsValid"
              color="primary"
              :loading="loading"
              @click="login"
            >
              <v-icon left>mdi-account</v-icon>
              Sign In
            </v-btn>
          </v-form>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'CheckLogin',
  data() {
    return {
      repository: '',
      password: '',
      notEmpty: [(v) => !!v || 'This field must not be empty'],
      formIsValid: false,
      loading: false,
    }
  },
  methods: {
    async login() {
      try {
        this.loading = true
        await this.$store.dispatch('auth/doLogin', this.password)
        await this.$store.dispatch('generator/setRepository', this.repository)
      } catch (e) {
        alert('Invalid token')
      } finally {
        this.loading = false
      }
    },
  },
}
</script>
