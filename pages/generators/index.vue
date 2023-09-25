<template>
  <transition-group tag="div" name="flip-list" class="row">
    <v-col cols="12"><h1>Generators</h1></v-col>
    <v-col
      v-for="generator in generatorsSorted"
      :key="generator.title"
      cols="12"
      sm="6"
      md="4"
    >
      <v-card class="fill-height d-flex flex-column">
        <v-card-title>{{ generator.title }}</v-card-title>
        <v-card-text class="grow">
          {{ generator.description }}
        </v-card-text>
        <v-divider></v-divider>
        <v-card-actions>
          <v-btn v-if="generator.active" text color="warning">In Use</v-btn>
          <v-btn v-else text color="success" :to="generator.link">Activate</v-btn>
          <v-btn text color="info" :to="generator.link" :disabled="!generator.active">Settings</v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
  </transition-group>
</template>

<script>
export default {
  name: 'Index',
  data() {
    return {
      generators: [
        {
          title: 'Jekyll',
          description:
            'Jekyll is a static site generator written in Ruby by Tom Preston-Werner. It is distributed under the open source MIT license',
          active: true,
          link: '/generators/jekyll',
          kind: 'jekyll.yml',
        },
        {
          title: 'Zola',
          description:
            'A fast static site generator in a single binary with everything built-in',
          active: false,
          link: '/generators/zola',
          kind: 'zola.yml',
        },
        {
          title: 'Hugo',
          description:
            'Hugo is a static site generator written in Go. Steve Francia originally created Hugo as an open source project in 2013',
          active: false,
          link: '/generators/hugo',
          kind: 'hugo.yml',
        },
      ],
    }
  },
  computed: {
    generatorsSorted() {
      return [...this.generators].sort((_a, b) => b.active ?? 1)
    },
  },
  mounted() {
    for (const g of this.generators) {
      g.active = this.$store.getters['generator/getGenerator'] === g.kind
    }
  }
}
</script>

<style scoped>
.flip-list-move {
  transition: transform 1s;
}
</style>
