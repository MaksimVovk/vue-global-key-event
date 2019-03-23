export default {
  bind(el, arg) {
    el._handler = e => {
      if (arg.modifiers.esc && e.keyCode === 27) {
        arg.value(e)
      }

      if (arg.modifiers.enter && e.keyCode === 13) {
        arg.value(e)
      }
    }
    window.addEventListener('keyup', el._handler, { capture: true })
  },

  unbind(el) {
    window.removeEventListener('keyup', el._handler, { capture: true })
  },
}