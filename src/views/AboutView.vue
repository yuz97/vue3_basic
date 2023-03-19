<template>
   <div class="about">
      <h1>This is an about page</h1>
      <p>ini adalah buah {{ buah }}</p>
      <button @click="changeFruite()">ubah</button>
      <br />
      <h2 v-html="pesan"></h2>

      <!-- <h4>{{ parseInt(num1) + parseInt(num2) }}</h4> -->
      <!-- <h4>{{ jumlah }}</h4> -->
      <h5>{{ discount }}</h5>
      <input type="text" v-model="num1" />
      <input type="text" v-model="num2" />
      <button @click="addDiscount">discount %</button>
      <br />
      <slot-component>
         <template v-slot:default>
            <h3>ini adalah slot default</h3>
         </template>
         <template v-slot:slotSatu>
            <h3>ini adalah satu</h3>
         </template>
         <template v-slot:slotDua>
            <h3>ini adalah dua</h3>
         </template>
      </slot-component>
   </div>
</template>

<script>
import SlotComponent from "@/components/SlotComponent.vue";
export default {
   components: { SlotComponent },
   data() {
      return {
         buah: "apel",
         pesan: `<div style="color:gold; background-color: salmon;">ini menggunakan v-html ,vue js itu mudah dan menyenangkan</div>`,
         num1: 0,
         num2: 0,
      };
   },

   // computed property
   computed: {
      discount: {
         get() {
            return parseInt(this.num1) + parseInt(this.num2);
         },
         set(val) {
            this.num1 -= val;
            this.num2 -= val;
         },
      },
      // jumlah() {
      //    if (parseInt(this.num1) > parseInt(this.num2)) {
      //       return `angka pertama lebih besar`;
      //    }
      //    return `angka kedua lebih besar`;
      // },
   },

   methods: {
      changeFruite() {
         this.buah = "jeruk";
      },

      addDiscount() {
         this.discount = 500;
      },
   },
};
</script>
