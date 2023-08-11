import { LitElement, html } from "lit";

export class Button extends LitElement {

    protected override render() {
        return html`
            <div class="outlined-box">
                <slot></slot>
            </div>
        `
    }
}