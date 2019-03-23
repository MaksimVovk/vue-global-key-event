# vue-global-key-event

Vue directive to react on keyup. Great for closing popovers, menus among other things.

## Install

```
$ npm install --save vue-global-key-event
```

## Use

```
import Vue from 'vue'
import GlobalKeyEvent from 'vue-global-key-event'

Vue.directive('global-key-event', GlobalKeyEvent)
```

```
<script>
  export default {
    methods: {
      keyEvent (event) {
        console.log('Keyup event. Event: ', event)
      }
    }
  }
</script>

<template>
  <div v-global-key-event.esc="keyEvent"></div>
  <div v-global-key-event.enter="keyEvent"></div>
</template>
```
