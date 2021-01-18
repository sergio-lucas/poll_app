import React, { Component } from 'react'

class MoviesInsert extends Component {
    render() {
        return (
            <div>
                <form>
                  <div class="form-group">
                    <label for="poll_name">Name your poll field:</label>
                    <input type="input" class="form-control" id="poll_name" placeholder="Enter poll name" />
                  </div>
                  <div class="form-group">
                    <label for="poll_dates">Choose available dates field:</label>
                    <input type="input" class="form-control" id="poll_dates" placeholder="Choose dates" />
                  </div>
                  <button type="submit" class="btn btn-primary">Save a poll</button>
                </form>
            </div>
        )
    }
}

export default MoviesInsert
