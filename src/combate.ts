export abstract class Personagem {
  protected abstract emoji: string;

  constructor(
    protected nome: string,
    protected ataque: number,
    protected vida: number,
  ) {}

  atacar(personagem: Personagem): void {
    this.attack();
    personagem.perderVida(this.ataque);
  }

  perderVida(forcaAtaque: number): void {
    this.vida -= forcaAtaque;
    console.log(
      `${this.emoji} - ${this.nome} Agora tem ${this.vida} de vida...`,
    );
  }

  abstract attack(): void;
}

export class Guerreiro extends Personagem {
  protected emoji = '\u{1F9DD}';
  attack(): void {
    console.log(this.emoji + 'GUERREIRA AOO ATAQUE!!!');
  }
}
export class Monstro extends Personagem {
  protected emoji = '\u{1F9DF}';
  attack(): void {
    console.log(this.emoji + 'MONSTER ATTACK!!!');
  }
}

const guerreiro = new Guerreiro('Guerreiro', 100, 1000);
const monstro = new Monstro('Monstro', 87, 1000);

guerreiro.atacar(monstro);
guerreiro.atacar(monstro);
guerreiro.atacar(monstro);
monstro.atacar(guerreiro);
monstro.atacar(guerreiro);
monstro.atacar(guerreiro);
