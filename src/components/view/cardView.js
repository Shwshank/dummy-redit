import React from "react";

class CardView extends React.Component {

  constructor(props) {
    super(props);
    this.state = {value:""};
  }

  componentDidUpdate = () =>{
    console.log(this.props);
  };

  displayData() {
    if(this.props.data.length) {
      var items = [];

      for (var i = 0; i < this.props.data.length; i++) {
        console.log(i);
        console.log(this.props.data);
        items.push(
            <div className="col-3 text-center p-2 float-left">
              <div key={this.props.data[i].id} className="card">
                <div className="card-body" >
                  <div className="card-title">
                    {(i+1)}. <b> {this.props.data[i].name} </b> <br/>
                  </div>
                  <div className="card-subtitle mb-2 text-muted">
                    {this.props.data[i].id} <br/> {this.props.data[i].name} <br/>
                  </div>
                </div>
              </div>
            </div>

          );
        }
      return items;
    }
  }

  render = () => {
    return (
      <div>
        {this.displayData()}
      </div>
    )
  }
}

export default CardView;
