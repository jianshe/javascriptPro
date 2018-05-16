//Es6 中类的定义及使用
class Coderer {
    name(val) {
        console.log(val);
        return val;
    }
    skill(val) {
        console.log(this.name('jspang') + ':' + 'Skill:' + val);
    }
    constructor(a, b) {
        this.a = a;
        this.b = b;
    }
    add() {
        return this.a + this.b;
    }
}
var jspang = new Coderer(1, 3);
jspang.name('技术胖');
jspang.skill('web');
jspang.add();

class htmlCode extends Coderer {

}
var htmlAuthor = new htmlCode;
htmlAuthor.name('html')