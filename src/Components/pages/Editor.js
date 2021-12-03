import '../../App.js';

import FileUploader from '../FileUploader.js';

function Editor(){
    return (
        <>
        <div className="buttons">
            <FileUploader/>
        </div>
        
        <div className="c1">
            <canvas id="canvas" style={{width:'100%', height: 'auto', display: 'none'} }/>
        </div>

        <div className="c2">
            <canvas id="canvas2" style={{width:'100%', height: 'auto', display: 'flex'} } />
        </div>

        <div className="vid">
            <video style={{width:'100%', height: 'auto', display: 'none'} } id='video' autoPlay loop muted playsInline controls/>
        </div>
        </>
    )
}

export default Editor;