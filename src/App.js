import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'normalize-css'
import './styles.css'
import NamesList from './Components/NamesList';
import Search from './Components/Search'
import Credit from './Components/Credit'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      filtertext: 'hello'
    }
  }

  filterUpdate(value) {
    this.setState({
      filtertext: value
    })
  }
  render() {
    return (
      <div>
        <Search
          filtertext={this.state.filtertext}
          filterUpdate={this.filterUpdate.bind(this)}
        />
        <main>
          <NamesList data={this.props.data}
          filterText={this.state.filtertext}
          />
          <Credit/>
        </main>
      </div>
    )
  }
}

export default App;
