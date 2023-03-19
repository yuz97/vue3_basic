<template>
   <div class="contact">
      <div :class="status ? 'success' : 'failed'">status</div>
      <button @click="changeButton">change</button>
      <br />
      <ChildComponent ref="childComponent" @child-click="onPress" />
      <button @click="clickSaya">click me</button>
      <div class="">{{ message }}</div>
      <KomponenDua
         :model-value="message"
         @update:model-value="message = $event" />
      <br />
      <KomponenDua> ini adalah bagian aside / section </KomponenDua>
   </div>
</template>

<script>
import ChildComponent from "@/components/ChildComponent.vue";
import KomponenDua from "@/components/KomponenDua.vue";
export default {
   components: { ChildComponent, KomponenDua },
   data() {
      return {
         status: true,
         message: "",
      };
   },
   methods: {
      changeButton() {
         this.status = !this.status;
      },
      onPress() {
         console.log("click dari child");
      },
      clickSaya() {
         this.$refs.childComponent.onClick();
      },
   },
};
</script>

<style scoped>
.success {
   color: green;
}
.failed {
   color: red;
}
</style>
