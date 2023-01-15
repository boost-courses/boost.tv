import { Lightning, Router, Utils } from "@lightningjs/sdk";
import { List } from "@lightningjs/ui";
import { Logo } from "../components";
import { pathNames } from "../lib/routerConfig";
import { gridHeight, gridWidth } from "./GridLayout";

export default class Menu extends Lightning.Component {
  static _template() {
    return {
      w: 4 * gridWidth,
      h: 20 * gridHeight,
      x: 0,
      y: 0,
      rect: true,
      colorTop: 0xff0c4d33,
      colorBottom: 0xff191919,
      Logo: {
        type: Logo,
      },
      List: {
        x: 0,
        y: 4 * gridHeight,
        h: 15 * gridHeight,
        forceLoad: true,
        direction: "column",
        type: List,
        signals: { onIndexChanged: true },
      },
    };
  }

  _setup() {
    this._items = [
      {
        icon: "Search",
        title: "Sog",
        url: pathNames.SEARCH,
      },
      {
        icon: "TV",
        title: "Tv",
        url: pathNames.TV,
      },
      {
        icon: "movies",
        title: "Film",
        url: pathNames.MOVIES,
      },
      {
        icon: "series",
        title: "Serier",
        url: pathNames.SERIES,
      },
      {
        icon: "kids",
        title: "Born",
        url: pathNames.KIDS,
      },
      {
        icon: "channels",
        title: "Kanaler",
        url: pathNames.CHANNELS,
      },
      {
        icon: "profile",
        title: "Min side",
        url: pathNames.PROFILE,
      },
      {
        icon: "settings",
        title: "Indstillinger",
        url: pathNames.SETTINGS,
      },
    ];
    const items = this._items.map((item) => {
      return { type: MenuItem, item, selected: false };
    });
    this.tag("List").add(items);
  }

  _getFocused() {
    return this.tag("List");
  }

  _focus() {
    this.setSmooth("alpha", 1, { delay: 0.0, duration: 0.2 });
    this.setSmooth("x", 0, { delay: 0.0, duration: 0.2 });
  }

  _unfocus() {
    this.setSmooth("alpha", 0.001, { delay: 0.0, duration: 0.2 });
    this.setSmooth("x", -Menu.menuWidth, { delay: 0.0, duration: 0.2 });
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
    if (this.active && previousIndex !== index) {
      console.log("INDEX HAS BEEN CHANGED");
    }
  }

  static get menuWidth() {
    return 4 * gridWidth;
  }
}

class MenuItem extends Lightning.Component {
  static _template() {
    return {
      h: gridHeight,
      Focus: {
        alpha: 0,
        x: 0,
        y: 0,
        w: 4 * gridWidth,
        h: 1.25 * gridHeight,
        rect: true,
        color: 0xff1a8924,
      },
      Icon: {
        x: gridWidth,
        y: 0.125 * gridHeight,
        w: 1 * gridHeight,
        h: 1 * gridHeight,
        scale: 0.8,
      },
      Label: {
        x: 1.75 * gridWidth,
        h: 1.25 * gridHeight,
        color: 0xffffffff,
        text: {
          fontFace: "Regular",
          fontSize: 26,
          lineHeight: 1.25 * gridHeight,
          height: 1.25 * gridHeight,
          verticalAlign: "middle",
        },
      },
    };
  }

  _firstActive() {
    this.patch({
      Icon: { src: Utils.asset(`images/icons/menu/${this.item.icon}.png`) },
      Label: { text: this.item.title },
    });
  }

  _focus() {
    this.tag("Focus").setSmooth("alpha", 1, { delay: 0.0, duration: 0.2 });
    this.tag("Icon").setSmooth("scale", 1, {
      delay: 0.0,
      duration: 0.2,
    });
  }

  _unfocus() {
    this.tag("Focus").setSmooth("alpha", 0, { delay: 0.0, duration: 0.2 });
    this.tag("Icon").setSmooth("scale", 0.8, {
      delay: 0.0,
      duration: 0.2,
    });
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

  static get marginBottom() {
    return 0.5 * gridHeight;
  }

  static get width() {
    return 4 * gridWidth;
  }

  static get height() {
    return gridHeight;
  }
}
