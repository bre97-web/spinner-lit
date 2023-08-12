import { CircleSpinner } from "./internal/spinner"
import { customElement } from 'lit/decorators.js'
import { styles as CircleSpinnerStyles } from './internal/circle-spinner.css.js'
import { styles as SharedStyles } from '../tokens/shared.css.js'

@customElement('circle-spinner')
export class CircleSpinnerComponent extends CircleSpinner {
    static override styles = [CircleSpinnerStyles, SharedStyles]
}
