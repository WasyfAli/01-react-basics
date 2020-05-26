import React, { PureComponent } from 'react'

class RegComp extends PureComponent {
    render() {
        console.log('Regular component')
        return (
            <div>
                Regular Component {this.props.name}
            </div>
        )
    }
}

export default RegComp
