import React from 'react';
import { ChatEngine } from 'react-chat-engine';
import ChatFeed from './Components/ChatFeed'

const App = () => {
	return (
		<ChatEngine
			height='100vh'
			userName='dracule_62'
			userSecret='Poiuytrewq'
      projectID='4e8cb252-84e6-4777-bfc9-d255f3eb1482'
      renderChatFeed = { (chatAppProps)=><ChatFeed {...chatAppProps}/>}
		/>
	);
}

export default App;