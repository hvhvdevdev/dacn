<template>
  <div>
    <v-simple-table height="337" fixed-header>
      <thead>
        <tr>
          <th class="text-left">Title</th>
          <th class="text-left">Date</th>
          <th v-if="showAuthors" class="text-left">Authors</th>
          <th class="text-left">Tags</th>
          <th class="text-left">Status</th>
          <th v-if="showActions" class="text-center">Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-if="latestArticles.length === 0">
          <td colspan="100" class="text-center py-16">No records found</td>
        </tr>
        <tr v-for="article in latestArticles" :key="article.title">
          <td>
            {{ article.title }}
          </td>
          <td>
            {{ article.date }}
          </td>
          <td v-if="showAuthors">
            <NuxtLink
              v-for="(author, index) in article.authors"
              :key="author"
              :to="{ path: '/authors', query: { name: author } }"
            >
              {{ author
              }}<span v-if="index !== article.authors.length - 1">,</span>
            </NuxtLink>
          </td>
          <td>
            <v-chip-group>
              <v-chip
                v-for="tag in article.tags"
                :key="tag"
                small
                :to="{ path: '/articles', query: { tags: tag } }"
              >
                {{ tag }}
              </v-chip>
            </v-chip-group>
          </td>
          <td>
            <v-chip
              v-if="article.published"
              label
              color="primary"
              :to="{
                path: '/articles',
                query: {
                  published: true,
                },
              }"
              >Published
            </v-chip>
            <v-chip
              v-else
              label
              :to="{
                path: '/articles',
                query: {
                  published: false,
                },
              }"
              >Draft
            </v-chip>
          </td>
          <td v-if="showActions" class="text-center">
            <PublishArticleButton
              :article-title="article.title"
              :disabled="article.published"
            />
            <v-tooltip top>
              <template #activator="{ on, attrs }">
                <v-btn
                  :to="{
                    path: '/articles/edit',
                    query: { article: article.title },
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
            <DeleteArticleButton :article-title="article.title" />
          </td>
        </tr>
      </tbody>
    </v-simple-table>
    <div class="text-center pb-5">
      <v-pagination v-model="page" :length="1"></v-pagination>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LatestArticleTable',
  props: {
    latestArticles: {
      type: Array,
      default: () => [],
    },

    showAuthors: {
      type: Boolean,
      default: () => false,
    },

    showActions: {
      type: Boolean,
      default: () => false,
    },
  },
  data() {
    return {
      page: 1,
    }
  },
}
</script>

<style scoped></style>
