import { IButton } from "./button"

export class ButtonIOS implements IButton {
    render() {

        console.log("render button IOS")
    }
    onClick() {
        console.log("click button IOS")
    }


} 