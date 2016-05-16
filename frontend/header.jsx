import React from "react"

class Header extends React.Component {
    render() {
        return (
            <div className="app-header">
                Current picture: { this.props.picture }
            </div>
        )
    }
}

export default Header
