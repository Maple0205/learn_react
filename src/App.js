import { Button, Modal, NewModal } from './components';
import './App.css';

// const content = 
//   "The SLDC involves several distinct stages, often including but not limited to:" +
//   "\n\nRequirement Analysis: This initial stage involves gathering the requirements from stakeholders, including the intended users and any other involved parties. The goal is to understand what the software needs to do, who will use it, and how it will be used. This phase is crucial for laying the groundwork for the entire project.";


function App() {

  const customTrigger = (
    <Button>
      Open Modal
    </Button>
  );

  const NewModalTrigger = (
    <Button>
      Open New Modal
    </Button>
  );

  const customSubmit = (
    <Button>
      submit
    </Button>
  );

  return (
    <div className="App" style={{margin: 'auto', alignItems: 'center', marginTop: '100px'}}>
      {/* <components.Button children='press me' size='xl' color='green'/> */}
      <Button style={{margin: '20px'}} onclick={()=>alert('You did it!')}>Open Button</Button>
      <Modal size='600px' trigger={customTrigger} title='Modal'>

      </Modal>
      <div style={{margin:'20px'}}></div>
      <NewModal trigger={NewModalTrigger} submit={customSubmit}>
        <div style={{ margin: '10px' }}>
          <p>
            In the quiet of early morning, the world feels untouched and serene. A gentle mist hangs over the landscape, softening the edges of the earth and sky, blurring the boundary between them. The air is cool and fresh, filled with the scent of dew-covered grass and the subtle perfume of awakening flowers.

            Birds begin their daily symphony, each note a delicate thread in the tapestry of dawn. Their songs are full of hope, a reminder that each day is a new beginning, an opportunity to create something beautiful.

            As the sun peeks over the horizon, its rays spilling like liquid gold across the land, it illuminates the dewdrops, turning them into a myriad of tiny, sparkling diamonds. The world slowly awakens, bathed in the soft, golden light of morning, full of promise and possibilities.

            In these moments, time seems to stand still, offering a chance to reflect, to breathe, to simply be. It is a magical time, when dreams feel tangible and the mundane worries of life fade into the background, if only for a little while. The dawn, with its quiet beauty and hopeful light, reminds us that no matter the darkness, the sun will always rise again.
          </p>
          <input placeholder='Do you like it?' />
        </div>
      </NewModal>
    </div>
  );
}

export default App;
