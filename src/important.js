function important () {};

important.send = function (information) {
	jQuery.ajax({
			method: "POST",
			url: "/important_information",
			data: {"Ich bin": "toll"}
		});

};