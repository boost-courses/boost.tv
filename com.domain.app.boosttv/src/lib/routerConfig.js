/**
 * Copyright 2021 Comcast Cable Communications Management, LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import { Main, Splash } from "../pages";

export const pathNames = {
  HOME: "home",
  SEARCH: "search",
  TV: "tv",
  MOVIES: "movies",
  SERIES: "series",
  KIDS: "kids",
  CHANNELS: "channels",
  PROFILE: "profile",
  SETTINGS: "settings",
};

const routes = [
  {
    path: pathNames.SEARCH,
    component: Main,
    widgets: ["Menu", "Grid"],
  },
  {
    path: pathNames.TV,
    component: Main,
    widgets: ["Menu", "Grid"],
  },
  {
    path: pathNames.MOVIES,
    component: Main,
    widgets: ["Menu", "Grid"],
  },
  {
    path: pathNames.SERIES,
    component: Main,
    widgets: ["Menu", "Grid"],
  },
  {
    path: pathNames.KIDS,
    component: Main,
    widgets: ["Menu", "Grid"],
  },
  {
    path: pathNames.CHANNELS,
    component: Main,
    widgets: ["Menu", "Grid"],
  },
  {
    path: pathNames.PROFILE,
    component: Main,
    widgets: ["Menu", "Grid"],
  },
  {
    path: pathNames.SETTINGS,
    component: Main,
    widgets: ["Menu", "Grid"],
  },
  {
    path: pathNames.HOME,
    component: Main,
    widgets: ["Menu", "Grid"],
  },
  {
    path: "$",
    component: Splash,
    widgets: ["Grid"],
  },
];

export default {
  root: routes[0].path,
  routes,
};
