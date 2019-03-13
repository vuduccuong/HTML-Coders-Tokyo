function Cat(){
    this.stomach = [];
};

Cat.prototype.eat = function(mouse){
    this.stomach.push(mouse);
    return this;
};

function Mouse(name){
    this.name = name;
};

let tom = new Cat();
let jerry = new Mouse('Jerry');

tom.eat(jerry);

console.log(tom);
