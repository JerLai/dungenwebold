<template>
  <v-content class="changelog">
    <section id="changelog-component" style="padding: 0px 0px;">
      <h1 class="text-uppercase headline font-weight-bold mb-2 text-center">Change Log</h1>
      <v-timeline>
        <v-timeline-item
          v-for="(log, i) in changelog"
          :key="i"
        >
          <span slot="opposite">{{log.date}}</span>
          <v-card>
            <v-card-title>
              {{log.version}}
            </v-card-title>
            <v-container>
              <v-row>
                <v-col cols="12" md="10">
                  {{log.desc}}
                </v-col>
                <v-col
                  class="hidden-sm-and-down text-right"
                  md="2"
                >
                </v-col>
              </v-row>
            </v-container>
          </v-card>
        </v-timeline-item>
      </v-timeline>
    </section>
  </v-content>
</template>
<script>
export default {
    name: 'ChangeLog',
    data() {
        return {
            changelog:[
              {date: "05/20/2020", version: "0.1.0", desc: "Website created!"}
            ]
        }
    },
    mounted() {

    }
}
</script>
<style>
</style>