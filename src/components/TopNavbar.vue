<template>
  <v-container fluid>
    <v-app-bar
        elevation="4"
        color="#fff"
    >
      <v-tabs
          align-with-title
          color="#6e6d73"
      >
        <v-tab><router-link to="/">Home</router-link></v-tab>
        <v-tab>Exchanges</v-tab>
        <v-tab>Articles</v-tab>
        <v-tab>F.A.Q</v-tab>
        <v-tab>Help</v-tab>
        <v-tab><router-link to="/contacts/">Contacts</router-link></v-tab>
      </v-tabs>
    </v-app-bar>
  </v-container>
</template>

<script>
export default {

}

</script>