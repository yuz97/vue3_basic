<template>
   <h2>ini adalah child component</h2>
   <button v-on:click="onPress">click</button>
</template>

<script>
export default {
   name: "ChildComponent",
   data() {
      return {};
   },
   emits: ["child-click"],
   methods: {
      onPress(val) {
         this.$emit("child-click", val);
      },
      onClick() {
         console.log("ini dipanggil dari parents");
      },
   },
};
</script>

<style></style>
