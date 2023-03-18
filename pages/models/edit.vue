<template>
  <v-row justify="center">
    <v-col cols="12">
      <h1>Edit Model</h1>
    </v-col>
    <v-col cols="12" sm="10" md="8">
      <v-card>
        <v-card-title>Editing Model `{{ modelName }}`</v-card-title>
        <v-card-text>
          <v-form v-model="formIsValid">
            <v-text-field v-model="model.name" :rules="notEmpty" label="Name" />
            <v-select
              v-model="model.identifier"
              :rules="notEmpty"
              :items="model.fields"
              item-value="field"
              item-text="field"
              label="Identifier"
            ></v-select>
            <div v-for="(field, index) in model.fields" :key="index">
              <v-divider />
              <v-row align="center">
                <v-col cols="1" class="text-right">
                  <v-btn
                    color="error"
                    icon
                    @click="model.fields.splice(index, 1)"
                  >
                    <v-icon>mdi-close</v-icon></v-btn
                  ></v-col
                >
                <v-col cols="11" md="4">
                  <v-text-field
                    v-model="field.field"
                    prepend-inner-icon="mdi-pencil-box-outline"
                    :rules="notEmpty"
                    label="Field Name"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" md="3">
                  <v-select
                    v-model="field.widget"
                    prepend-inner-icon="mdi-widgets-outline"
                    label="Widget"
                    :rules="notEmpty"
                    :items="widgets"
                  ></v-select>
                </v-col>
                <v-col cols="12" md="4">
                  <v-select
                    v-if="field.widget === 'select'"
                    v-model="field.model"
                    prepend-inner-icon="mdi-book-open-outline"
                    label="Model"
                    :items="models"
                    item-text="name"
                    item-value="name"
                  ></v-select>
                </v-col>
              </v-row>
            </div>
            <v-btn color="success" @click="addField">
              <v-icon left>mdi-plus</v-icon>
              Field
            </v-btn>
            <v-btn
              :disabled="!formIsValid"
              color="primary"
              :loading="loading"
              @click="updateModel"
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
  name: 'Edit',
  data() {
    return {
      modelName: this.$route.query.model,
      formIsValid: false,
      notEmpty: [(v) => !!v || 'This field must not be empty'],
      widgets: ['text', 'number', 'select', 'rich-text'],
      loading: false,
      model: {
        name: '',
        identifier: 'code',
        fields: [
          {
            field: 'code',
            widget: 'text',
          },
        ],
      },
    }
  },
  computed: {
    models() {
      return this.$store.getters['models/getModels']
    },
  },
  mounted() {
    this.model = JSON.parse(
      JSON.stringify(this.models.find((m) => m.name === this.modelName))
    )
  },
  methods: {
    addField() {
      this.model.fields.push({
        field: '',
        widget: 'text',
      })
    },
    async updateModel() {
      this.loading = true
      await this.$store.dispatch('models/updateModel', {
        modelName: this.modelName,
        newModel: this.model,
      })
      this.$store.commit('setSnackbarContent', 'Model updated successfully')
      await this.$router.push('/models')
    },
  },
}
</script>

<style scoped></style>
