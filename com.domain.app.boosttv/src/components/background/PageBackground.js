import { Lightning } from "@lightningjs/sdk";
import { gridHeight, gridWidth } from "../../widgets/GridLayout";

export default class PageBackground extends Lightning.Component {
  static _template() {
    return {
      w: 20 * gridWidth,
      h: 20 * gridHeight,
      color: 0xff131313,
      rect: true,
    };
  }
}
