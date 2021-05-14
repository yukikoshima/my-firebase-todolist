<template>
  <div class="container">
    <h1 class="text-6xl">todos</h1>
    <ul>
      <li>{{ todos }}</li>
    </ul>
    <input type="text" />
    <button>追加</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "",
      done: false
    };
  },
  computed: {
    todos() {
      return this.$store.state.todos.todos;
    }
  }
};
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  text-align: center;
}
</style>
