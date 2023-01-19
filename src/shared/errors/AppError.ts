class AppError {
  // readonly - Declara um campo que pode ser atribuído apenas no construtor da mesma classe.
  // Como os membros somente leitura não podem ser alterados fora da classe, eles precisam ser inicializados na declaração ou dentro do construtor da classe.
  public readonly message: string;
  public readonly statusCode: number;

  constructor(message: string, statusCode = 400) {
    this.message = message;
    this.statusCode = statusCode;
  }
}

export default AppError;
