"use strict";

function Homepage() {
  return (
    <div className="flex-box">
      
      <h1>Welcome User!</h1>
      <p><a href="/cards">Trading Cards</a></p>
      <img src="/static/img/balloonicorn.jpg" alt="Picture of Balloonicorn"/>


    </div>
  );
}

ReactDOM.render(<Homepage />, document.querySelector('#app'));
