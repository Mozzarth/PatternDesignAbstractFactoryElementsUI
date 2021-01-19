import { IFactoryIU } from '../IFactoryIU'
import { IButton } from '../button/button';
import { ButtonAndroid } from '../button/button.android';
import { CheckButtonAndroid } from '../check/checkButton.android';
import { ICheckButton } from '../check/check';


export class FactoryAndroid implements IFactoryIU {
    getButton(): IButton {
        return new ButtonAndroid()
    }
    getcheck(): ICheckButton {
        return new CheckButtonAndroid()
    }
}