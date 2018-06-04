export default {
  bind(el, bindings, vnode) {
    // el.style.color = 'blue'
    el.style.color = bindings.value
  }
}