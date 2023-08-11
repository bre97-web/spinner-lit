import { customElement } from 'lit/decorators.js';
import { Button } from './internal/button.js';
import { styles as sharedStyles } from './internal/_shared.css.js'

declare global {
    interface HTMLElementTagNameMap {
        'outlined-button': Button;
    }
}

@customElement('outlined-button')
export class OutlinedButton extends Button {
    static override styles = [sharedStyles];
}