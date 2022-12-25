import {defineStore} from "pinia"
import $axios from "@/lib/axios";

export const useAddressApiStore = defineStore('addressApiStore', () => {


    const getCity = async (q, deliveryType) => {

        const url = `api/addresses/search/city?q=${q}&delivery_type=${deliveryType}`;

         const data = {
             q:'Жит',
             'delivery_type':'nova_postha'
         }

        await $axios.post(url, data, {
            headers: {
                "Content-Type": "multipart/form-data",
            },
        }).then((res) => {
            console.log(res);

        }).catch(function (error) {
            console.log(error);
            alert(error.message);
        });

        // await $axios.get(url).then((res) => {
        //     console.log(res);
        //
        // }).catch(function (error) {
        //     console.log(error);
        //     alert(error.message);
        // });
    }

    return {
        getCity
    }

})
