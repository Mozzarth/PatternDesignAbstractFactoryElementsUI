import { ICheckButton } from "./check"

export class CheckButtonIOS implements ICheckButton {
    render() {
        console.log("render check IOS")
    }
    checked() {
        console.log("check IOS")
    }

}