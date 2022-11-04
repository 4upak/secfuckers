<template>

  <v-container class="lighten-5">
    <!-- title -->
        <h1 class="text-center">{{ name }}</h1>
    <!-- 3 rows of articles -->
    <v-row
        class="mt-5"

    >
      <v-col cols="12" md="5">
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
                  Recents
                  <v-icon>mdi-phone</v-icon>
                </v-tab>

                <v-tab href="#tab-2">
                  Favorites
                  <v-icon>mdi-heart</v-icon>
                </v-tab>

                <v-tab href="#tab-3">
                  Nearby
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
                          <v-list>
                            <v-subheader>From</v-subheader>
                            <v-list-item-group
                                v-model="selectedItem"
                                color="primary"
                            >
                              <v-list-item
                                  v-for="(item, i) in items"
                                  :key="i"
                              >

                                <v-list-item-content>
                                  <v-list-item-title v-text="item.text"></v-list-item-title>
                                </v-list-item-content>
                              </v-list-item>
                            </v-list-item-group>
                          </v-list>

                        </v-col>
                        <v-col cols="12" md="6">

                          <v-list>
                            <v-subheader>To</v-subheader>
                            <v-list-item-group
                                v-model="selectedItem"
                                color="primary"
                            >
                              <v-list-item
                                  v-for="(item, i) in items"
                                  :key="i"
                              >
                                <v-list-item-content>
                                  <v-list-item-title v-text="item.text"></v-list-item-title>
                                </v-list-item-content>
                              </v-list-item>
                            </v-list-item-group>
                          </v-list>

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
      </v-col>
      <v-col cols="12" md="7">
        <v-card>
          <v-responsive >
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
  data () {
    return {
      tab: null,
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      selectedItem: 1,
      items: [
        { text: 'Real-Time', icon: 'mdi-clock' },
        { text: 'Audience', icon: 'mdi-account' },
        { text: 'Conversions', icon: 'mdi-flag' },
      ],
    }
  },
}
</script>

<style scoped>
.text-center {
  text-align: center;
  color:#4070f4
}

</style>