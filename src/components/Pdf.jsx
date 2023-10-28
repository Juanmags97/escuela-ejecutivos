import React, { Component } from 'react'
import '../pdf.css'
import PDF from '../docs/Demo.pdf'

// import styled from 'styled-components'

export default class Pdf extends Component {
  render() {
    return (
      <div className="container-fluid overflow-hyg">
        <div className='pdf'>
          {/* <object data={require('../docs/Demo.pdf')} type="aplication/pdf">

          </object> */}
            <iframe src={PDF}  className='pdf' ></iframe>
        </div>

      </div>
    )
  }
}

