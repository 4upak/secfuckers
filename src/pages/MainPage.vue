<template>

  <v-container class="lighten-5">
    <!-- title -->
        <h1 class="text-center">{{ name }}</h1>
    <!-- 3 rows of articles -->
    <v-row
        class="mt-5"

    >
      <v-col
          border="1px solid #6e6d73"
          color="grey"
      >
        <v-card>
          <v-responsive :aspect-ratio="16/9">
            <v-card-text>
              This card will always be 16:9 (unless you put more stuff in it)
            </v-card-text>
          </v-responsive>
        </v-card>
      </v-col>
      <v-col cols="12" md="3">
        <v-card>
          <v-responsive :aspect-ratio="16/9">
            <v-card-text>
              This card will always be 16:9 (unless you put more stuff in it)
            </v-card-text>
          </v-responsive>
        </v-card>
      </v-col>
      <v-col cols="12" md="6">
        <v-card>
          <v-responsive :aspect-ratio="16/9">
            <v-card-text>
              This card will always be 16:9 (unless you put more stuff in it)
            </v-card-text>
          </v-responsive>
        </v-card>
      </v-col>


    </v-row>


  </v-container>
</template>

<script>

export default {
  name: "MainPage",
  components: {

  },
  data() {
    return {
      name: "MainPage"
    }
  }
}
</script>

<style scoped>

</style>