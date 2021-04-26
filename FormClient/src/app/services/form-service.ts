import axios from 'axios';

const API_URL = "http://localhost:3000/api/";

let serviceProvider: string;

export class FormService{

    formNames: any[]=[];

    constructor(){
    }

    createForm(name){
        return axios
        .post(API_URL + "create/form",{
            name
        });
    }

    findForm(){
        axios
        .get(API_URL + "list/form")
        .then(response=>{
            //console.log(response.data[0].nombre_formulario);
            for(let i= 0; i < response.data.length; i++){
                this.formNames[i] = response.data[i].nombre_formulario;
            }
        });

        return this.formNames;
    }
}