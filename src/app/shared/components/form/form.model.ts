import { FormService } from "../../http-services/form.service";
import InputModel from "../input/input.model";

class FormModel {

    title: string;
    inputs: Array<InputModel>;
    sendMethod: Function;

    constructor() {
        this.title = '';
        this.inputs = new Array<InputModel>();
    }

    private formService: FormService;
    public asCreateUser(): FormModel {
        this.title = 'Create';
        this.inputs.push(new InputModel().asName().asRequired());
        this.inputs.push(new InputModel().asCpf().asRequired());
        this.inputs.push(new InputModel().asTelephone('Telefone 1').asRequired());
        this.inputs.push(new InputModel().asTelephone('Telefone 2'));
        // this.sendMethod = 
        return this;
    }

    sendUserRequest(user: User) {
        this.formService.sendCreateRequest('user/', user);
    }

}

class User {
    name: string;
    cpf: string;
    telephone1: string;
    telephone2: string;
}

export default FormModel;