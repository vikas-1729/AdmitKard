import React from "react";
import Question from "./Question";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      tab: "search",
      question: "",
    };
  }
  getData = () => {
    let query = document.getElementById("query");
    let topic = document.getElementById("topic");
    let tagsArray = document.getElementsByName("tags");
    let tags = [];
    for (let i of tagsArray) {
      if (i.checked === true) {
        tags.push(i.value);
      }
    }
    return {
      query: query.value,
      topic: topic.value,
      tags: tags,
    };
  };
  formSearchSubmit = async (e) => {
    e.preventDefault();
    let value = document.getElementsByName("value").value;
    let searchBy = document.getElementsByName("searchBy");
    try {
      let respons = await fetch(
        `http://192.168.0.104/8000/api/v1/search?searchBy=${searchBy}&value=${value}`
      );
      let data = respons.json();
      this.setState({
        question: data,
      });
    } catch (error) {
      console.log(error);
    }
  };
  formInsertSubmit = async (e) => {
    console.log(e);
    e.preventDefault();
    let body = this.getData();
    console.log(body);
    let response = await fetch("http://192.168.0.104/8000/api/v1/insert", {
      method: "POST",
      body: JSON.stringify(body),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
    let data = await response.json();
    console.log("data", data);
    return;
  };
  render() {
    return (
      <div id="main-container">
        <div className="left">
          <div className="search-block">
            <form onSubmit={this.formSearchSubmit}>
              <input
                type="text"
                className="form-control"
                name="value"
                placeholder="enter the text"
                required
              />
              <select name="searchBy">
                <option value="tag">Tag</option>
                <option value="topic">Topic</option>
                <option value="query">Query</option>
              </select>
            </form>
          </div>
          <Question />
        </div>

        <div className="right">
          <form method="post" onSubmit={this.formInsertSubmit}>
            <div className="form-group">
              <label htmlFor="query">Query</label>
              <textarea
                className="form-control"
                id="query"
                aria-describedby="queryHelp"
                placeholder="Enter query"
                required
                rows="3"
              ></textarea>
            </div>
            <div className="form-group">
              <label htmlFor="topic">Topic</label>
              <select
                className="form-control"
                id="topic"
                aria-describedby="topicHelp"
                placeholder="chosse topic"
                required
              >
                <option value="study">Study</option>
                <option value="usa">usa</option>
                <option value="India">India</option>
                <option value="Britian">Britian</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="tags">Tags</label>
              <br></br>
              <input type="checkbox" name="tags" value="usa" />
              USA
              <br></br>
              <input type="checkbox" name="tags" value="america" />
              america
              <br></br>
              <input type="checkbox" name="tags" value="study2" />
              europe
              <br></br>
              <input type="checkbox" name="tags" value="study1" />
              study
              <br></br>
            </div>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </div>
    );
  }
}
export default App;
