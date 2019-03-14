import React, {Component} from 'react';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';
import {connect} from "react-redux";
import {Button} from "antd";
import {modalDocs} from "../../../Parceiro/redux/action";

let images = [
  '//placekitten.com/1500/500',
  '//placekitten.com/4000/3000',
  '//placekitten.com/800/1200',
  '//placekitten.com/1500/1500',
];

let photoIndexGlobal = 0;

class SlideShow extends Component {
  constructor(props) {
    super(props);

    photoIndexGlobal = 0;

    this.state = {
      photoIndex: 0,
      isOpen: false
    };
  }

  componentWillReceiveProps(nextProps: Readonly<P>, nextContext: any): void {
    this.setState({
      isOpen: nextProps.open,
      photoIndex: nextProps.index
    });

    images = nextProps.documentos;
    photoIndexGlobal = nextProps.index;
  }

  render() {
    const { photoIndex, isOpen } = this.state;

    return (
      <div>
        {isOpen && (
          <Lightbox
            imageLoadErrorMessage={<Button href={`https:${images[photoIndexGlobal]}`} className="pdf-download" onClick={() => {
              console.log('donwload index: ' + photoIndexGlobal+ ' download src: https:' + images[photoIndexGlobal])
            }}><span className="fa fa-download"/> PDF</Button>}
            mainSrc={images[photoIndexGlobal]}
            nextSrc={images[(photoIndexGlobal + 1) % images.length]}
            prevSrc={images[(photoIndexGlobal + images.length - 1) % images.length]}
            onCloseRequest={() => {

              photoIndexGlobal = 0;
              this.props.visibleModalDocs(false);
              this.setState({ isOpen: false })
            }}
            onMovePrevRequest={() =>{
              photoIndexGlobal = (photoIndex + images.length - 1) % images.length;
              this.setState({
                photoIndex: photoIndexGlobal,
              })
            }}
            onMoveNextRequest={() =>{
              photoIndexGlobal = (photoIndex + 1) % images.length;
              this.setState({
                photoIndex: photoIndexGlobal,
              })
            }}
            onImageLoadError={(imageSrc: string, srcType: string, errorEvent: object) => {

            }}
          />
        )}
      </div>
    );
  }
}

const mapStateToProps = store => {
  return {
    store: store
  }
};

const mapToDispatchToProps = dispatch => {
  return {
    visibleModalDocs: (visible) => dispatch(modalDocs(visible))
  }
};

export default connect(mapStateToProps, mapToDispatchToProps)(SlideShow);
