<template>
  <v-content class="about">
    <section id="the-dungen-project" style="padding: 0px 0px;">
      <h1 class="text-uppercase headline font-weight-bold mb-2 text-center">The DunGen Project</h1>
      <p class = "text-center mb-10">
        The DunGen Project was born out of a desire to combine several goals. Named "DunGen" to signify
        a dungeon generator, it was inspired by other dungeon generators out there made in the Unity Engine.
        The generator is a means to help with potential game development requiring procedural generation of
        dungeons, or to help in the hand-authoring of dungeons. This tool is planned to be an open tool for
        people without the explicit use of the Unity Engine for a variety of purposes.
      </p>
    </section>
    <section id="roadmap" style="padding: 0px 0px;">
      <h1 class="text-uppercase headline font-weight-bold mb-2 text-center">Future RoadMap</h1>
      <v-timeline>
        <v-timeline-item
          v-for="(goal, i) in goals"
          :key="i"
        >
          <v-card>
            <v-card-title>
              {{goal.name}}
            </v-card-title>
            <v-container>
              <v-row>
                <v-col cols="12" md="10">
                  {{goal.desc}}
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
    name: 'About',
    data() {
        return {
            goals: [
              {name: "DunGen UI", desc: "Tidying up the Unity UI in the demo, and for future versions for cleaner useability."},
              {name: "DunGen Builder 1.0", desc: "First full iteration of the procedural generator. Generate dungeons based on grid size, algorithm type, room size and more."},
              {name: "Personal Accounts", desc: "Tidying up the Unity UI to provide cleaner intuition on how to use."},
              {name: "DunGen Builder 2.0", desc: "Hand-author dungeons in a special mode. Draw your own rooms, hallways, and insert your own enemies, traps, treasures and events."},
              {name: "Scenario Blueprint 1.0", desc: "Simulation tool to create a dungeon blueprint for game scenarios, such as in Dungeons and Dragons"}
            ]
        }
    },
    mounted() {

    }
}
</script>
<style>
</style>
