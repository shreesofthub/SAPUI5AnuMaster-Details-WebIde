sap.ui.define(
	[],
	function() {
		sap.ui.core.Control.extend("hckt.validation.controls.CustomControl", {
			metadata: {
				properties: {
					"textDisplay":""
				},
				methods: {},
				events: {}
			},
			init: function() {

			},
			renderer: function(oRm, oControl) {
				// oRm.write("<h2>Using Custom Control</h2>");
				oRm.write("<h2>" + oControl.getTextDisplay() + "</h2>");
				oRm.write("<div id='mapPlaceHolder' style='border:2px solid red;width:98%;height:650px'></div>");
			}
		});
	});