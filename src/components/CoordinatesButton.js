import React from 'react';

class CoordinatesButton extends React.Component {
    nextStep = (event) => {
        this.props.onReceiveCoordinates([event.clientX, event.clientY]);
    }
    render(){
        return (
            <div>
                <button onClick={this.nextStep}>Hello</button>
            </div>
        )
    }

}
export default CoordinatesButton