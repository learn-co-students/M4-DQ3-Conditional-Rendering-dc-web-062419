import React from 'react'
import MenuBar from '../components/MenuBar.js'
import { Profile, Photos, Cocktails, Pokemon} from '../components/Pages.js'

class MainBox extends React.Component {
  constructor(props){
    super(props)
    this.state = {pageToShow: "profile"}
  }

  activateProfile = () => {
    this.setState({pageToShow: "profile"})
  }

  activatePhoto = () => {
    this.setState({pageToShow: "photo"})
  }

  activateCocktail = () => {
    this.setState({pageToShow: "cocktail"})
  }

  activatePokemon = () => {
    this.setState({pageToShow: "pokemon"})
  }

  detailsToDisplay = () => {
    switch (this.state.pageToShow) {
      case "photo":
        return <div>{Photos()}</div>;
      case "cocktail":
        return <div>{Cocktails()}</div>;
      case "pokemon":
        return <div><Pokemon /></div>;
      default:
        return <div>{Profile()}</div>;
    }
  }

  render() {
    /*
    Replace the code below! Depending on what menu item is selected in the menu, 
    I should render either a Profile, Photos, Cocktails, or Pokemon component.
    Think of a way to track which menu item was selected. Which component should 
    have state? Which component should have methods to control state? Where should 
    these methods be called?
    */
    return (
      <div>
        <MenuBar 
          activateProfile={this.activateProfile}
          activatePhoto={this.activatePhoto}
          activateCocktail={this.activateCocktail}
          activatePokemon={this.activatePokemon}
        />
        {this.detailsToDisplay()}
      </div>
    )
  }

}

export default MainBox
