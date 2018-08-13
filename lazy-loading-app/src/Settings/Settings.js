import React, { Component } from 'react';
import LazyEditProfile from './EditProfile';

class Settings extends Component {
    state = {
        editable: false
    };

    editProfile = () => {
        this.setState({ editable: true });
    };

    render() {
        return (
            <div>
                <div>
                    <button onClick={this.editProfile}>Edit Profile</button>
                    {this.state.editable && <LazyEditProfile />}
                </div>
            </div>

        )
    }
}

export default Settings;