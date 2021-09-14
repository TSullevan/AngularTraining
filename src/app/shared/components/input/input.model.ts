import { MaskService } from "../../services/mask.service";
import { ValidationService } from "../../services/validation.service";

class InputModel {
    
    class: string;
    description: string;
    mask: Function;
    maxLength: number;
    placeHolder: string;
    text: string;
    title: string;
    type: string;
    value: string;
    validation: Function;
    
    private maskMethod: Function;
    private maskService: MaskService;
    private validationMethod: Function;
    private validationService: ValidationService;
    private defaultClass: string;
    private redBorderClass: string;

    constructor() {
        this.defaultClass = 'form-control';
        this.redBorderClass = 'form-control red-border';
        this.class = 'form-control';
        this.description = '';
        this.mask = this.maskAlgorithm;
        this.maskMethod = this.noMask;
        this.maskService = new MaskService();
        this.maxLength = 200;
        this.placeHolder = '';
        this.text = '';
        this.title = '';
        this.type = 'text';
        this.validation = this.validationAlgorithm;
        this.validationMethod = this.noValidation;
        this.validationService = new ValidationService();
    }
    
    private noMask(text: string): string {
        return text;
    }
    
    private maskAlgorithm(): void {
        this.value = this.maskMethod(this.value);
    }
    
    private noValidation(text: string): boolean {
        return true;
    }

    private validationAlgorithm(): void {
        let isValid = this.validationMethod(this.value);
        this.class = isValid ? this.defaultClass : this.redBorderClass;
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
        this.validationMethod = this.validationService.cpfValidation;
        return this;
    }
}

export default InputModel;