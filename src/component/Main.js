import React from 'react';
import HornedBeasts from './HornedBeasts';
import jsondata from "../assets/data.json";
class Main extends React.Component {
    filling() {
        return jsondata.map((data) => {
          return (
            <HornedBeasts
              img={data.image_url}
              describtion={data.description}
              title={data.title}
            />
          );
        });
      }
    render() {
        return (
            <main>
               <>{this.filling()} </>
            </main>
        )
    }
}
export default Main;