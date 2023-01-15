import { Lightning, Router, Utils } from "@lightningjs/sdk";
import { Grid } from "@lightningjs/ui";
import { pathNames } from "../../lib/routerConfig";
import { gridHeight, gridWidth } from "../../widgets/GridLayout";

export default class SettingsGrid extends Lightning.Component {
  static _template() {
    return {
      w: 18 * gridWidth,
      h: 14 * gridHeight,
      x: gridWidth,
      y: 4 * gridHeight,
      List: {
        x: 0,
        y: 0 * gridHeight,
        h: 14 * gridHeight,
        forceLoad: true,
        type: Grid,
        columns: 4,
        spacing: 0.33 * gridWidth,
        signals: { onIndexChanged: true },
      },
      // Grid: {
      //   x: 90,
      //   y: 200,
      //   w: 1740,
      //   h: 780,
      //   columns: 3,
      //   scroll: 300,
      //   spacing: 30,
      //   itemType: ImageCell,
      //   type: Grid,
      // },
    };
  }

  _setup() {
    this._items = [
      {
        icon: "network",
        title: "Network",
        url: pathNames.SETTINGS,
      },
      {
        icon: "Screen",
        title: "Screen",
        url: pathNames.SETTINGS,
      },
      {
        icon: "Power",
        title: "Power",
        url: pathNames.SETTINGS,
      },
      {
        icon: "myChannels",
        title: "My Channels",
        url: pathNames.SETTINGS,
      },
      {
        icon: "Sound",
        title: "Sound",
        url: pathNames.SETTINGS,
      },
      {
        icon: "channelSorting",
        title: "Channel Sorting",
        url: pathNames.SETTINGS,
      },
      {
        icon: "Subtitles",
        title: "Subtitles",
        url: pathNames.SETTINGS,
      },
      {
        icon: "TipsAndTricks",
        title: "Tips&Tricks",
        url: pathNames.SETTINGS,
      },
      {
        icon: "system",
        title: "System",
        url: pathNames.SETTINGS,
      },
      {
        icon: "restart",
        title: "Restart the TV box",
        url: pathNames.SETTINGS,
      },
    ];
    const items = this._items.map((item) => {
      return {
        type: SettingsItem,
        item,
        selected: false,
        w: 4.25 * gridWidth,
        h: 4 * gridHeight,
      };
    });

    this.tag("List").add(items);
  }

  _getFocused() {
    return this.tag("List");
  }

  _focus() {
    // this.setSmooth("scale", 1, { delay: 0.0, duration: 0.2 });
    // this.setSmooth("alpha", 1, { delay: 0.0, duration: 0.2 });
    // this.setSmooth("x", 0, { delay: 0.0, duration: 0.2 });
  }

  _unfocus() {
    // this.setSmooth("scale", 0.9, { delay: 0.0, duration: 0.2 });
    // this.setSmooth("alpha", 0.001, { delay: 0.0, duration: 0.2 });
    // this.setSmooth("x", -Menu.menuWidth, { delay: 0.0, duration: 0.2 });
  }

  _handleUp() {
    return true;
  }

  _handleDown() {
    return true;
  }

  onIndexChanged({
    previousIndex = this.tag("List").index,
    index = this._selectedIndex,
  }) {
    console.log(previousIndex);
    if (this.active && previousIndex !== index) {
      console.log("INDEX HAS BEEN CHANGED");
    }
  }
}

class SettingsItem extends Lightning.Component {
  static _template() {
    return {
      h: 4 * gridHeight,
      w: 4 * gridWidth,
      Border: {
        visible: true,
        h: 4 * gridHeight - 4,
        w: 4 * gridWidth - 4,
        texture: Lightning.Tools.getRoundRect(
          4 * gridWidth - 4,
          4 * gridHeight - 4,
          20,
          2,
          0xff454545,
          false,
          null
        ),
      },
      Title: {
        w: 4 * gridWidth,
        h: gridHeight,
        y: 2.75 * gridHeight,
        color: 0xffffffff,
        text: {
          text: "",
          textAlign: "center",
          fontFace: "Semibold",
          fontSize: 26,
        },
      },
      Icon: {
        x: 1.5 * gridWidth,
        y: 0.75 * gridHeight,
        w: 1 * gridWidth,
        h: 1 * gridWidth,
      },
    };
  }

  _firstActive() {
    this.patch({
      Icon: { src: Utils.asset(`images/icons/settings/${this.item.icon}.png`) },
      Title: { text: this.item.title },
    });
  }

  _focus() {
    this.setSmooth("scale", 1.1, { delay: 0.0, duration: 0.2 });
  }

  _unfocus() {
    this.setSmooth("scale", 1, { delay: 0.0, duration: 0.2 });
  }

  _handleEnter() {
    Router.navigate(this.item.url, true);
    Router.focusPage();
    return true;
  }

  set selected(bool) {
    this.alpha = bool ? 1 : 0.8;
    this._selected = bool;
  }

  get selected() {
    return this._selected;
  }

  static get width() {
    return 4 * gridWidth;
  }

  static get height() {
    return 4 * gridHeight;
  }
}
