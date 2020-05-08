function Cat() {
    this.stomach = [];
}

Dog.prototype.eat = function(mouse) {
    this.stomach.push(mouse);
}

module.exports = Cat;