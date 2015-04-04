var IngredientSuggestionsEditor = React.createClass({
    /* Update this component when the Fluxxor store is updated */
    mixins: [Fluxxor.FluxMixin(React), Fluxxor.StoreWatchMixin("IngredientSuggestionsStore")],
    /* Get the ingredients list from the store */
    getStateFromFlux: function() {
      var flux = this.getFlux();
      return {
        ingredients: flux.store("IngredientSuggestionsStore").getState().ingredients
      };
    },
    handleAdd: function(e, text) {
      e.preventDefault();
      this.getFlux().actions.addIngredient(this.props.ingredient, text);
    },
    /* Show each ingredient when the IngredientSuggestion component */
    render: function() {
      var props = this.props;
      var ingredients = this.state.ingredients.map(function (ingredient) {
        return <IngredientSuggestion ingredient={ingredient} key={ingredient.id} flux={props.flux} />
      });
      return (        
        <div>
          <IngredientSuggestionsAdd onClick={this.handleAdd} />
          {ingredients}
        </div>
      );
    }
  });