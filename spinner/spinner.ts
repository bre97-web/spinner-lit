import { LitElement } from "lit"
import { property } from "lit/decorators"

export type SpinnerVariant = 'small' | 'normal' | 'large'

export interface SpinnerVariantInterface {
    variant: SpinnerVariant
}

export class Spinner extends LitElement implements SpinnerVariantInterface {
    @property({ type: String }) public variant = 'normal' as SpinnerVariant
}
