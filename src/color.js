export default {
  bind(el, bindings, vnode) {

    const fondModifier = bindings.modifiers['font']
    if (fondModifier) {
      el.style.fontSize = '30px'
    }

    const delayModifier = bindings.modifiers['delay']
    let delay = 0    
    if (delayModifier) { // если есть delay, то
      delay = 2000 //2 сек.
    }

    setTimeout(() =>{
      const arg = bindings.arg //[background="'red'", color="'white'", color="'blue'"]
      el.style[arg] = bindings.value //el.style.background = 'red'
    }, delay)
  }
}