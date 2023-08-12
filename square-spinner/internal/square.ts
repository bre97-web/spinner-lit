import { Spinner } from "../../spinner/spinner";
import { html } from "lit";

export class SquareSpinner extends Spinner {

    protected override render() {
        return html`
            <div
                data-hasBlur=${this.hasBlur}
                data-variant=${this.variant}
                class="square-box"
            >
                <div></div>
            </div>
        `
    }
}