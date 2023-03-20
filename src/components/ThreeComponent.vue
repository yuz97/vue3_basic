<template>
   <h3>{{ provideAuthor }}</h3>
</template>

<script>
export default {
   name: "ThreeComponent",
   inject: ["provideAuthor"],
};
</script>

<style></style>
