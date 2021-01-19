import { IFactoryIU } from '../IFactoryIU'
import { IButton } from '../button/button';
import { ICheckButton } from '../check/check';
import { CheckButtonIOS } from '../check/checkButton.ios';
import { ButtonIOS } from '../button/button.ios';



export class FactoryIOS implements IFactoryIU {
    getButton(): IButton {
        return new ButtonIOS()
    }
    getcheck(): ICheckButton {
        return new CheckButtonIOS()
    }
}