

const app = new Vue({
    el:'#app',
    data() {
      return {
        step:1,
        registration:{
          voornaam: "",
          achternaam: "",
          email: "",
        }
      }
    },
    methods:{
      prev() {
        this.step--;
      },
      next() {
        this.step++;
      },
      submit() {
        alert('Submit to blah and show blah and etc.');      
      }
    },
    computed:{
      firstStepComplete(){
        return  !(this.registration.email && this.registration.achternaam && this.registration.voornaam);
      }
    }
  });

  