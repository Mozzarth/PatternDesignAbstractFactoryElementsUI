import { IButton } from './button/button'
import { ICheckButton } from './check/check'

export interface IFactoryIU {
    getButton(): IButton
    getcheck(): ICheckButton
}