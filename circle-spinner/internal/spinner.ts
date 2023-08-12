import { LitElement, html } from "lit";
import { property } from "lit/decorators/property.js";

export type SpinnerVariant = 'small' | 'normal' | 'large'

export class Spinner extends LitElement {
    
    @property({ type: String }) public variant = 'normal' as SpinnerVariant

    protected override render() {
        return html`
            <div
                data-variant=${this.variant}
                class="spinnerBox"
            ></div>
        `
    }
}