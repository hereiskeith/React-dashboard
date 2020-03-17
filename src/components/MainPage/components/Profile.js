import React from 'react';
import { connect } from 'react-redux';
import './style-profile.scss';
import { actionCreators } from '../store';
import {
  mdiBlurRadial,
  mdiForum,
  mdiBellAlert,
  mdiMenu
} from '@mdi/js';
import Icon from '@mdi/react';
import Avatar from '../../../static/avatar.png';

const EachIcon = props => {
  return (
    <Icon
      path={props.icon}
      title="profile icon"
      size={1/1.5*0.83*1.3}
      horizontal
      vertical
      rotate={180}
      className='profile-icon'
      color="#BCBCCB"
    />
  )
}

const Profile = props => {
  const { lastName, firstName, minimized, setMinimized } = props;

  return (
    <div className={'profile-wrapper ' + (minimized?'profile-wrapper-expand':'')}>
      <h4 className={'profile-title '
          +(minimized?'profile-title-minimized':'')}>
        AWESOME DASH
      </h4>

      {/*Menu icon shown in mobile view*/}
      <Icon path={mdiMenu}
            title="Menu Title"
            size={1/1.5*1.5}
            horizontal
            vertical
            color="#595874"
            className='profile-menu-icon'
            onClick={() => setMinimized(minimized)}
      />

      <EachIcon icon={mdiBlurRadial}/>
      <EachIcon icon={mdiForum}/>
      <EachIcon icon={mdiBellAlert}/>

      <div className='profile-vertical-divider'/>

      <h4 className='profile-name'>
        {firstName && lastName ?
          `${firstName} ${lastName}`:
          'John Joe'
        }
      </h4>

      <img alt='profile-avatar' src={Avatar} className='profile-avatar'/>
    </div>
  )
};

const mapState = state => ({
  firstName: state.getIn(['account', 'user', 'firstName']),
  lastName: state.getIn(['account', 'user', 'lastName']),
  focus: state.getIn(['mainPage', 'focus']),
  minimized: state.getIn(['mainPage', 'minimized'])
});

const mapDispatch = dispatch => ({
  setMinimized(minimized) {
    dispatch(actionCreators.setMinimized(minimized))
  }
});

export default connect(mapState, mapDispatch)(Profile);