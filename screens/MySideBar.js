import React from "react";
import { Text } from "react-native";
import Sidebar from 'react-native-sidebar';

const MySideBar = props => {

	const renderLeftSidebar = () => {
		return <Text> Left side bar</Text>;
	}

	const renderRightSidebar = () => {
		return <Text> Right side bar</Text>;
	}	
	return (
		<Sidebar
				ref={(ref) => this._drawer = ref}
				leftSidebar={ <Text> Left side bar</Text> }
				rightSidebar={ <Text> Left side bar</Text> }
				style={{ flex: 1, backgroundColor: 'black' }}>
			{ <Text>Hello there !</Text> }
		</Sidebar>
	)
}

export default MySideBar;