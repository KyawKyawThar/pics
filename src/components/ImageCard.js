import React from "react";

class ImageCard extends React.Component {
  constructor() {
    super();
    this.imageRef = React.createRef();
  }

  componentDidMount() {
    console.log(this.imageRef);
    console.log(this.imageRef.current.clientHeight);
  }
  render() {
    const { description, urls } = this.props.a;
    return (
      <div>
        <img ref={this.imageRef} alt={description} src={urls.regular} />
      </div>
    );
  }
}

export default ImageCard;
