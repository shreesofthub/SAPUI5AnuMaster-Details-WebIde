sap.ui.define(
	["sap/ui/model/json/JSONModel"],
	function(jsonModel){
		return{
			getJsonModel:function(sPath){
				var modelJson = new jsonModel();
				modelJson.loadData(sPath);
				return modelJson;
			}
		};
});