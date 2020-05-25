<template>
  <v-container class="display-container">
      <v-col class="mb-4">
        <h1 class="display-2 font-weight-bold mb-3">
          Click the application screen to generate a new dungeon
        </h1>
      </v-col>
    <div class="gen-container">
      <!--
      The Unity Container.
      Look in the src of npm-modules/vue-unity/webgl/ after npm installing for the mechanics of this custom component
      -->
      <unity
        hideFooter=true
        src="/Build/WebGL.json"
        width="1000"
        height="600"
        unityLoader="/Build/UnityLoader.js" ref="myInstance"
      >
      </unity>
    </div>
  </v-container>
</template>
<script>
import Unity from 'vue-unity-webgl'
//import Unity from "../components/Unity.vue"
export default {
  name: 'home',
  components: {
    Unity
  },
  data() {
    return {
      textInput: "String to send"
    }
  },
  methods: {
    sendText() {
      console.log(this.textInput)
      this.$refs.myInstance.message('Text', 'SetText', this.textInput)
    }
  }
}
</script>
<style>
h1 {
  text-align: center;
}

#suggestion {
  text-align: center;
}
</style>
