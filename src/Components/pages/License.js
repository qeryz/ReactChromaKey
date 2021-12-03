import React from 'react';
import '../../App.css';
import { useEffect } from 'react';
import './License.css';

export default function License() {
  useEffect (() => {
    document.body.style.backgroundColor = '#202020';
},[]);

  function NewlineText(props) {
    const text = props.text;
    const newText = text.split('\n').map(str => <p>{str}</p>);
    
    return newText;
  }

  return (
      // <h1>
      //   LICENSE USE
      // </h1>
      <>
        <i className="fas fa-file-signature"></i>
        <p className='details'>
          <NewlineText text={'Licensed under the Apache License, Version 2.0 (the "License");\n' +
          'you may not use this file except in compliance with the License.\n' +
          'You may obtain a copy of the License at\n' +
          'http://www.apache.org/licenses/LICENSE-2.0\n' +
          'Unless required by applicable law or agreed to in writing, software\n' +
          'distributed under the License is distributed on an "AS IS" BASIS,\n' +
          'WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n' +
          'See the License for the specific language governing permissions and\n' +
          'limitations under the License.\n'} />
        </p> 
      </>
  )
}