import {richtingen} from '/studierichtingen.js';

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
          studierichting: "",
          extravak: "",
          //geboortedatum: new Date().toISOString().substr(0, 10),
        },
        menu: false,
        richtingen: richtingen(),
        extraVakken: ["Vak1","Vak2","Vak3"],
        loading4: false

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
      },
      heeftExtraVak(){
        if(this.registration.studierichting.includes("1A")){
          return true;
        }
      },
      readID() {
        this.loading4 = true;
        //console.log("running");
        //header('Access-Control-Allow-Origin: *');
        axios.get("http://localhost:55515/eid", {
          method: 'GET',
         /* headers: {
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json',
          },*/
          withCredentials: false,
        })
        .then((response)  =>  {
          this.loading4 = false;
         console.log(response)
        }, (error)  =>  {
          this.loading4 = false;
          console.log(response)
      })

      }
    },
    computed:{
      firstStepComplete(){
        if(this.heeftExtraVak()){
          return  !(this.registration.email && this.registration.achternaam && this.registration.voornaam && this.registration.studierichting && this.registration.geboortedatum && this.registration.extravak);
        }else{
          return  !(this.registration.email && this.registration.achternaam && this.registration.voornaam && this.registration.studierichting && this.registration.geboortedatum);
        }
        
      },
    
    },
     watch: {
      menu (val) {
        val && setTimeout(() => (this.$refs.picker.activePicker = 'YEAR'))
      },

    },
  });

  