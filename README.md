# react-skyux

> Blackbaud's SKY UX components, but in React

[![NPM](https://img.shields.io/npm/v/react-skyux.svg)](https://www.npmjs.com/package/react-skyux) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save react-skyux @skyux/theme
```

## Usage

```jsx
import React, { Component } from 'react'

import { SkyAlert } from 'react-skyux'
import 'react-skyux/dist/index.css'
import '@skyux/theme/css/sky.css'

class Example extends Component {
  render() {
    return <SkyAlert>My first react-skyux component!</SkyAlert>
  }
}
```

## License

MIT © [mcharters](https://github.com/mcharters)
