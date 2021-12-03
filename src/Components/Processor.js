var canvas1 = document.getElementById('canvas');
var canvas2 = document.getElementById('canvas2');
var videoElement = document.getElementById('video');

// Set of function under processor, solely responsible for video composites
let processor = {
    doLoad: function() {
      this.video = document.getElementById('video');
  
      this.c1 = document.getElementById('canvas');
      this.ctx1 = this.c1.getContext("2d");
  
      this.c2 = document.getElementById('canvas2');
      this.ctx2 = this.c2.getContext("2d");
  
      let self = this;
  
      this.video.addEventListener('play', function(){
        
        self.width = self.video.videoWidth;
        self.height = self.video.videoHeight;
        self.timerCallback();
      });
  
      this.video.addEventListener('loadeddata', function(){
        
        canvas1.width = videoElement.videoWidth;
        canvas1.height = videoElement.videoHeight;
  
        canvas2.width = videoElement.videoWidth;
        canvas2.height = videoElement.videoHeight;
  
        self.width = self.video.videoWidth;
        self.height = self.video.videoHeight;
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
      this.ctx1.drawImage(this.video, 0, 0, this.width, this.height);
      let frame = this.ctx1.getImageData(0, 0, this.width, this.height);
      let l = frame.data.length / 4;
  
      for (let i = 0; i < l; i++){
        let r = frame.data[i * 4 + 0];
        let g = frame.data[i * 4 + 1];
        let b = frame.data[i * 4 + 2];
        if (g > r + b) {
          frame.data[i * 4 + 3] = 0;
        }
      }
      this.ctx2.putImageData(frame, 0, 0);
    }
  };

  export default processor