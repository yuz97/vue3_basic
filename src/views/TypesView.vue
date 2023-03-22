<template>
   <types-component :message="`Hi Yuz senang`" /> <br />
   <button @click="clickMixin">klik</button>
   <ul>
      <ol>
         {{
            nama
         }}
      </ol>
      <ol>
         {{
            message
         }}
      </ol>
   </ul>
</template>

<script>
import TypesComponent from "@/components/TypesComponent.vue";
import basic from "@/mixins/basic";
import merge from "@/mixins/merge";
export default {
   components: { TypesComponent },
   mixins: [basic, merge],
   data() {
      return {
         nama: "yusri saja",
      };
   },
};
</script>

<style></style>
