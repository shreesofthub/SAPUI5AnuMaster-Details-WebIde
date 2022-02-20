sap.ui.define(
	["sap/ui/core/mvc/Controller"],
	function(controller) {
		return controller.extend("hckt.validation.controller.baseController", {
			selectedValueId: null,
			getCore: function() {
				var _oCore = new sap.ui.getCore();
				return _oCore;
			},
			setModel: function(sModel) {
				return this.getCore().setModel(sModel);
			},
			getModel: function(sModel) {
				return this.getCore().getModel(sModel);
			},
			getId: function(id) {
				return this.getCore().byId(id);
			},
			getPopup: function(sPath, rPath, desc) {
				// var oDetail = this.getId("idSplit").getParent().getDetailPages()[0];
				var oDetail = this.getView().getParent().getParent().getDetailPages()[0];
				var oPopup = new sap.ui.xmlfragment("hckt.validation.fragments.popup", this);
				oDetail.addDependent(oPopup);
				oPopup.bindAggregation("items", {
					path: sPath,
					template: new sap.m.StandardListItem({
						title: rPath,
						description: desc
					})
				});
				return oPopup.open();
			}
		});
	});