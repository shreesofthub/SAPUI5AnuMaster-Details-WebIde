sap.ui.define(
	["hckt/validation/controller/baseController",
		"sap/ui/model/Filter",
		"sap/ui/model/FilterOperator",
		"../model/formatter"
	],
	function(oBaseController, filter, filterOperator,Formatter) {
		return oBaseController.extend("hckt.validation.controller.master", {
			formatter:Formatter,
			onInit:function(){
				this.oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			},
			onItemPress: function(oEvent) {
				var getListItem = oEvent.getParameter("listItem");
				var bindingPath = getListItem.getBindingContextPath();
				// var oApp = this.getId("idApp--idSplit");
				// var oApp = this.getView().getParent().getParent();
				// var oApp        = new sap.ui.getCore().byId("idApp--idSplit");
				// var oDetailView = oApp.getDetailPages()[1];
				// oDetailView.bindElement(bindingPath);
				// oApp.to(oDetailView);
				var sPathIndex = bindingPath.split("/")[bindingPath.split("/").length - 1];
				this.oRouter.navTo("detail",{
					id:sPathIndex
				});
			},
			onNext: function() {
				// var oApp = this.getId("idSplit");
				var oApp = this.getView().getParent().getParent();
				oApp.to("idDetail");
			},
			onSort: function() {
				var oSorter = null;
				var oList = this.getView().byId("idList");
				if (!oList.getBinding("items").aSorters[0]) {
					var oSorterA = new sap.ui.model.Sorter({
						path: "name",
						descending: false,
						group: true
					});
					oSorter = oSorterA;
				} else if (oList.getBinding("items").aSorters[0].bDescending === false) {
					var oSorterD = new sap.ui.model.Sorter({
						path: "name",
						descending: true,
						group: true
					});
					oSorter = oSorterD;
				} else if (oList.getBinding("items").aSorters[0].bDescending === true) {
					var oSorterA = new sap.ui.model.Sorter({
						path: "name",
						descending: false,
						group: true
					});
					oSorter = oSorterA;
				}
				oList.getBinding("items").sort(oSorter);
			},
			onLiveChange: function(event) {
				var sQuery = event.getParameter("query");
				if (!sQuery) {
					var liveQuery = event.getParameter("newValue");
					sQuery = liveQuery;
				}
				var nameFilter = new filter("name", filterOperator.Contains, sQuery);
				var categoryFilter = new filter("category", filterOperator.Contains, sQuery);
				var masterFilter = new filter({
					filters: [nameFilter, categoryFilter],
					and: false
				});
				var aFilter = [masterFilter];
				var oList = this.getView().byId("idList");
				var getBinding = oList.getBinding("items");
				getBinding.filter(aFilter);
			},
			onRefresh: function(event) {
				var onRefresh = event.getParameter("refreshButtonPressed");
				if (onRefresh) {
					var oList = this.getView().byId("idList");
					oList.getBinding("items").filter(null);
				}
			},
			onFilter: function() {
				var oFragmentPopup = new sap.ui.xmlfragment("hckt.validation.fragments.popup", this);
				this.getView().addDependent(oFragmentPopup);
				oFragmentPopup.bindAggregation("items", {
					path: "/filter",
					template: new sap.m.StandardListItem({
						title: "{price}"
					})
				});
				oFragmentPopup.open();
			},
			onValueSelect: function(event) {
				var oPrice = null;
				var oSelectedItem = event.getParameter("selectedItem");
				var selectedValue = oSelectedItem.getBindingContextPath().split("/")[2];
				if (selectedValue === "0") {
					oPrice = new filter("price", filterOperator.GT, 15);
				} else if (selectedValue === "1") {
					oPrice = new filter("price", filterOperator.LT, 15);
				} else if (selectedValue === "2") {
					oPrice = new filter("price", filterOperator.EQ, 15);
				}
				var aPrice = [oPrice];
				this.getView().byId("idList").getBinding("items").filter(aPrice);
			}
		});
	});