import React from "react";
import format from "date-fns/format";

export default class PostPreview extends React.Component {
  loaded() {
    if (window.load) {
      window.load();
    }
  }

  render() {
    const {entry, widgetFor, getAsset} = this.props;
    return <div className="row content-column">
      <div className="col-lg-8">
        <div className="content-column-content">
          <h1>{ entry.getIn(["data", "title"]) }</h1>
          { widgetFor("body") }
          { this.loaded() }
        </div>
      </div>
    </div>;
  }
}
