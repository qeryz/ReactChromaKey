import React from 'react';
import '../App.js';
import { Button } from './Button';
import './FileUploader.css';

var canvas2; 
var canvas; 
var ctx1, ctx2;
var videoElement;

const FileUploader = props => {
    
  // Create a reference to the hidden file input element
  const hiddenFileInput = React.useRef(null);
  
  // Programatically click the hidden file input element
  // when the Button component is clicked
  const handleClick = event => {
    hiddenFileInput.current.click();
  };
  // Call a function (passed as a prop from the parent component)
  // to handle the user-selected file 
  const handleChange = event => {
    if (event.target.files[0] === undefined) {return}
    const fileUploaded = event.target.files[0];
    const fileType = fileUploaded['type'];
    const validImageTypes = ['image/jpeg', 'image/png', 'image/jpg'];
    // console.log(fileUploaded);

    var reader  = new FileReader();  
    reader.readAsDataURL(fileUploaded);

    reader.onloadend = function (e) {
      if (validImageTypes.includes(fileType)){
        var image = new Image();
        image.src = reader.result;

        image.onload = function(event) {

          canvas2 = document.getElementById('canvas2');
          canvas = document.getElementById('canvas');

          canvas2.style.display='flex';
          canvas2.style.backgroundImage = "url(" + reader.result + ")";
        }
      }
      else{
        canvas2 = document.getElementById('canvas2');
        canvas = document.getElementById('canvas');

        ctx1 = canvas.getContext('2d');
        ctx2 = canvas2.getContext('2d');

        videoElement = document.getElementById('video');
        videoElement.src = reader.result;
        videoElement.style.display='flex';

        videoElement.load();
        videoElement.play();

        videoElement.addEventListener('play', () => {
          
          processor.doLoad();
        });
        
        
      }
    }

  };

  let processor = {
    doLoad: function() {
      this.video = document.getElementById('video');
      let self = this;
  
      this.video.addEventListener('play', function(){
        self.timerCallback();
      } );
  
      this.video.addEventListener('loadeddata', function(){
        
        canvas.width = self.video.videoWidth;
        canvas.height = self.video.videoHeight;
  
        canvas2.width = self.video.videoWidth;
        canvas2.height = self.video.videoHeight;

        self.timerCallback();
      });
  
    },
    timerCallback: function() {
      
      if (this.video.paused || this.video.ended) {
        return;
      }
      this.computeFrame();
      let self = this;
      setTimeout(function(){
        self.timerCallback();
      }, 0);
    },
    computeFrame: function() {
      ctx1.drawImage(this.video, 0, 0, canvas.width, canvas.height);
      const frame = ctx1.getImageData(0, 0, canvas.width, canvas.height);
      const l = frame.data.length / 4;
  
      for (let i = 0; i < l; i++){
        let r = frame.data[i * 4 + 0];
        let g = frame.data[i * 4 + 1];
        let b = frame.data[i * 4 + 2];
        if (g > r + b) {
          frame.data[i * 4 + 3] = 0;
        }
      }
      ctx2.putImageData(frame, 0, 0);
    }
  };

  return (
    <>
    <div className='file-uploads'>
      <div className='file1'>
      <i className="far fa-caret-square-up"></i>
        <Button onClick={handleClick} className='btnC' buttonStyle='btn--upload' buttonSize='btn--medium'>
          SELECT A FOREGROUND
          </Button>&nbsp;&nbsp;&nbsp;
        <input
          type="file"
          ref={hiddenFileInput}
          onChange={handleChange}
          style={{display: 'none'}}
        />
      </div>
      
      <div className='file1'>
        <i className="far fa-caret-square-up"></i>
        <Button onClick={handleClick} className='btnC' buttonStyle='btn--upload' buttonSize='btn--medium'>
          SELECT A BACKGROUND
          </Button>&nbsp;&nbsp;&nbsp;
        <input
          type="file"
          ref={hiddenFileInput}
          onChange={handleChange}
          style={{display: 'none'}}
        />
      </div>
      
    </div>
      
    </>
  );
}

export default FileUploader;