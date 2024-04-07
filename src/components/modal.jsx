import React from 'react';
import PropTypes from 'prop-types';
import { Button } from './index';

const Modal = ({ children, size, trigger, submit, title }) => {
  const [isVisible, setIsVisible] = React.useState(false);

  const displayStyle = () => ({
    display: isVisible ? 'flex' : 'none',
    border: isVisible ? '2px solid lightgrey' : 'none',
    width: size,
    minHeight: '300px',
    flexDirection: 'column',
    justifyContent: 'space-between',
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    zIndex: 1000,
  });

  const overLay = () => ({
    display: isVisible ? 'block' : 'none',
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    zIndex: 1000,
  })

  const DefaultTrigger = (
    <Button onClick={() => setIsVisible(!isVisible)}>Click me</Button>
  );

  const DefaultSubmit = (
    <Button onClick={() => setIsVisible(!isVisible)} style={{margin: '5px'}}>Submit</Button>
  );

  const TriggerElement = React.isValidElement(trigger) ? React.cloneElement(trigger, {
    onClick: () => setIsVisible(!isVisible),
  }) : DefaultTrigger;

  const SubmitElement = React.isValidElement(submit) ? React.cloneElement(submit, {
    onClick: () => setIsVisible(!isVisible),
  }) : DefaultSubmit;

  return (
    <div>
      <div style={overLay()} onClick={()=>setIsVisible(false)}></div>
      {TriggerElement}
      <div style={displayStyle()}>
        <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              padding: '10px',
              background: 'skyblue',
            }}
          >
          <span
            style={{
              alignSelf: 'flex-start',
            }}
          >{title}</span>
          <span
            onClick={()=>setIsVisible(false)}
            style={{
              alignSelf: 'flex-end',
              cursor: 'pointer',
            }}
          >
            &times;
          </span>
        </div>
        <div>
          {children}
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            padding: '10px',
          }}
        >
          <div style={{ flex: 1 }} />
          <div>
            {SubmitElement}
          </div>
          {/* <div>
            {SubmitElement}
          </div> */}
        </div>
      </div>
    </div>
  )
}

Modal.propTypes = {
  children: PropTypes.node,
  size: PropTypes.string,
  trigger: PropTypes.element,
  submit: PropTypes.element,
  title: PropTypes.string,
}

Modal.defaultProps = {
  size: '400px',
  trigger: undefined,
  submit: undefined,
  title: 'New Modal',
};

export default Modal
