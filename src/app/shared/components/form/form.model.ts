import InputModel from "../input/input.model";

class FormModel {

    title: string;
    inputs: Array<InputModel>;

    constructor() {
        this.title = '';
        this.inputs = new Array<InputModel>();
    }
}

export default FormModel;