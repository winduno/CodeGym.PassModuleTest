function Animal(name, weight) {
    this.name = name;
    this.weight = weight;

    this.setName = function (nameSet) {
        this.name = nameSet;
    }
    this.getName = function () {
        return this.name;
    }
    this.setWeight = function (weightSet) {
        this.weight = weightSet;
    }
    this.getWeight = function () {
        return this.weight;
    }
    this.toString = function () {
        return  this.name + " " + this.weight;
    }
}