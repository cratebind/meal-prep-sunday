import React, { Component } from 'react';

class LandingPage extends Component {
  render() {
    return (
      <div>
        <div className="section no-pad-bot" id="index-banner">
          <div className="container">
            <br /><br />
            <h1 className="header center">Meal Planning Made Easy</h1>
            <div className="row center">
              <a className="btn waves-effect waves-light" href="/login" style={{marginTop: 30}}>Get Started</a>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col s12 m4">
              <div className="icon-block">
                <h2 className="center light-blue-text"><i className="material-icons">format_list_bulleted</i></h2>
                <h5 className="center light-blue-text">Save Your Recipes</h5>
                <p className="light">Add all your favorite recipes in one place and add them to your weekly meal plan.</p>
              </div>
            </div>
            <div className="col s12 m4">
              <div className="icon-block">
                <h2 className="center light-blue-text"><i className="material-icons">shopping_basket</i></h2>
                <h5 className="center light-blue-text">Simplify Grocery Shopping</h5>
                <p className="light">We combine your meals for the week into one list, then group the items by the aisles you'll find them.</p>
              </div>
            </div>
            <div className="col s12 m4">
              <div className="icon-block">
                <h2 className="center light-blue-text"><i className="material-icons">phone_iphone</i></h2>
                <h5 className="center light-blue-text">Bring Your Grocery List</h5>
                <p className="light">Our Web App is made for mobile, so you'll have your grocery list on-hand to check things off.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default LandingPage;
