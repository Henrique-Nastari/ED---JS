import Pilha from "../src/Pilha";


let p;

beforeEach(() => {
    p = new Pilha();
})

test("Se a pilha acabou de ser criada, ela deve estar vazia.", () => {
    expect(p.isEmpty()).toBe(true);
})

test("Se eu inserir um elemento, a pilha não pode estar mais vazia.", () => {
    p.push(1);
    expect(p.isEmpty()).toBe(false);
    expect(p.top()).toBe(1);
})

test("Se eu inserir 5 elementos a pilha vai está cheia", () => {
    p.push(1);
    p.push(2);
    p.push(3);
    p.push(4);
    p.push(5);
    expect(p.isFull()).toBe(true);
    expect(p.isEmpty()).toBe(false);
    expect(p.top()).toBe(5);
    expect(p.length()).toBe(5);
})
test("Quem está no topo?", () => {
    p.push(1);
    p.push(2);
    p.push(3);
    p.pop();
    p.pop();
    expect(p.top()).toBe(1);
    p.pop();
    expect(p.isEmpty()).toBe(true);
    expect(p.length()).toBe(0);
})