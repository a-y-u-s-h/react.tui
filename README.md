## React TUI

![React TUI Banner](https://i.ibb.co/Rvnjdbb/REACT-TUI-1.png)

You've found a blank boilerplate to build terminal user interfaces, and one that makes use of `react`, `neo-blessed` (as opposed to `blessed`, which isn't well maintained as of 02 September 2021) and combines it with `react-blessed` and `react-blessed-contrib` so that you get best of the entire ecosystem related to `blessed` in Javascript.

This boilerplate installs Xstate for state orchestration and management by default and allows you to do vue-like absolute imports with `src` aliased to `@`. 

---

Only important file in this boilerplate is `src/index.js` (and probably `settings` folder as well because that's where configuration options for blessed screen live) everything else is simply my personal preference. If you prefer to use anything else for state management like Redux, all you need to do is delete the systems folder, and remove the `Systems.Provider` from `src/index.js` and set up Redux. 

Routing is not implemented in this boilerplate because it could very well be a preference thing as well. 

### Note

Though these scripts are self explanatory, I will describe some of the useful ones - 

```json
"clean": "rimraf build",
"predevelop": "yarn clean",
"develop": "rollup --config --watch --silent",
"prebuild": "yarn clean",
"build": "rollup --config",
"prepare": "yarn format",
"format": "prettier --write 'src/**/*.{js,jsx}'",
"update": "npx npm-check-updates -u --timeout 300000 && yarn install --no-lockfile",
"prerelease": "yarn prepare && yarn build",
"release": "npm login && npm publish --access=public"
```

1. `yarn update` - Unlike the commands `yarn` or `npm install` if you run this script, it will update all dependencies, despite any breaking changes. This is good if you want bleeding edge stuff and are okay with updating this boilerplate to save it locally somewhere yourself.
2. `yarn develop` - This is what you should be running to develop. You might find some errors with some terminals like `Alacritty` upon start, which disappear but honestly I have no idea why that happens. All I know is that it's not important, maybe.
3. `yarn clean` - To clean things up. 

---

## Author

- [Ayush Sharma](https://github.com/a-y-u-s-h)
