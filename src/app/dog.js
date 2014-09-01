(function() {

    function Animal () {

        var alive = true;

        this.isAlive = function() {
            return alive;
        }
        this.die = function() {
            alive = !alive;
        }
    }

    function Dog (name) {

        Animal.bind(this)();
        if (name != undefined) {
            this.name = name;
        }
    }

    Dog.prototype = new Animal();
    Dog.prototype.name = 'My name';

    var d = new Dog();
    console.log(d.name);

    if (d.__proto__ == Dog.prototype) {
        console.log('Proto equal!! :-)')
    }

    console.log('Dog is alive: ' + d.isAlive());

    d.die();

    console.log('Dog is alive: ' + d.isAlive());

    console.log(d.alive);

})();