import React from "react";

class Question extends React.Component {
  render() {
    return (
      <div className="question">
        <div className="topic">
          <span className="topic-content">study</span>
        </div>
        <div className="query">
          <span className="query-content">
            why we study in forgeien so that we can learn
          </span>
        </div>

        <div className="tags-name">
          <ul className="horizontal-list">
            <li>
              <span className="tag-content">study</span>
            </li>
            <li>
              <span className="tag-content">usa</span>
            </li>

            <li>
              <span className="tag-content">forgein</span>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Question;
