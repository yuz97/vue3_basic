<template>
   <input
      type="text"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)" />

   <!-- penggunaan slot aka tamplate  -->
   <header>Header</header>
   <slot />
   <footer>Footer</footer>
</template>

<script>
export default {
   props: ["modelValue"],
};
</script>

<style></style>
