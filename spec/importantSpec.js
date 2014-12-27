describe("important", function() {
	it("Should be sent", function() {
		spyOn(jQuery, "ajax");

		important.send({"Jeg ar": Math.random()});

        expect(jQuery.ajax).toHaveBeenCalledWith({             method:
"POST", url: "/important_information",             data: information
});     }); });
