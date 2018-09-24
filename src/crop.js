import ReactCrop from 'react-image-crop';
import 'react-image-crop/dist/ReactCrop.css';

import React, { Component } from 'react';

// base 64
import {base64StringtoFile, downloadBase64File, extractImageFileExtensionFromBase64, image64toCanvasRef} from './resuableUtils';


// import { Button } from 'semantic-ui-react';
 
class Crop extends Component {

    constructor(props) {
      super(props)
      this.imagePreviewCanvasRef = React.createRef()
      this.state = {
          imgSrc:"https://seeklogo.com/images/S/snorks-baby-nathals-logo-28004DFEB3-seeklogo.com.jpg",
          crop: {
            x: 20,
            y: 10,
            width: 30,
            height: 10,
          },
      }
    }

    handleImageLoaded = (image) => {
      console.log(image)
    }

    // hier muss ich nochmal schauen ob es auch ohne arroy Function geht
    handleOnCropChange = (crop) => {
      this.setState({crop:crop})
    }

    handleOnCropComplete = (crop, pixelCrop) => {
      console.log(crop, pixelCrop)

      const canvasRef = this.imagePreviewCanvasRef.current
      const {imgSrc} = this.state
      image64toCanvasRef(canvasRef, imgSrc, pixelCrop )   
    }

    handleDownloadClick = (event) => {
      event.preventDevault()
      // const canvasRef = this.imagePreviewCanvasRef.current
      // const {imgSrc} = this.state
    }

  render() {

    const imgSrc ="https://seeklogo.com/images/S/snorks-baby-nathals-logo-28004DFEB3-seeklogo.com.jpg"

    return (

      <div>
          <ReactCrop 
          src={imgSrc}
          crop={this.state.crop}
          onImageLoaded={this.handleImageLoaded}
          onComplete={this.handleOnCropComplete}
          onChange={this.handleOnCropChange}
          />
          <br/>
          <p>Preview Canvas Crop</p>
          <canvas
          ref={this.imagePreviewCanvasRef}
          ></canvas>          
      </div>
    );
  }
}

export default Crop;
