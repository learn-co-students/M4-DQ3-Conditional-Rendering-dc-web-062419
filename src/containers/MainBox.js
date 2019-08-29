import React from 'react'
import MenuBar from '../components/MenuBar.js'
import { Profile, Photos, Cocktails, Pokemon} from '../components/Pages.js'

class MainBox extends React.Component {

        state = {
          info: ""
        }

      selection = (event) =>{
        console.log('selection')
      this.setState({
        info: event.target.id
        }, event => this.show)}






      show = (event) =>{
       if (this.state.info === 'profile' ){
         console.log('click')
       return <Profile />
      }
       else if (this.state.info === 'photo'){
        console.log('click')
        
      return  <Photos />

      }
       else if (this.state.info === 'cocktail'){
        console.log('click')
        
      return  <Cocktails />

      }
       else {
        console.log('click')
       
      return  <Pokemon />
      }
      }

  render() {




    /*

    Replace the code below! Depending on what menu item is selected in the menu, I should render either a Profile, Photos, Cocktails, or Pokemon component.Think of a way to track which menu item was selected. Which component should have state? Which component should have methods to control state? Where should these methods be called?

    */
  const detailsToDisplay  = (
    this.state.info === 'profile' ? <Profile /> : // if 
    this.state.info === 'photo' ? <Photos /> : // else if 
    this.state.info === 'cocktail' ? <Cocktails /> : // else if
    this.state.info === 'pokemon' ? <Pokemon /> :
    null // else 
  );

    
    
    
    
    return (
      <div>
        <MenuBar selection={this.selection}/>
        {detailsToDisplay }
      </div>
    )
  }

}

export default MainBox
