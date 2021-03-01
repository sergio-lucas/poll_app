import React from "react";


function MoviesInsert() {
  return (
    <div>
      <form>
        <div className="form-group">
          <label htmlFor="poll_name">
            Name your poll field:
            <input type="input" className="form-control" id="poll_name" placeholder="Enter poll name" />
          </label>
        </div>
        <div className="form-group">
          <label htmlFor="poll_dates">
            Choose available dates field:
            <input type="input" className="form-control" id="poll_dates" placeholder="Choose dates" />
          </label>
        </div>
        <button type="submit" className="btn btn-primary">Save a poll</button>
      </form>
    </div>
  );
}

export default MoviesInsert;
