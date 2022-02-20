sap.ui.define(
	["hckt/validation/controller/baseController",
		"sap/m/MessageBox",
		"sap/m/MessageToast"
	],
	function(baseController, msgBox, msgToast) {
		return baseController.extend("hckt.validation.controller.detail", {
			oMap:null,
			onInit: function() {
				var idProductId = this.getView().byId("idProductId");
				idProductId.bindText("productId");
				this.oRouter = this.getOwnerComponent().getRouter();
				this.oRouter.attachRoutePatternMatched(this.bindElement, this);

			},
			bindElement: function(oParams) {
				var sPath = oParams.getParameters().arguments.id;
				sPath = "/flowers/" + sPath;
				this.getView().bindElement(sPath);
			},
			onBack: function() {
				var oApp = this.getView().getParent().getParent();
				oApp.to("idMaster");
			},
			onValueHelp: function(event) {
				this.selectedValueId = event.getSource().getId();
				this.getPopup("/supplier", "{from}", "");
			},
			onPressFilter: function() {
				this.getPopup("/country", "{name}", "{code}");
			},
			onValueSelect: function(event) {
				var selectedItem = event.getParameter("selectedItem");
				sap.ui.getCore().byId(this.selectedValueId).setValue(selectedItem.getTitle());
			},
			onAccept: function() {
				msgBox.confirm("Would youlike to Accept the order", {
					title: "Confirmation Required",
					onClose: this.popupMsg
				});
			},
			popupMsg: function(choice) {
				if (choice === 'OK') {
					msgToast.show("Your order has been Accepted");
				} else if (choice === 'CANCEL') {
					msgToast.show("Request Cancelled by user");
				}
			},
			onReject: function() {
				msgToast.show("Order has been cancelled");
			},
			onItemPress: function() {
				var oAppView = this.getId("idApp--idSplit");
				// var idThirdView = oAppView.getPage
				var idThirdView = this.getId("idThird");
				oAppView.to(idThirdView);
			},
			onValidation: function() {
				var idInput = this.getId("idDetail--idInput");
				if (idInput.getValue() === "") {
					idInput.setValueState("Error");
				} else {
					msgToast.show(idInput.getValue());
					var idDate = this.getId("idDetail--idDate");
					if (idDate.getValue() > new Date()) {
						msgToast.show("given date should not more than today");
					}
				}
			},
			onAfterRendering:function(){
				if(this.oMap === null){
					this.oMap = new google.maps.Map( document.getElementById("mapPlaceHolder" ),{
						zoom: 10,
						center: {lat: 20.59, lng: 78.96}
					});
				}
			},
			onGoogleSearch:function(oEvent){
				var query = oEvent.getParameter("query");
				var oGeoCoder = new google.maps.Geocoder();
				var that = this;
				oGeoCoder.geocode({address:query},
					function(results,status){
						if(status === 'OK'){
							var firstItem = results[0];
							var loc ={
								lat:firstItem.geometry.location.lat(),
								lng:firstItem.geometry.location.lng()
							}
							that.oMap.setCenter(loc);
							new google.maps.Marker({
								map:that.oMap,
								title:query,
								position:loc
							})
						}
					}
				);
			}
		});
	});