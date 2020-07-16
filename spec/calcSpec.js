describe ("Calculator", function() {

    beforeEach(function() {
        calc = new Calculator;    
    });

    describe("Calculator", function() {
        describe("Addition tests", function() {
            it("Should return 42", function() {
                calc.add(20);
                calc.add(22);
                expect(calc.value).toBe(42);
            });
            it("Should return 26", function() {
                calc.add(7);
                calc.add(19);
                expect(calc.value).toBe(26);
            });
            it("should return an error if we don't supply two numbers", function() {
                spyOn(window, "alert");
                calc.add("Hitchhikers");
                expect(window.alert).toHaveBeenCalledWith("Error!");
            });
        });
    });
});