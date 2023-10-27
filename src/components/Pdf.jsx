import React, { Component } from 'react'

export default class Pdf extends Component {
  render() {
    return (
      <div className="container-fluid overflow-hyg">
        <div className='pdf'>
          <object data={require('../docs/Demo.pdf')} type="aplication/pdf">

          </object>
        </div>

      </div>
    )
  }
}
