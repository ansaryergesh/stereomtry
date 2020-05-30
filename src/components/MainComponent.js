import React, {Component} from 'react';
import Menu from './MenuComponent';
import Home from './HomeComponent';
import Dishdetail from './DishdetailComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import About from './AboutComponent';
import Contact from './ContactComponent';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { actions } from 'react-redux-form';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { connect } from 'react-redux';
import {postComment, fetchComments, fetchThemes} from '../redux/actionCreators';
const mapStateToProps = state => {
    return {
      comments: state.comments,
      dishes: state.dishes,
      themes: state.themes,
    }
}
const mapDispatchToProps = (dispatch) => ({ 
  postComment:(feedback) => dispatch(postComment(feedback)),
  fetchComments: () => { dispatch(fetchComments()); },
  resetFeedbackForm: () => { dispatch(actions.reset('feedback'))},
  fetchThemes: () => {dispatch(fetchThemes())},

})
class MainComponent extends Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchThemes();
    this.props.fetchComments();
  }



  render() {
    const HomePage = () => {
      return (
        <Home
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
              <Route exact path='/contactus' component={() => <Contact resetFeedbackForm={this.props.resetFeedbackForm} postComment = {this.props.postComment}/>} />} />
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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MainComponent));