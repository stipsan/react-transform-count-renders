export default function countRenders(options) {
  return function wrap(ReactClass, uniqueId) {
    const displayName = options.components[uniqueId].displayName
    const originalRender = ReactClass.prototype.render;

    ReactClass.prototype.render = function render() {
      console.count(`<${displayName}/>`);

      return originalRender.apply(this, arguments);
    }

    return ReactClass;
  }
}