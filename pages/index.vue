<template>
  <v-app>
    <v-main>
      <v-container grid-list-md>
        <h1 class="text-center mb-5 orange--text text--lighten-1">
          Hey!! What to do today?
        </h1>
        <v-form @submit.prevent="add">
          <v-row justify="center" align-content="center">
            <v-col cols="12" md="8" sm="12">
              <v-text-field
                dense
                label="Write your Todo!!"
                v-model="name"
                single-line
                outlined
                :append-icon="mdiBorderColor"
              >
              </v-text-field>
            </v-col>
          </v-row>
        </v-form>
        <v-card class="mb-5">
          <v-card-title primary-title>
            Todo
          </v-card-title>
          <v-list>
            <!-- <v-list-item-group multiple> -->
            <v-list-item v-for="todo in todos" :key="todo.id">
              <!-- <template v-slot:default="{ active }"> -->
              <v-list-item-action>
                <v-checkbox
                  :input-value="todo.done"
                  @change="toggle(todo)"
                ></v-checkbox>
              </v-list-item-action>

              <v-list-item-content>
                <v-list-item-title v-text="todo.name"></v-list-item-title>
              </v-list-item-content>

              <v-list-item-action>
                <v-btn @click="remove(todo.id)">
                  <v-icon>{{ mdiDelete }}</v-icon>
                </v-btn>
              </v-list-item-action>
              <!-- </template> -->
            </v-list-item>
            <!-- </v-list-item-group> -->
          </v-list>
        </v-card>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import { mdiBorderColor, mdiDelete } from "@mdi/js";

export default {
  data() {
    return {
      name: "",
      done: false,
      mdiBorderColor,
      mdiDelete
    };
  },
  created() {
    this.$store.dispatch("todos/init");
  },
  computed: {
    todos() {
      return this.$store.state.todos.todos;
    }
  },
  methods: {
    add() {
      this.$store.dispatch("todos/add", this.name);
      this.name = "";
    },
    remove(id) {
      this.$store.dispatch("todos/remove", id);
    },
    toggle(todo) {
      this.$store.dispatch("todos/toggle", todo);
    }
  }
};
</script>
