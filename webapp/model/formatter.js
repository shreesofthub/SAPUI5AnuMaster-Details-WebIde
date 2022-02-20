sap.ui.define([], function() {
	return {
		setStatus: function(status) {
			if (status > 15) {
				return "Success";
			}
			else if(status < 15) {
				return "Warning";
			}
		}
	};
});