import { LitElement } from "lit"
import { property } from "lit/decorators.js"

export type SpinnerVariant = 'small' | 'normal' | 'large'
export type HasBlur = boolean

export interface SpinnerVariantInterface {
    variant: SpinnerVariant
    hasBlur: HasBlur
}

export class Spinner extends LitElement implements SpinnerVariantInterface {
    @property({ type: String }) public variant = 'normal' as SpinnerVariant
    @property({ type: Boolean }) public hasBlur = false as HasBlur
}
