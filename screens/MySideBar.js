import React from "react";
import Sidebar from 'react-native-sidebar';

const MySideBar = props => {
	return (
		<Sidebar
				ref={(ref) => this._drawer = ref}
				leftSidebar={ this.renderLeftSidebar() }
				rightSidebar={ this.renderRightSidebar() }
				style={{ flex: 1, backgroundColor: 'black' }}>
			{ this.renderContent() }
		</Sidebar>
	)
}

export default MySideBar;