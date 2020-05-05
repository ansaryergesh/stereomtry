import React, {Component} from 'react';
import Menu from './MenuComponent';
import Home from './HomeComponent';
import Dishdetail from './DishdetailComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import About from './AboutComponent';
import Contact from './ContactComponent';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { connect } from 'react-redux';

const mapStateToProps = state => {
    return {
      dishes: state.dishes,
      comments: state.comments,
      promotions: state.promotions,
      leaders: state.leaders,
    }
}

class MainComponent extends Component {

  constructor(props) {
    super(props);
  }



  render() {
    const HomePage = () => {
      return (
        <Home 
        dish={this.props.dishes.filter((dish) => dish.featured)[0]}
        promotion={this.props.promotions.filter((promo) => promo.featured)[0]}
        leader={this.props.leaders.filter((leader) => leader.featured)[0]}
    />
      )
    }

    const DishWithId = ({match}) => {
      return (
          <Dishdetail 
          dish={this.props.dishes.filter(dish => dish.id === parseInt(match.params.dishId, 10))[0]} 
          comments={this.props.comments.filter(comment => comment.dishId === parseInt(match.params.dishId, 10))} 
              />
      );
  }
    return (
      <div className="App">
       <Header />
       <TransitionGroup>
          <CSSTransition key={this.props.location.key} classNames="page" timeout={300}>
            <Switch>
              <Route path = '/home' component={HomePage} />
              <Route exact path = '/figures' component = {() => <Menu dishes={this.props.dishes}/>} />
              <Route path="/figures/:dishId" component={DishWithId} />
              <Route exact path='/contactus' component={Contact} />} />
              <Route exact path="/aboutus" component={() => <About leaders={this.props.leaders} />} />
              <Redirect to='/home' />
            </Switch>
          </CSSTransition>
        </TransitionGroup>
        <Footer />
      </div>
    );
  }
}

export default withRouter(connect(mapStateToProps)(MainComponent));
