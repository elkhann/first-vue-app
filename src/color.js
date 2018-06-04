export default {
  bind(el, bindings, vnode) {
    // el.style.color = 'blue'
    const arg = bindings.arg
    el.style[arg] = bindings.value
  }
}