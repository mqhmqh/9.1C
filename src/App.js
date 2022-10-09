import './App.css';
import Header from './Header/Header'
import React, {Component} from 'react';
import RecentArticles from './Content/Articles/RecentArticles';
import RecentTutorials from './Content/Tutorials/RecentTutorials';
import Footer from './Footer/Footer';

class App extends Component { 

  
  render() {
  return (
    <div className="App">
      <Header />
        <RecentTutorials />
      <RecentArticles />
      <Footer />
    </div>
  );
}
}

export default App;
