import { IButton } from "./button"

export class ButtonAndroid implements IButton {
    render() {
        console.log("render button Android")
    }
    onClick() {
        console.log("Click button Android")
    }


} 