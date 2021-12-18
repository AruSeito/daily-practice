function connect(mapStateToProps, mapDispatchToProps) {
  return function (Component) {
    class Connect extends React.Component {
      static contextType = {
        store: PropTypes.object,
      };

      componentDidMount(){
        this.context.store.subscribe(this.forceUpdate.bind(this));
      }

      render() {
        return (
          <Component
            {...this.props}
            {...mapStateToProps(this.context.store.getState())}
            {...mapDispatchToProps(this.context.store.dispatch)}
          />
        );
      }
    }
    return Connect;
  };
}
