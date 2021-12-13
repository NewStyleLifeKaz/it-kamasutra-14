import React from "react";
import reactDom from "react-dom";
import SamuraiJSApp from "./App";


it('renders without crashing', () => {
	const div = document.createElement('div');
	reactDom.render(<SamuraiJSApp />, div);
	reactDom.unmountComponentAtNode(div); // демонтировать 
});
