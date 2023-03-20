<template>
   <one-component />
</template>

<script>
import OneComponent from "@/components/OneComponent.vue";
export default {
   components: {
      OneComponent,
   },
   data() {
      return {
         author: "yusri san",
      };
   },
   // untuk melemparkan data ke komponen  dari parent ke child terdalam dengan menggunakan provide
   provide() {
      return {
         provideAuthor: this.author,
      };
   },
};
</script>

<style></style>
