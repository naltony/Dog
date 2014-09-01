describe('unit person', function(){

    var person = new Person();

    it('Should return Nirit as name', function() {
        expect(person.getName()).toBe('Nirit');
    })
});