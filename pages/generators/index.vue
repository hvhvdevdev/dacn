<template>
  <transition-group tag="div" name="flip-list" class="row">
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
          <v-btn
            v-if="generator.active"
            text
            color="error"
            @click="generator.active = false"
            >Disable
          </v-btn>
          <v-btn v-else text color="success" @click="generator.active = true"
            >Enable
          </v-btn>
          <v-btn text color="info">Settings</v-btn>
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
        },
        {
          title: 'LaTeX',
          description:
            'LaTeX is a software system for document preparation. When writing, the writer uses plain text as opposed to the formatted text found in WYSIWYG word processors like Microsoft Word, LibreOffice Writer and Apple Pages',
          active: true,
        },
        {
          title: 'Hugo',
          description:
            'Hugo is a static site generator written in Go. Steve Francia originally created Hugo as an open source project in 2013',
          active: false,
        },
      ],
    }
  },
  computed: {
    generatorsSorted() {
      return [...this.generators].sort((_a, b) => b.active ?? 1)
    },
  },
}
</script>

<style scoped>
.flip-list-move {
  transition: transform 1s;
}
</style>
