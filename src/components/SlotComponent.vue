<template>
   <div class="header">Title</div>
   <div class="default"><slot /></div>
   <div class="content"><slot name="slotSatu" /></div>
   <div class="content2"><slot name="slotDua" /></div>
   <div class="footer">Footer</div>
</template>

<script>
export default {
   name: "SlotComponent",
};
</script>

<style></style>
