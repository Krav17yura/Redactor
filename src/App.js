import React, {useState} from 'react'
import marked from 'marked'
import './App.css';

function App() {
    const [markdown, setMarkdown] = useState( '# sup ')

    return (
        <div className="app">
            <textarea onChange={event => setMarkdown(event.target.value)} value={markdown}/>
            <div
                className="preview"
                dangerouslySetInnerHTML={{__html: marked(markdown)}}
            />
        </div>
    );
}

export default App;
