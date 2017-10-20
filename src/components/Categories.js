import React, { Component } from "react";
import { fetchCategories } from "../actions";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { withRouter } from "react-router";

class Categories extends Component {
  state = {
    activeCategory: "",
    activeTab: "categories"
  };

  componentDidMount() {
    this.props.fetchCategories();
    this.setState({ activeCategory: this.props.match.params.category });
  }

  handleTab(tab) {
    this.setState({ activeTab: tab });
  }

  isTabActive(tab) {
    if (tab === this.state.activeTab) {
      return "is-active";
    }
    return "";
  }

  handleCategory(category) {
    this.setState({ activeCategory: category });
  }

  isCategoryActive(category) {
    if (category === this.state.activeCategory) {
      return "panel-block is-active";
    }
    return "panel-block";
  }

  handleReset() {
    //this.setState({ activeCategory: '' });
    this.props.history.push("/");
  }

  handleResetSort(type) {
    console.log(type);
  }

  showTab() {
    if (this.state.activeTab === "categories") {
      return (
        <div>
          {this.props.categories.map(category => (
            <Link
              to={`/${category.path}/posts`}
              key={category.name}
              onClick={e => this.handleCategory(category.name)}
              className={this.isCategoryActive(category.name)}
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
        </div>
      );
    }
    return (
      <div>
        <div className="panel-block" onClick={this.sortBy("date")}>
          by date
        </div>
        <div className="panel-block" onClick={this.sortBy("score")}>
          by score
        </div>
        <div className="panel-block">
          <button
            onClick={() => this.handleResetSort()}
            className="button is-link is-outlined is-fullwidth"
          >
            reset all filters
          </button>
        </div>
      </div>
    );
  }

  render() {
    return (
      <nav className="panel">
        <p className="panel-heading">Readable</p>

        <p className="panel-tabs">
          <a
            className={this.isTabActive("categories")}
            onClick={() => this.handleTab("categories")}
          >
            Categories
          </a>
          <a
            className={this.isTabActive("sort")}
            onClick={() => this.handleTab("sort")}
          >
            Sort
          </a>
        </p>

        {this.showTab()}

        {/*         {this.props.categories.map(category => (
          <Link
            to={`/${category.path}/posts`}
            key={category.name}
            onClick={e => this.handleCategory(category.name)}
            className={this.isCategoryActive(category.name)}
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
        </div> */}
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
