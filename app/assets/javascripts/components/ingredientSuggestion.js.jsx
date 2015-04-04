var IngredientSuggestion = React.createClass({
  /* We need this mixin since we are calling Flux store actions from this component */
  mixins: [Fluxxor.FluxMixin(React)],
  /* We'll track two things for each ingredient, whether the user has changed its name and whether they have saved the update to the server. */
  getInitialState: function() {
    return {changed: false, updated: false};
  },
  render: function() {
    return (
      <div>
        {' '}
        <input onChange={this.handleChange} ref="ingredient" defaultValue={this.props.ingredient.text}/>
        {' '}
        <a href="#" onClick={this.handleDelete}>刪除<i className="fa fa-times"></i></a>
        {/* Show the Update and Cancel buttons only if the user has changed the ingredient name */
          this.state.changed ?
          <span>
            {' '}
            <a href="#" onClick={this.handleUpdate}>更新</a>
            {' '}
            <a href="#" onClick={this.handleCancelChange}>取消</a>
          </span>
        :
          ""
        }
      </div>
    )
  },
  handleChange: function() {
    /* If the user changed the ingredient name, set the 'changed' state to true */
    if (this.refs.ingredient.getDOMNode().value != this.props.ingredient.text) {
      this.setState({changed: true});
    } else {
      this.setState({changed: false});
    }
  },
  handleUpdate: function(e) {
    /* Update the ingredient name in the Fluxxor store */
    e.preventDefault();
    this.getFlux().actions.updateIngredient(this.props.ingredient, this.refs.ingredient.getDOMNode().value);
    this.setState({changed: false, updated: true});
  },
  handleDelete: function(e) {
    /* Delete the ingredient from the Fluxxor store */
    e.preventDefault();
    if (confirm("Delete " + this.props.ingredient.text + "?")) {
      this.getFlux().actions.deleteIngredient(this.props.ingredient);
    }
  },
  handleCancelChange: function(e) {
    e.preventDefault();
    this.refs.ingredient.getDOMNode().value = this.props.ingredient.text;
    this.setState({changed: false});
  }
});