function Calculadora() {
    this.display = document.querySelector('.display');

    this.capturaCliques = () => {
        document.addEventListener('click', e => {
            const el = e.target;
            if (el.classList.contains('btn-num')) this.addNumDisplay(el);
            if (el.classList.contains('btn-clear')) this.clear(el);
            if (el.classList.contains('btn-del')) this.del(el);
            if (el.classList.contains('btn-eq')) this.realizaConta(el);
            this.display.focus()
        })
    }

    this.addNumDisplay = el => this.display.value += el.innerText;
    this.clear = el => this.display.value = '';
    this.del = () => this.display.value = this.display.value.slice(0, -1);

    this.realizaConta = () => {
        let conta = this.display.value;

        try {
            conta = eval(conta);


            if(conta == NaN) {
                alert('Conta inválida1');
                return;
            }

            this.display.value = conta.toFixed(2);
        } catch(e) {
            alert('Conta inválida');
            return;
        }
    }

    this.capturaEnter = () => {
        this.display.addEventListener('keyup', (e) => {
            if (e.keyCode === 13) {
                this.realizaConta()
            }
        })
    }
    //! Inicia
    this.inicia = () => {
        this.capturaCliques();
        this.capturaEnter();
    }
}

const ativador = new Calculadora()

ativador.inicia()