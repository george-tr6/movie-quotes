import React from 'react';
import {Route} from 'react-router-dom';
import 'materialize-css/dist/css/materialize.min.css';
import About from './about';
import Home from './home';
import List from './list';
import MovieQuote from './movie_quotes';
import Nav from './nav';
import SignIn from './sign_in';
import SignUp from './sign_up';
import { secret, people } from '../data/lists';
import auth from '../hoc/auth';

const App = () => (
    <div>
        <Nav/>
        <div className="container">
            <Route exact path="/" component={Home}/>
            <Route path="/about" component={About}/>
            <Route path="/movie-quote" component={auth(MovieQuote)}/>
            <Route path="/person-list" render={props => <List {...props} title="List of People" list={people}/>}/>
            <Route path="/secret-list" component={ auth(props => <List {...props} title="Secret Operatives List" list={secret} />) } />
            <Route path="/sign-in" component={SignIn}/>
            <Route path="/sign-up" component={SignUp}/>
        </div>
    </div>
);

export default App;
