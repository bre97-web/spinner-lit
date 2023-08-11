import { LitElement, html } from "lit";
import { property } from "lit/decorators/property.js";

/**
 * small: 
 * normal: 26*26 - 8*8
 */
export type SpinnerVariant = 'small' | 'normal' | 'large'

export class Spinner extends LitElement {
    
    @property({ type: String }) public variant = 'normal' as SpinnerVariant

    protected getStylesOfCurrentVariant() {
        if(this.variant === "normal") {
            return ''
        } else if(this.variant === "small") {
            return `
                scale: 0.75;
                margin: 2.25px;
            `
        } else if(this.variant === "large") {
            return `
                scale: 1.25;
                margin: 13px;
            `
        }
        return ''
    }

    protected override render() {
        return html`
            <div
                class="spinnerBox"
                style=${this.getStylesOfCurrentVariant()}
            ></div>
        `
    }
}