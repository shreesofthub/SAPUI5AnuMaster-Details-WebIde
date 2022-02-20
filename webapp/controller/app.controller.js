sap.ui.define(
	["hckt/validation/controller/baseController",
		"hckt/validation/model/model"
	],
	function(oBaseController,oModel) {
		return oBaseController.extend("hckt.validation.controller.app", {
			onInit: function() {
				// var appViewId = this.getView().byId("idSplit");
				
// Below Commented Code applied at Component.js init method.				
				// var jsonModel = oModel.getJsonModel("model/mockData/flowersData.json");
				// this.setModel(jsonModel);
				// var oMasterView = new sap.ui.view({
				// 	id: "idMaster",
				// 	viewName: "hckt.validation.view.master",
				// 	type: sap.ui.core.mvc.ViewType.XML
				// });
				// var oDetailView = new sap.ui.view("idDetail", {
				// 	viewName: "hckt.validation.view.detail",
				// 	type: sap.ui.core.mvc.ViewType.XML
				// });
				// var oDummyView = new sap.ui.view("idDummy", {
				// 	viewName: "hckt.validation.view.dummy",
				// 	type: sap.ui.core.mvc.ViewType.XML
				// });
				// var thirdView = new sap.ui.view("idThird", {
				// 	viewName: "hckt.validation.view.third",
				// 	type: sap.ui.core.mvc.ViewType.XML
				// });
				// appViewId.addMasterPage(oMasterView);
				// appViewId.addDetailPage(oDummyView);
				// appViewId.addDetailPage(oDetailView);
				// // appViewId.setInitialDetail(oDummyView);
				// appViewId.addPage(thirdView);
			}
		});
	});