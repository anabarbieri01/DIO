//1. Crie a classe ContaBancaria, que possui os parâmetros agencia, numero, tipo e saldo;
class ContaBancaria{ //ABRE CHAVE CLASS CONTABANCARIA
    constructor(agencia, numero, tipo){
        this.agencia = agencia;
        this.numero = numero;
        this.tipo = tipo;
        this.saldo = 0;
    }


        sacar(valor){
            if (valor > this._saldo){
                return "Operação negada.";
            }
            this._saldo = this._saldo - valor;
            return this._saldo;
        }

        depositar(valor){
            this._saldo = this._saldo + valor;

            return this._saldo;
        }

        get saldo(){
            return this._saldo;
        }

        set saldo(valor){
            this._saldo = valor;
        }
}//FECHA CHAVE CLASS CONTA BANCARIA

class ContaCorrente extends ContaBancaria {//ABRE CHAVE CLASS CONTACORRENTE
    constructor(agencia, numero, cartaoCredito) {
        super(agencia, numero);
            this.tipo = 'corrente';
            this._cartaoCredito = cartaoCredito;
        }

        set cartaoCredito(valor){
            this._cartaoCredito = valor;
        }

        get cartaoCredito(){
            return this._cartaoCredito;
        }
}//FECHA CHAVE CLASS CONTACORRENTE

class ContaPoupanca extends ContaBancaria{//ABRE CHAVE CLASS CONTAPOUPANCA
    constructor(agencia, numero){
        super(agencia, numero);
           this.tipo = 'poupança';
    }
}//FECHA CHAVE CLASS CONTAPOUPANCA

class ContaUniversitaria extends ContaBancaria{//ABRE CHAVE CONTAUNIVERSITARIA
    constructor(agencia, numero){
        super(agencia, numero);
            this.tipo = 'universitaria';
    }
    sacar(valor){
        if (valor > 500){
            return "Operação Negada.";
        }

        this._saldo = this._saldo - valor;
        return this._saldo;
    }

}

