<template>
   <div class="home">
      <HelloWorld
         msg="Welcome to Your Vue.js App"
         pesan="ini adalah halaman home"
         :saya="saya" />
      <child-component />
   </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import ChildComponent from "@/components/ChildComponent.vue";

export default {
   name: "HomeView",
   components: {
      HelloWorld,
      ChildComponent,
   },
   data() {
      return {
         saya: "",
      };
   },
};
</script>
