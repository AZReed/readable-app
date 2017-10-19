import React, { Component } from "react";
import { fetchCategories } from "../actions";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { withRouter } from "react-router";

class Categories extends Component {
  state = {
    activeCategory: ""
  };

  componentDidMount() {
    this.props.fetchCategories();
    this.setState({ activeCategory: this.props.match.params.category });
  }

  isActive(category) {
    if (category === this.state.activeCategory) {
      return "panel-block is-active";
    }
    return "panel-block";
  }

  handleCategory(category) {
    this.setState({ activeCategory: category });
  }

  handleReset() {
    //this.setState({ activeCategory: '' });
    this.props.history.push("/");
  }

  render() {
    return (
      <nav className="panel">
        <p className="panel-heading">Readable</p>

        <p className="panel-tabs">
          <a className="is-active">categories</a>
          <a>filters</a>
        </p>

        {this.props.categories.map(category => (
          <Link
            to={`/${category.path}/posts`}
            key={category.name}
            onClick={e => this.handleCategory(category.name)}
            className={this.isActive(category.name)}
          >
            <span className="panel-icon">
              <i className="fa fa-book" />
            </span>
            {category.name}
          </Link>
        ))}

        <div className="panel-block">
          <button
            onClick={() => this.handleReset()}
            className="button is-link is-outlined is-fullwidth"
          >
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

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(Categories)
);
