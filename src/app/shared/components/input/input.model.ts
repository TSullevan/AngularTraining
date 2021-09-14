import { MaskService } from "../../services/mask.service";

class InputModel {
    
    title: string;
    text: string;
    type: string;
    placeHolder: string;
    description: string;
    mask: Function;
    value: string;
    maxLength: number;

    private maskMethod: Function;    
    private maskService: MaskService;
    constructor() {
        this.title = '';
        this.text = '';
        this.type = 'text';
        this.placeHolder = '';
        this.description = '';
        this.mask = this.maskAlgorithm;
        this.maskMethod = this.noMask;
        this.maskService = new MaskService();
        this.maxLength = 200;
    }

    private noMask(text: string) {
        return text;
    }

    private maskAlgorithm() {
        this.value = this.maskMethod(this.value);
    }

    public AsName(): InputModel {
        this.title = 'Nome';
        this.type = 'text';
        this.placeHolder = 'Digite o Nome';
        this.maxLength = 50;
        return this;
    }
    public AsCpf(): InputModel {
        this.title = 'CPF';
        this.type = 'text';
        this.placeHolder = '000.000.000-00';
        this.description = 'Fique tranquilo, seus dados estão seguros conosco.';
        this.maskMethod = this.maskService.cpfMask;
        this.maxLength = 14
        return this;
    }
}

export default InputModel;