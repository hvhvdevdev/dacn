<template>
  <v-card>
    <v-card-title> Content </v-card-title>
    <v-card-text>
      <v-select
        v-model="filterModel"
        outlined
        class='d-inline-block'
        label="Model"
        :items="models"
        item-text="name"
        item-value="name"
        dense
        clearable
      ></v-select>
      <v-simple-table height="600" fixed-header>
        <thead>
          <tr>
            <th>Identifier</th>
            <th>Model</th>
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
        v.map((x) => ({
          _model: k,
          _identifier: x[this.models.find((m) => m.name === k).identifier],
          ...x,
        }))
        .filter(x => !this.filterModel || x._model === this.filterModel)
      )
    },
  },
}
</script>

<style scoped></style>
