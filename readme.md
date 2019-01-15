# RNDM Render Plugin: Multivariant

## About

This plugin provides functionality for [RNDM Render package](https://github.com/rndm-com/rndm-render) by allowing the user to define state based properties that can determine layout or functionality.

## Installation

If you have not already done so, then please ensure you have installed the [RNDM Render](https://github.com/rndm-com/rndm-render) as well as the following RNDM packages:

- [RNDM Plugin: Core](https://github.com/rndm-com/rndm-render-plugin-core)
- [RNDM Plugin: Redux](https://github.com/rndm-com/rndm-render-plugin-redux)

### From NPM

```sh
npm install --save @rndm/render-plugin-multivariant
```

### Post Installation

In order to allow this plugin to work, it must first be included in your project. You can do this inside your main index file:

```javascript
import '@rndm/render-plugin-multivariant';
```

## Usage

Multivariant is a simple Redux wrapper plugin that takes the redux state and allows comparison of values to change the format of preferred RNDM JSON.

This type of construct allows for your application to start defining layouts, properties and user journeys based a variety of factors including User identifiers, signed-in states, A/B testing, screen dimensions, platform specific code or more.

**Example**

```JSON
{
    "type": "multivariant.Multivariant",
    "props": {
        "rndm": {
            "type": "react-native.View",
            "props": {
                "children": {
                    "type": "react-native.Text",
                    "props": {
                        "children": "Desktop or Laptop"
                    }
                }
            }
        },
        "args": [{
            "variants": [{
                "getter": "application.window.width",
                "operator": "<=",
                "value": 800
            }],
            "setters": {
                "props.children.props.children": "Tablet"
            }
        }, {
            "variants": [{
                "getter": "application.window.width",
                "operator": "<=",
                "value": 400
            }],
            "setters": {
                "props.children.props.children": "Phone"
            }
        }]
    }
}
```

The above example uses an identifier that hooks into the application window width and provides a different user experience based on the width at that time.

**_Please Note:_** Variants are joined together using AND. This means that each variant added will add exclusivity.

**_Please Note:_** The ordering of the args and variants are important. The latter args and variants take precedence over the those that come before.

### A/B Testing

This plugin includes a simple piece of middleware that will generate a unique user identifier for test purposes. When included as part of your redux middleware, it will attempt to fetch the ID from the local storage, and upon failure, generate a new one and persist this.

In order to include this, you can do the following inside your redux/middleware/index.js file:

```javascript
import { multivariant } from '@rndm/render-plugin-multivariant';

const middleware = [
    // ... all other middlewares
    multivariant
]
```

### Available Operators

- '===': Used to define if two values equal each other

- '>': Used to define if the getter item is greater than the input value

- '>=': Used to define if the getter item is greater than or equal to the input value

- '<': Used to define if the getter item is less than the input value

- '<=': Used to define if the getter item is less than or equal to the input value

- '!!': Used to define if the getter item exists

- '!': Used to define if the getter item does not exist

- 'includes': Used to define if the getter item includes the input value (Array or String)

- 'startsWith': Used to define if a the getter item starts with the input value (String)

- 'endsWith': Used to define if a the getter item ends with the input value (String)

- 'typeOf': Used to define if a the getter item is a type of input value (String)
