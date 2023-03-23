<template>
  <v-app>
    <v-navigation-drawer
      v-model="drawer"
      :mini-variant="miniVariant"
      :clipped="clipped"
      fixed
      app
    >
      <v-list>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to="{
            path: item.to,
            query: $route.path === item.to ? $route.query : null,
          }"
          router
          exact
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar :clipped-left="clipped" fixed app dark color="primary">
      <v-app-bar-nav-icon v-show="true" @click.stop="drawer = !drawer" />
      <v-btn icon @click.stop="miniVariant = !miniVariant">
        <v-icon>mdi-{{ `chevron-${miniVariant ? 'right' : 'left'}` }}</v-icon>
      </v-btn>
      <v-btn v-show="false" icon @click.stop="clipped = !clipped">
        <v-icon>mdi-application</v-icon>
      </v-btn>
      <v-btn v-show="false" icon @click.stop="fixed = !fixed">
        <v-icon>mdi-minus</v-icon>
      </v-btn>
      <v-toolbar-title>{{ title }}</v-toolbar-title>
      <v-spacer />
      <v-btn v-show="false" icon @click.stop="rightDrawer = !rightDrawer">
        <v-icon>mdi-menu</v-icon>
      </v-btn>
    </v-app-bar>
    <v-main class="grey lighten-4">
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>
    <v-navigation-drawer v-model="rightDrawer" :right="right" temporary fixed>
      <v-list>
        <v-list-item @click.native="right = !right">
          <v-list-item-action>
            <v-icon light> mdi-repeat</v-icon>
          </v-list-item-action>
          <v-list-item-title>Switch drawer (click me)</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-footer :absolute="!fixed" app class="grey lighten-5" elevation="3">
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
    <v-snackbar v-model="snackbar" top app color="success">
      {{ snackbarContent }}
    </v-snackbar>
  </v-app>
</template>

<script>
export default {
  name: 'DefaultLayout',
  data() {
    return {
      snackbar: false,
      clipped: true,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: 'mdi-view-dashboard-variant-outline',
          title: 'Dashboard',
          to: '/',
        },
        {
          icon: 'mdi-newspaper-variant-multiple',
          title: 'Articles',
          to: '/articles',
        },
        {
          icon: 'mdi-account-group-outline',
          title: 'Authors',
          to: '/authors',
        },
        {
          icon: 'mdi-book-open',
          title: 'Models',
          to: '/models',
        },
        {
          icon: 'mdi-format-list-bulleted-type',
          title: 'Content',
          to: '/content',
        },
        {
          icon: 'mdi-crane',
          title: 'Generators',
          to: '/generators',
        },
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Nameless CMS',
    }
  },
  computed: {
    snackbarContent() {
      return this.$store.state.snackbarContent
    },
  },
  watch: {
    snackbarContent() {
      if (this.snackbarContent) {
        this.snackbar = true
      }
    },
    snackbar() {
      if (!this.snackbar) {
        this.$store.commit('setSnackbarContent', null)
      }
    },
  },
}
</script>
