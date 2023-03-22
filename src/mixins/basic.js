const basic = {
   mounted() {
      console.log("ini adalah basic mixins");
   },
   methods: {
      clickMixin() {
         console.log("ini dari mixin");
      },
   },
};

export default basic;
