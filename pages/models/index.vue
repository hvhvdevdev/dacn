<template>
  <v-row>
    <v-col cols="12">
      <h1>Models</h1>
    </v-col>
    <v-col cols="12">
      <v-btn color="primary" @click="$router.push('/models/create')">
        <v-icon left>mdi-plus</v-icon>
        Create
      </v-btn>
    </v-col>
    <v-col v-for="model in models" :key="model.name" cols="12" sm="6" md="4">
      <v-card>
        <v-card-title>{{ model.name }}</v-card-title>
        <v-card-text>
          {{ model.fields.length }} fields<br />
          Identified by <code>{{ model.name }}.{{ model.identifier }}</code>
        </v-card-text>
        <v-divider />
        <v-card-actions>
          <v-btn
            text
            color="info"
            @click="
              $router.push({
                path: '/models/edit',
                query: { model: model.name },
              })
            "
            >Edit</v-btn
          >
          <v-btn text color="success">Content</v-btn>
          <DeleteModelButton :model-name="model.name" />
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'Index',
  computed: {
    models() {
      return this.$store.getters['models/getModels']
    },
  },
}
</script>

<style scoped></style>
