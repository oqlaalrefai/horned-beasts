import React from 'react';
import HornedBeasts from './HornedBeasts';
import data from '../assets/data.json'
import SelectedBeast from './SelectedBeast';

class Main extends React.Component {

    
    render() {
        return (
          
            <div className='cardDiv'>
                <SelectedBeast/>
                {data.map((element,index) => {
                    return (<HornedBeasts title={element.title} url={element.image_url} description={element.description} key={index}/>
                    );
                })}

            </div>
        );

    }
}
export default Main;