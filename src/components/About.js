import React from "react";

export default function About(props) {
  return (
    <div className={`container my-3 text-${props.mode === "light" ? "dark":"light"}`}>
      <h1>About Us</h1>
      <hr />
      <div className="accordion" id="accordionPanelsStayOpenExample">
        <div className="accordion-item">
          <h2 className="accordion-header" id="panelsStayOpen-headingOne">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#panelsStayOpen-collapseOne"
              aria-expanded="true"
              aria-controls="panelsStayOpen-collapseOne"
            >
              Analyze you text
            </button>
          </h2>
          <div
            id="panelsStayOpen-collapseOne"
            className="accordion-collapse collapse show"
            aria-labelledby="panelsStayOpen-headingOne"
          >
            <div className={`accordion-body bg-${props.mode === "dark" ? "dark":"light"}`}>
              TextUtils gives you a way to analyze your text quickly and efficiently. Be it word count, character count.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="panelsStayOpen-headingTwo">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#panelsStayOpen-collapseTwo"
              aria-expanded="false"
              aria-controls="panelsStayOpen-collapseTwo"
            >
             Free to use
            </button>
          </h2>
          <div
            id="panelsStayOpen-collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="panelsStayOpen-headingTwo"
          >
            <div className={`accordion-body bg-${props.mode === "dark" ? "dark":"light"}`}>
              TextUtils is a free character counter tool that provides instant character count & word count statics for a given text. TextUtils reports tha number of words and characters. Thus it is a suitable for writing text with word/ character limit.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="panelsStayOpen-headingThree">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#panelsStayOpen-collapseThree"
              aria-expanded="false"
              aria-controls="panelsStayOpen-collapseThree"
            >
              Browser Compatible
            </button>
          </h2>
          <div
            id="panelsStayOpen-collapseThree"
            className="accordion-collapse collapse"
            aria-labelledby="panelsStayOpen-headingThree"
          >
            <div className={`accordion-body bg-${props.mode === "dark" ? "dark":"light"}`}>
              This word counter software works in any web browser such as chrome, Firefox, Internet Explorer, Safari, Opera. It Suits to count characters in facebbook, blog, books, excel document, pdf document, essays, etc.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
