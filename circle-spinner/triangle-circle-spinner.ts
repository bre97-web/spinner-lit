import { CircleSpinner } from "./internal/spinner"
import { customElement } from 'lit/decorators.js'
import { styles as TriangleCircleSpinnerStyles } from './internal/triangle-circle-spinner.css.js'
import { styles as SharedStyles } from '../tokens/shared.css.js'

@customElement('triangle-circle-spinner')
export class TriangleCircleSpinnerComponent extends CircleSpinner {
    static override styles = [TriangleCircleSpinnerStyles, SharedStyles]
}
