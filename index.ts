import { FactoryAndroid } from './elemenstUI/concreteFactory/concreteFactroyAndroid'
import { FactoryIOS } from './elemenstUI/concreteFactory/concreteFactoryIOS'
import { ICheckButton } from './elemenstUI/check/check'
import { IFactoryIU } from './elemenstUI/IFactoryIU'
import { IButton } from './elemenstUI/button/button'


enum plattForm {
    IOS,
    ANDROID
}
const CURRENT_PLATFFORM: plattForm = plattForm.ANDROID

class FactoryIU {
    static getFactory(): IFactoryIU {
        switch (CURRENT_PLATFFORM) {
            case plattForm.ANDROID:
                return new FactoryAndroid()
                break;
            case plattForm.IOS:
                return new FactoryIOS()
                break;
        }
    }
}
const factory = FactoryIU.getFactory()
const button: IButton = factory.getButton()
const checkBt: ICheckButton = factory.getcheck()

button.render()
checkBt.render()







