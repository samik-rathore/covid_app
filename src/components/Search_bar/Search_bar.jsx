import React,{useState,useEffect} from 'react';
import {NativeSelect, FormControl} from '@material-ui/core';

import styles from './Search_bar.module.css';

import {fetchCountries} from '../../api';

const Search_bar = () =>{
    const [fetchedCountries,setFetchedCountries] = useState([]);

    useEffect(()=>{
        const fetchAPI = async () =>{
            setFetchedCountries(await fetchCountries);
        }

        fetchAPI();
    },[setFetchedCountries])
    
    
    const countries = Object.keys(fetchedCountries);
    console.log(countries);

    return(
        <FormControl className={styles.container}>
            <NativeSelect>
                <option value="global">Global</option>
                {countries.map((country)=><option value={country}>{country}</option>)}
            </NativeSelect>
        </FormControl>
    )
}

export default Search_bar;

