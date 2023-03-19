<template>
   {{ message }},bertemu dengan anda <br />
   anda mendapatkan nilai {{ number }}
</template>

<script>
export default {
   name: "TypesComponent",
   props: {
      message: String,
      number: {
         type: Number,
         default: 0,
      },
   },
};
</script>

<style></style>
