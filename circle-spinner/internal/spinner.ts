import { Spinner } from "@/spinner/spinner";
import { html } from "lit";

export class CircleSpinner extends Spinner {    
    protected override render() {
        return html`
            <div
                data-variant=${this.variant}
                class="spinnerBox"
            ></div>
        `
    }
}