var IngredientSuggestionsAdd = React.createClass({
  handleTextAdd: function() {
    if(this.refs.addText.getDOMNode().value == '') return
    this.props.onClick(event, this.refs.addText.getDOMNode().value);
    this.refs.addText.getDOMNode().value = "";
  },
  render: function() {
    return (
      <div>
        <div className={'form-group myForm'}>
          <input className={'form-control'} 
                 type="text" 
                 placeholder="Add your new list !"
                 ref="addText" />
        </div>
        {' '}
        <button className={'btn btn-default'} type="button" onClick={this.handleTextAdd}>新增項目</button>
      </div>
    );
  }
});