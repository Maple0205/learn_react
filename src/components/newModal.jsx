import React from 'react';
import PropTypes from 'prop-types';
import { Button } from './index';

const NewModal = ({children, trigger, submit, title}) => {
  const [isVisible, setIsVisible] = React.useState(false);
  const setVisible = (e) => {
    setIsVisible(e);
  }

  const modalStyle = () => ({
    display: isVisible ? 'flex' : 'none',
    flexDirection: 'column',
    justifyContent: 'space-between',
    width: '600px',
    minHeight: '400px',
    margin: 'auto',
    border: 'thin solid lightGrey',
    position: 'fixed',
    left: '50%',
    top: '50%',
    transform: 'translate(-50%, -50%)',
    zIndex: 100,
  })

  const overLay = () => ({
    display: isVisible ? 'block' : 'none',
    position: 'fixed',
    left: 0,
    top: 0,
    width: '100%',
    height: '100%',
    zIndex: 100,
  })

  const defaultTrigger = (
    <Button onClick={()=>setVisible(!isVisible)}>New Modal</Button>
  );

  const TriggerElement = React.isValidElement(trigger) ? React.cloneElement(trigger, {
    onClick: ()=>setVisible(!isVisible)}) : defaultTrigger;

  const defaultSubmit = (
    <Button onClick={()=>alert('Are you sure to submit?')}>Submit</Button>
  )
  
  const SubmitElement = React.isValidElement(submit) ? React.cloneElement(submit, {
    onClick: ()=>alert('Are you sure to submit?')}) : defaultSubmit;

  return (
    <div>
      <div style={overLay()} onClick={()=>setVisible(false)}></div>
      {TriggerElement}
      <div style={modalStyle()}>
        <div style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          background: 'skyblue',
          padding: '10px',
        }}>
          <div style={{ alignSelf: 'flex-start' }}>{title}</div>
          <div style={{ alignSelf: 'flex-end', cursor: 'pointer' }} onClick={()=>setVisible(false)}>&times;</div>
        </div>
        <div>
          {children}
        </div>
        <div style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          padding: '5px',
          background: 'skyblue',
        }}>
          <div style={{flex: '1'}}></div>
          {SubmitElement}
        </div>
      </div>
    </div>
  )
}

NewModal.defaultProps = {
  title: 'New Modal',
}

NewModal.propTypes = {
  children: PropTypes.node,
  trigger: PropTypes.element,
  submit: PropTypes.element,
  title: PropTypes.string,
}

export default NewModal

