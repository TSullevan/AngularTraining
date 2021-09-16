import { MaskService } from "../../services/mask.service";
import { ValidationService } from "../../services/validation.service";
import EInputType from "./input.enum";

class InputModel {
    
    class: string;
    description: string;
    mask: Function;
    maxLength: number;
    placeHolder: string;
    required: boolean;
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
    private inputType: EInputType;

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
        this.required = false;
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

    public asRequired(): InputModel {
        this.required = true;
        return this;
    }

    public asName(title: string = 'Nome'): InputModel {
        this.inputType = EInputType.Name;
        this.maxLength = 50;
        this.placeHolder = 'Digite o Nome';
        this.title = title;
        this.type = 'text';
        return this;
    }

    public asCpf(title: string = 'CPF'): InputModel {
        this.description = 'Fique tranquilo, seus dados estão seguros conosco.';
        this.inputType = EInputType.Cpf;
        this.maskMethod = this.maskService.cpfMask;
        this.maxLength = 14
        this.placeHolder = '000.000.000-00';
        this.title = title;
        this.type = 'text';
        this.validationMethod = this.validationService.cpfValidation;
        return this;
    }

    public asTelephone(title: string = 'Telefone', inputType: EInputType = EInputType.Telephone): InputModel {
        this.description = '';
        this.inputType = inputType;
        this.maskMethod = this.noMask;
        this.maxLength = 15
        this.placeHolder = '(00) 00000-0000';
        this.title = title;
        this.type = 'text';
        this.validationMethod = this.noValidation;
        return this;
    }
}

export default InputModel;