import React from 'react';
import HornedBeasts from './HornedBeasts';


class Main extends React.Component {

  render() {
    return (
      <main>
          {
            this.props.HornedData.map((selectedBeastItem) => {
              return (
                <HornedBeasts
                  imageUrl={selectedBeastItem.image_url}
                  title={selectedBeastItem.title}
                  description={selectedBeastItem.description}
                  keyword={selectedBeastItem.keyword}
                  horns={selectedBeastItem.horns}
                  displayModal={this.props.displayModal}
                />
              )
            })
          }

      </main>
    )
  }
}

export default Main;