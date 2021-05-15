<template>
  <div class="container">
    <div>
      <Logo />
      <h1 class="title">
        my-firebase-todolist
      </h1>
      <div class="links">
        <nuxt-link to="/todos" class="button--green">todos</nuxt-link>
      </div>
    </div>
    <v-alert dense outlined prominent text type="success"></v-alert>
    <v-app>
      <v-avatar color="teal" rounded size="56" tile>コッシー</v-avatar>
      <v-alert
        color="red"
        dense
        dismissible
        outlined
        prominent
        text
        type="error"
        >これはエラーだよ</v-alert
      >
    </v-app>
    <v-app>
      <v-alert border="top" color="red lighten-2" dark>
        I'm an alert with a top border and red color
      </v-alert>
      <v-alert border="right" color="blue-grey" dark>
        I'm an alert with a right border and blue-grey color
      </v-alert>
      <v-alert border="bottom" color="pink darken-1" dark>
        I'm an alert with a bottom border and pink color
      </v-alert>
      <v-alert border="left" color="indigo" dark>
        I'm an alert with a border left type info
      </v-alert>
    </v-app>
  </div>
</template>

<script>
export default {};
</script>

<style>
/* Sample `apply` at-rules with Tailwind CSS
.container {
@apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/
.container {
  margin: 0 auto;
  min-height: 100vh;
  text-align: center;
  /* background-color: aquamarine; */
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.links {
  padding: 15px 15px;
}
</style>
