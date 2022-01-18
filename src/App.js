import React from 'react';

import Cards from './components/Cards/Cards';
import Chart from './components/Chart/Chart';
import Search_bar from './components/Search_bar/Search_bar';
import styles from './App.module.css';
import {fetchData} from './api';

class App extends React.Component{

    state={
        data:{},
    }

    async componentDidMount(){
        const fetchedData = await fetchData();

        this.setState({data:fetchedData}); 
    }
    render(){
        const {data} = this.state;
        return(
            <div className={styles.container}>
                <Cards data={data}/>
                <Search_bar/>
                <Chart/>
                
            </div>
        );
    }
}

export default App;
