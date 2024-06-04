function Person(name, age) {
    let _name = name;
    let _age = age

    this.getName = function(){
        return _name
    }

    this.setName = function(valor) {
        _name = valor
    }

    this.getAge = function() {
        return _age
    }

    this.setAge = function(valor) {
        _age = valor
    }
}


const p1 = new Person('liander', 19)
p1.setName('anderson')
console.log(p1.getName())
console.log(p1.getAge())
console.log(p1)
