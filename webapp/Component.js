sap.ui.define(
	["sap/ui/core/UIComponent"
	// ,"hckt/validation/model/model"
	],
	function(component
	// ,model
	) {
		return component.extend("hckt.validation.Component", {
			metadata: {
				"manifest":"json"
			},
			init: function() {
				// var jsonModel = model.getJsonModel("model/mockData/flowersData.json");
				// this.setModel(jsonModel);
				component.prototype.init.apply(this);
				var oRouter = this.getRouter();
				oRouter.initialize();
			},
			// createContent: function() {
			// 	var oAppView = new sap.ui.view("idApp", {
			// 		viewName: "hckt.validation.view.app",
			// 		type: sap.ui.core.mvc.ViewType.XML
			// 	});
			// 	return oAppView;
			// },
			destroy: function() {

			}
		});
	});