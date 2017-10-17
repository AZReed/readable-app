import React, { Component } from "react";
import { fetchCategories } from "../actions";
import { connect } from "react-redux";

class Categories extends Component {
  state = {
    indexActive: -1
  }

  componentDidMount() {
    this.props.fetchCategories();
  }

  isActive(index) {
    if (index === this.state.indexActive) {
      return "panel-block is-active";
    }
    return "panel-block";
  }

  handleCategory(e, category, index) {
    console.log(e.target, category)
    this.setState({indexActive: index})
  }

  handleReset() {
    this.setState({indexActive: -1})
  }

  render() {

    return (
      <nav className="panel">
        <p className="panel-heading">Readable</p>

        <p className="panel-tabs">
          <a className="is-active">categories</a>
          <a>filters</a>
        </p>

        {this.props.categories.map((category, index) => (
          <a key={category.name} onClick={(e) => this.handleCategory(e, category.path, index)} className={this.isActive(index)}>
            <span className="panel-icon">
              <i className="fa fa-book" />
            </span>
            {category.name}
          </a>
        ))}

        <div className="panel-block">
          <button onClick={() => this.handleReset()} className="button is-link is-outlined is-fullwidth">
            reset all filters
          </button>
        </div>
      </nav>
    );
  }
}

function mapStateToProps({ categories }) {
  return {
    categories: categories.allCategories || []
  };
}

function mapDispatchToProps(dispatch) {
  return {
    fetchCategories: () => dispatch(fetchCategories())
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Categories);
