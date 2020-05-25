<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
      <div class="d-flex align-center">
        <router-link to="/">
          <v-img
            alt="DunGen Name"
            class="shrink mt-1 hidden-sm-and-down"
            contain
            min-width="100"
            src="./assets/DunGenNew.png"
            width="170"
          />
        </router-link>
      </div>
     <v-spacer></v-spacer>
      <MenuBar/>
    </v-app-bar>

    <v-content>
      <router-view/>
    </v-content>
    <v-bottom-sheet v-model="sheet" inset>
      <template v-slot:activator="{ on }">
        <v-btn
          color="blue"
          dark
          v-on="on"
        >
          Click me
        </v-btn>
      </template>
        <v-sheet class="text-center" height="200px">
          <v-btn
            class="mt-6"
            text
            color="error"
            @click="sheet = !sheet"
          >close</v-btn>
          <v-container grid-list-xl justify-center>
            <v-btn
              padding="100px"
              class ="ma-2"
              tile
              large
              icon
              href="https://github.com/JerLai"
              target="_blank"
            >
              <v-img
                alt= "GitHub mark"
                contain
                width="32"
                src="./assets/GitHub-Mark/PNG/GitHub-Mark-64px.png"
              />
            </v-btn>
          </v-container>
        </v-sheet>
    </v-bottom-sheet>
  </v-app>
</template>

<script>
import MenuBar from './components/MenuBar';

export default {
  name: 'App',

  components: {
    MenuBar,
  },

  data: () => ({
    sheet: false,
  }),
};
</script>
