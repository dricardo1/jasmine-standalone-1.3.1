function important () {};

important.send = function (information) {
	jQuery.ajax({
			method: "POST",
			url: "/important_information",
			data: {"Jeg ar": "toll"}
		});

};