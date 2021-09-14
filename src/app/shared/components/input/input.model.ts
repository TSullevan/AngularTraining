class InputModel {

    title: string;
    text: string;
    type: string;
    placeHolder: string;
    description: string;

    constructor() {
        this.title = '';
        this.text = '';
        this.type = 'text';
        this.placeHolder = '';
        this.description = '';
    }

    public AsName(): InputModel {
        this.title = 'Nome';
        this.type = 'text';
        this.placeHolder = 'Digite o Nome';
        return this;
    }
    public AsCpf(): InputModel {
        this.title = 'CPF';
        this.type = 'text';
        this.placeHolder = '000.000.000-00';
        this.description = 'Fique tranquilo, seus dados estão seguros conosco.';
        return this;
    }
}

export default InputModel;