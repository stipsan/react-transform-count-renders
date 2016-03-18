export default function countRenders(options) {
  return function wrap(ReactClass) {
    const displayName = options.components[uniqueId].displayName
    const originalRender = ReactClass.prototype.render;

    ReactClass.prototype.render = function render() {
      console.info(`${displayName} updated:`, this.props, this.state);

      originalRender.apply(this, arguments);
    }

    return ReactClass;
  }
}