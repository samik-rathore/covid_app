import axios from 'axios';

const url='https://disease.sh/v3/covid-19';

export const fetchData = async() =>{
    try{
        const{ data:{cases,deaths,recovered}} = await axios.get(`${url}/all`);
        
        return {cases,deaths,recovered};
    }catch(error){
        console.log(error);  
    }
}

export const fetchDailyData = async()=>{
    try{
        const {data} =await axios.get(`${url}/historical/all?lastdays=100`);
     
        const dates = Object.keys(data.cases);
        const cases = Object.values(data.cases);
        const deaths = Object.values(data.deaths);

        const modifiedData = {dates,cases,deaths};  
             
        return modifiedData;
    }catch(error){
        console.log(error);
    }
}

export const fetchCountries = async()=>{
    try{
        const {data} = await axios.get(`${url}/countries`);

        const countries = data.map((country_details)=>(country_details['country']));
        console.log(countries['0']);
        const list = Object.values(countries); 
        console.log(typeof list);
        return countries;
        
    }catch(error){
        console.log(error);
    }
}