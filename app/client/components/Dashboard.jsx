import React from 'react';
import LeftNavigation from './LeftNavigation' ;

class Dashboard extends React.Component {
  render() {
    return <div className='wrapper'>
      // Left navigation
      <LeftNavigation/>
    </div>
  }
}
export default Dashboard;