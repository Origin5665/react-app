import React from 'react';
import status from './ProfileStatus.module.css';

class ProfileStatus extends React.Component {
   constructor(props) {
      super()
      this.props = props;

      this.state = {
         status: this.props.status,
         editMode: false,

      };
   };

   componentDidUpdate = (prevProps) => {
      if (prevProps.status !== this.props.status) {
         this.setState({
            status: this.props.status
         })
      }
      console.log('update')

   };

   editStateOn = () => {
      this.setState({
         editMode: true
      })
   };

   editStateOff = () => {
      this.setState({
         editMode: false
      })
   };

   submitStatement = (e) => {
      e.preventDefault()
      this.props.setStatus(this.state.status)
      this.editStateOff()


   };

   stateValue = (event) => {
      this.setState({ status: event.target.value })

   };

   render = () => {
      return (
         <div>
            {!this.state.editMode &&
               <p onDoubleClick={this.editStateOn}
                  className={status.profileStatus__text}>{this.state.status}
               </p>}
            { this.state.editMode &&
               <form className={status.profileStatus__inputWrapper}>
                  <input autoFocus={true}
                     maxLength={30}
                     className={status.profileStatus__input}
                     value={this.state.status}
                     onChange={e => this.stateValue(e)}>
                  </input>
                  <button onClick={this.submitStatement}
                     className={status.profileStatus__button + ' ' + status.profileStatus__buttonOn}></button>
                  <button onClick={this.editStateOff}
                     className={status.profileStatus__button + ' ' + status.profileStatus__buttonDel}></button>
               </form>
            }
         </div>
      )
   }
};

export default ProfileStatus;