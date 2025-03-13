class Hero {
  constructor(name, age, type) {
    this.name = name;
    this.age = age;
    this.type = type;
  }

  attack() {
    let attack;
    switch (this.type.toLowerCase()) {
      case 'guerreiro':
        attack = 'uma espada';
        break;
      case 'mago':
        attack = 'magia';
        break;
      case 'monge':
        attack = 'artes marciais';
        break;
      case 'ninja':
        attack = 'shuriken';
        break
      default:
        attack = 'um ataque desconhecido';
    }
    console.log(`O ${this.type} atacou usando ${attack}`);
  }
}

const heroOne = new Hero('Leônidas', 30, 'guerreiro');
const heroTwo = new Hero('Mestre dos Magos', 150, 'mago');
const heroThree = new Hero('Jiraya', 25, 'ninja');
const heroFour = new Hero('Buda', 40, 'monge');

heroOne.attack();
heroTwo.attack();
heroThree.attack();
heroFour.attack()