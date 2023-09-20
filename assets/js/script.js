/* 

Descrizione:

Attraverso l'apposita API di Boolean https://flynn.boolean.careers/exercises/api/random/mail 

generare 10 indirizzi email e stamparli in pagina all'interno di una lista.


Bonus:

Far comparire gli indirizzi email solamente quando sono stati tutti generati.


Consigli:

iniziamo a capire usando postman cosa ci restituisce una chiamata all'endpoint :puntare_su_2: qui sopra.

dove inserisco la chiamata ajax? uso una lifecycle hook? quale?

devo ottenere 10 email tramite la chiamata,

come faccio a ripetere un operazione cosí tante volte senza riscrivere la stessa implementazione? 

conosco uno strumento che mi puó tornare utile?

dové la CDN di axios? https://cdnjs.com/libraries/axios

*/


const { createApp } = Vue;

createApp({
    data() {
        return {
            

            listMail: [],


        }

    },
    mounted() {//uso il loop for per generare dentro mounted 10 mail 
        for (let index = 0; index < 10; index++) {

            axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
                .then(response => {

                    //Pusho le mail nell'array vuoto
                    this.listMail.push(response.data.response);
                    console.log(listMail);
                })


        }
    },
    

}).mount('#app');
