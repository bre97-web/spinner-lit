import { Spinner } from "./internal/spinner"
import { customElement } from 'lit/decorators.js'
import { styles as SharedStyles } from './internal/circle-spinner.css.js'

@customElement('circle-spinner')
export class CircleSpinner extends Spinner {
    static override styles = [SharedStyles]
}
