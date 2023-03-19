<template>
   <div class="hello">
      <h1>{{ msg }}</h1>
      <p>{{ pesan }}</p>
      nama saya adalah {{ saya }} <br />
      <button @click="changeName">ubah</button>
   </div>
</template>

<script>
export default {
   name: "HelloWorld",
   props: ["msg", "pesan"],
   data() {
      return {
         saya: "ridwan",
      };
   },
   methods: {
      changeName() {
         this.saya = "yusri";
      },
   },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
   margin: 40px 0 0;
}
ul {
   list-style-type: none;
   padding: 0;
}
li {
   display: inline-block;
   margin: 0 10px;
}
a {
   color: #42b983;
}
</style>
