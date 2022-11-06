<template>
  <v-card>
    <v-responsive>
      <v-card>
        <v-tabs
            v-model="tab"
            background-color="deep-purple accent-4"
            centered
            dark
            icons-and-text
        >
          <v-tabs-slider></v-tabs-slider>

          <v-tab href="#tab-1">
            Table
            <v-icon>mdi-phone</v-icon>
          </v-tab>

          <v-tab href="#tab-2">
            List
            <v-icon>mdi-heart</v-icon>
          </v-tab>

          <v-tab href="#tab-3">
            Popular
            <v-icon>mdi-account-box</v-icon>
          </v-tab>
        </v-tabs>

        <v-tabs-items v-model="tab">
          <v-tab-item
              :key="1"
              :value="'tab-1'"
          >
            <v-card flat>
              <v-card-text>
                <v-row
                    class="mt-5"
                >
                  <v-col cols="12" md="6">
                    <from-list />
                  </v-col>
                  <v-col cols="12" md="6">
                    <to-list />
                  </v-col>

                </v-row>

              </v-card-text>
            </v-card>
          </v-tab-item>
          <v-tab-item
              :key="2"
              :value="'tab-2'"
          >
            <v-card flat>
              <v-card-text>текст 2</v-card-text>
            </v-card>
          </v-tab-item>
          <v-tab-item
              :key="3"
              :value="'tab-3'"
          >
            <v-card flat>
              <v-card-text>текст 3</v-card-text>
            </v-card>
          </v-tab-item>
        </v-tabs-items>

      </v-card>
    </v-responsive>
  </v-card>
</template>

<script>
import FromList from "@/components/FromList";
import ToList from "@/components/ToList";
export default {
  name: "LeftBar",
  components: {
    "from-list" : FromList,
    "to-list" : ToList,

  },
  data: () => ({
    tab: null,
    items: [
      { text: 'Table', icon: 'mdi-clock' },
      { text: 'List', icon: 'mdi-account' },
      { text: 'Popular', icon: 'mdi-flag' },
    ],
  })
}
</script>

<style scoped>

</style>