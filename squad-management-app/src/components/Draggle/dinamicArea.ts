import { css } from "@emotion/core";

export function getGridDustibin(value: number) {
  switch (value) {
    case 1:
      return css`
        grid-area: c1;
      `;

    case 2:
      return css`
        grid-area: c2;
      `;

    case 3:
      return css`
        grid-area: c3;
      `;

    case 4:
      return css`
        grid-area: c4;
      `;

    case 5:
      return css`
        grid-area: c5;
      `;

    case 6:
      return css`
        grid-area: c6;
      `;

    case 7:
      return css`
        grid-area: c7;
      `;

    case 8:
      return css`
        grid-area: c8;
      `;

    case 9:
      return css`
        grid-area: c9;
      `;

    case 10:
      return css`
        grid-area: c10;
      `;
    case 11:
      return css`
        grid-area: c11;
      `;

    default:
      return css``;
  }
}

export function getArea(value: number) {
  switch (value) {
    case 0: //3 - 4 -3
      return css`
        grid-template-areas:
          "c1 c2 c3"
          ". c4 ."
          "c5 c6 c7"
          "c8 c9 c10"
          ". c11 .";
      `;
    case 1: //3 - 2 - 2 - 3
      return css`
        grid-template-areas:
          "c1 c2 c3"
          "c4 . c5"
          "c6 . c7"
          "c8 c9 c10"
          ". c11 .";
      `;

    case 2: // 3 - 2 - 3 - (1 " 2) Está pedindo 1, mas não completa.
      return css`
        grid-template-areas:
          "c1 c2 c3"
          "c4 . c5"
          "c6 c7 c8"
          "c9  . c10"
          ". c11 .";
      `;

    case 3: //3 - 4 -3
      return css`
        grid-template-areas:
          "c1 c2 c3"
          ". c4 ."
          "c5 c6 c7"
          "c8 c9 c10"
          ". c11 .";
      `;

    case 4: // 3 - 5 - 2
      return css`
        grid-template-areas:
          "c1 c2 c3"
          "c4 . c5"
          "c6 c7 c8"
          "c9 . c10"
          ". c11 .";
      `;

    case 5: // 4 - 2 - 3 - 1
      return css`
        grid-template-areas:
          "c1 c2 c3"
          ". c4 ."
          "c5 c6 c7"
          "c8 c9 c10"
          ". c11 .";
      `;

    case 6: // 4 - 3 - 1 - 1
      return css`
        grid-template-areas:
          "c1 c2 c3"
          ". c4 ."
          "c5 c6 c7"
          "c8 c9 c10"
          ". c11 .";
      `;

    case 7: // 4 - 3 - 2
      return css`
        grid-template-areas:
          "c1 c2 c3"
          ". c4 ."
          "c5 c6 c7"
          "c8 c9 c10"
          ". c11 .";
      `;

    case 8: //4 - 4 - 2
      return css`
        grid-template-areas:
          "c1 c2 c3"
          ". c4 ."
          "c5 c6 c7"
          "c8 c9 c10"
          ". c11 .";
      `;

    case 9: //4 - 5 - 1
      return css`
        grid-template-areas:
          "c1 c2 c3"
          ". c4 ."
          "c5 c6 c7"
          "c8 c9 c10"
          ". c11 .";
      `;

    case 10: //5 - 4 -1
      return css`
        grid-template-areas:
          "c1 c2 c3"
          ". c4 ."
          "c5 c6 c7"
          "c8 c9 c10"
          ". c11 .";
      `;

    default:
      return css`
        grid-template-areas:
          "c1 c2 c3"
          ". c4 ."
          "c5 c6 c7"
          "c8 c9 c10"
          ". c11 .";
      `;
  }
}
