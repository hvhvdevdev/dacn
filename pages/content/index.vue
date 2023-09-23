<template>
  <v-card>
    <v-card-title> Content </v-card-title>
    <v-card-text>
      <v-select
        v-model="filterModel"
        outlined
        class="d-inline-block"
        label="Model"
        :items="models"
        item-text="name"
        item-value="name"
        dense
        clearable
      ></v-select>
      <br />
      <v-btn
        :disabled="!filterModel"
        color="primary"
        @click="$router.push('/content/create?model=' + filterModel)"
      >
        <v-icon left>mdi-plus</v-icon>
        Create
      </v-btn>
      <v-simple-table height="600" fixed-header>
        <thead>
          <tr>
            <th>Identifier</th>
            <th>Model</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="entry in filteredEntries" :key="entry.code">
            <td>
              {{ entry._identifier }}
            </td>
            <td>
              {{ entry._model }}
            </td>
            <td>
              <v-tooltip top>
                <template #activator="{ on, attrs }">
                  <v-btn
                    :to="{
                      path: '/content/edit',
                      query: { id: entry._identifier, model: entry._model },
                    }"
                    icon
                    color="info"
                    v-bind="attrs"
                    v-on="on"
                  >
                    <v-icon>mdi-pencil</v-icon>
                  </v-btn>
                </template>
                <span>Edit</span>
              </v-tooltip>
              <DeleteEntryButton
                :entry-identifier="entry._identifier"
                :model-name="entry._model"
                :id-field="entry._identifierField"
              ></DeleteEntryButton>
            </td>
          </tr>
        </tbody>
      </v-simple-table>
    </v-card-text>
    <div class="text-center pb-5">
      <v-pagination v-model="page" :length="1"></v-pagination>
    </div>
  </v-card>
</template>

<script>
export default {
  name: 'Index',
  data() {
    return {
      page: 1,
      filterModel: null,
    }
  },
  computed: {
    entries() {
      return this.$store.getters['content/getEntries']
    },
    models() {
      return this.$store.getters['models/getModels']
    },
    filteredEntries() {
      return Object.entries(this.entries).flatMap(([k, v]) =>
        v
          .map((x) => ({
            _model: k,
            _identifier: x[this.models.find((m) => m.name === k).identifier],
            _identifierField: this.models.find((m) => m.name === k).identifier,
            ...x,
          }))
          .filter((x) => !this.filterModel || x._model === this.filterModel)
      )
    },
  },
  mounted() {
    this.$store.dispatch('content/loadEntries')
  },
}
</script>

<style scoped></style>
