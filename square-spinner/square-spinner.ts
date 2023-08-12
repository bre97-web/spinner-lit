import { customElement } from 'lit/decorators.js'
import { SquareSpinner } from "./internal/square";
import { css } from 'lit';
import { styles as SharedStyles } from '../tokens/shared.css.js'

@customElement('square-spinner')
export class SquareSpinnerComponent extends SquareSpinner {
    static override styles = [
        css`
            * {
                padding: 0;
                margin: 0;
            }
            .square-box[data-hasBlur="true"] {
                --bw-blur: 8px;
            }
            .square-box[data-variant="small"] {
                --bw-scale: 0.75;
                --bw-margin: 0 -4px 0;
            }
            .square-box {
                --bw-scale: 1;
                --bw-margin: 0;
                --bw-blur: 0;
            }
            .square-box[data-variant="large"] {
                --bw-scale: 1.25;
                --bw-margin: 0 4px 0;
            }
            .square-box {
                transition: all 0.25s;
                display: block;
                position: relative;
                width: 32px;
                height: 32px;
                overflow: hidden;
                background-color: var(--bw-sys-color-surface);
                scale: var(--bw-scale);
                margin: var(--bw-margin);
            }
            .square-box > div {
                filter: blur(var(--bw-blur));
                display: blcok;
                position: absolute;
                left: 0;
                top: 0;
                height: 50%;
                width: 50%;
                background-color: var(--bw-sys-color-primary);
                animation: move 1s linear infinite;
            }
            @keyframes move {
                0% {
                    left: 0;
                    top: 0;
                }
                25% {
                    left: 50%;
                    top: 0;
                }
                50% {
                    left: 50%;
                    top: 50%;
                }
                75% {
                    left: 0;
                    top: 50%;
                }
                100% {
                    left: 0;
                    top: 0;
                }
            }
        `,
        SharedStyles
    ]
}