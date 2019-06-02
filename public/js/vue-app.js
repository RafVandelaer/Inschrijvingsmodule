import {richtingen} from '/studierichtingen.js'
//import { Validator } from '/vee-validate';




const app = new Vue({
    el:'#app',
    data() {
      return {
        step:1,
        registration:{
          voornaam: "",
          achternaam: "",
          email: "",
          //geboortedatum: new Date().toISOString().substr(0, 10),
        },
        menu: false,
        richtingen: richtingen(),
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
        return  !(this.registration.email && this.registration.achternaam && this.registration.voornaam && this.registration.studierichting && this.registration.geboortedatum);
      },
      heeftExtraVak(){
        return 
      }
    },
     watch: {
      menu (val) {
        val && setTimeout(() => (this.$refs.picker.activePicker = 'YEAR'))
      }
    },
  });

  