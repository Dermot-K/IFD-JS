describe("Calculator", function() {
    describe("Addition tests", function() {
        it("Should return 42", function() {
            expect(addition(20,22)).toBe(42);
        });
        it("Should return 26", function() {
            expect(addition(7, 19)).toBe(26);
        });
    });
});