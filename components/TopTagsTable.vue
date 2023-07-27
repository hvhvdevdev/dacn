<template>
  <v-simple-table height="400" fixed-header>
    <thead>
      <tr>
        <th class="text-left">Tag Name</th>
        <th class="text-left">Article Count</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="tag in topTags" :key="tag.name">
        <td>
          <NuxtLink :to="{ path: '/articles', query: { tags: tag.name } }">
            {{ tag.name }}
          </NuxtLink>
        </td>
        <td>
          {{ tag.articles.length }}
        </td>
      </tr>
    </tbody>
  </v-simple-table>
</template>

<script>
export default {
  name: 'TopTagsTable',
  props: {
    topTags: {
      type: Array,
      default: () => [],
    },
  },
}
</script>

<style scoped></style>
