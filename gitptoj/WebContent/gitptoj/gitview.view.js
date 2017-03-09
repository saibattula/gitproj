sap.ui.jsview("gitptoj.gitview", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf gitptoj.gitview
	*/ 
	//branch2
		//branch1
	//branch1 change
	getControllerName : function() {
		return "gitptoj.gitview";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf gitptoj.gitview
	*/ 
	createContent : function(oController) {
 		return new sap.m.Page({
			title: "Title branch 2 and 1",
			content: [
			
			]
		});
	}

});