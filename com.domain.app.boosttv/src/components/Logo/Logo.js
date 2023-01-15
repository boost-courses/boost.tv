import { Lightning, Utils } from "@lightningjs/sdk";
import { gridHeight, gridWidth } from "../../widgets/GridLayout";

export default class Logo extends Lightning.Component {
  static _template() {
    return {
      w: 2 * gridWidth,
      h: 2 * gridHeight,
      x: gridWidth,
      y: gridHeight,
      children: {
        LogoImage: {
          w: 2 * gridWidth,
          h: 1 * gridHeight,
          x: 0,
          y: 0,
          src: Utils.asset("images/logo.png"),
        },
        DateAndTime: {
          h: 1 * gridHeight,
          w: 2 * gridWidth,
          x: 0,
          y: 1 * gridHeight,
          text: {
            text: "Friday | 13:23",
            lineHeight: gridHeight,
            fontSize: 26,
            fontFace: "Semibold",
            verticalAlign: "middle",
          },
        },
      },
    };
  }
}
