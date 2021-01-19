import { ICheckButton } from "./check";

export class CheckButtonAndroid implements ICheckButton {
    render() {
        console.log("render check Android")
    }
    checked() {
        console.log("check Android")
    }

}