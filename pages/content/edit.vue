<template>
  <v-row v-if="model" justify="center">
    <v-col cols="12">
      <h1>Edit Content</h1>
    </v-col>
    <v-col cols="12" sm="10" md="8">
      <v-card>
        <v-card-title>Editing `{{ id }}` of `{{ modelName }}`</v-card-title>
        <v-card-text>
          <div v-for="field in model.fields" :key="field.field">
            <v-select
              v-if="field.widget === 'select'"
              v-model="content[field.field]"
              :label="field.field"
              :items="entries[field.model]"
              :item-text="getIdFieldOfModelName(field.model)"
              :item-value="getIdFieldOfModelName(field.model)"
            ></v-select>
            <RichTextEditor
              v-else-if="field.widget === 'rich-text'"
              v-model="content[field.field]"
              :label="field.field"
            ></RichTextEditor>
            <v-text-field
              v-else
              v-model="content[field.field]"
              :label="field.field"
              :type="field.widget === 'number' ? 'number' : 'text'"
            />
          </div>
          <v-btn color="primary" :loading="loading" @click="updateEntry">
            <v-icon left>mdi-content-save</v-icon>
            Save
          </v-btn>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'Edit',
  data() {
    const modelName = this.$route.query.model
    const model = this.$store.getters['models/getModels']?.find(
      (m) => m.name === modelName
    )
    const id = this.$route.query.id
    return {
      modelName,
      id,
      model,
      content: JSON.parse(
        JSON.stringify(
          this.$store.getters['content/getEntries'][modelName]?.find(
            (e) => e[model.identifier] === id
          )
        )
      ),
      loading: false,
    }
  },
  computed: {
    entries() {
      return this.$store.getters['content/getEntries']
    },
    models() {
      return this.$store.getters['models/getModels']
    },
  },
  methods: {
    async updateEntry() {
      this.loading = true
      await this.$store.dispatch('content/editEntry', {
        model: this.modelName,
        id: this.id,
        idField: this.model.identifier,
        data: this.content,
      })

      this.$store.commit('setSnackbarContent', 'Entry updated successfully')
      await this.$router.push('/content')
    },
    getIdFieldOfModelName(modelName) {
      return this.models.find((m) => m.name === modelName).identifier
    },
  },
}
</script>

<style scoped></style>
