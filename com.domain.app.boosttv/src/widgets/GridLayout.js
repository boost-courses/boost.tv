import { Lightning } from "@lightningjs/sdk";

let gridSize = 20;
export const gridWidth = 1920 / gridSize;
export const gridHeight = 1080 / gridSize;

export default class GridLayout extends Lightning.Component {
  static _template() {
    return {
      GridItems: {
        w: gridSize * gridWidth,
        h: gridSize * gridWidth,
        x: 0,
        y: 0,
      },
    };
  }

  _setup() {
    let gridNodes = [];
    for (let i = 0; i < gridSize; i++) {
      gridNodes.push({ type: GridItemVertical, i });
      gridNodes.push({ type: GridItemHorisontal, i });
    }
    this.tag("GridItems").children = gridNodes;
  }
}

class GridItemVertical extends Lightning.Component {
  static _template() {
    return {
      w: 1,
      h: 1080,
      color: 0xff39ff14,
      rect: true,
    };
  }

  _setup() {
    this.patch({
      x: (this.i + 1) * gridWidth,
    });
  }
}

class GridItemHorisontal extends Lightning.Component {
  static _template() {
    return {
      w: 1920,
      h: 1,
      color: 0xff39ff14,
      rect: true,
    };
  }

  _setup() {
    this.patch({
      y: (this.i + 1) * gridHeight,
    });
  }
}
