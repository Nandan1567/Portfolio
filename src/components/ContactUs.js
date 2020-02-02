import React, { Component } from 'react';
export default class ContactUs extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="contact">
        <div className="row section-head">
          <div className="ten columns">
            <p className="lead">
              Feel free to contact me for any work or suggestions below
              </p>
          </div>
        </div>
        <div className="row">
          <aside className="eigth columns footer-widgets">
            <div className="widget" style={{paddingLeft: '200px' }}>
            
                Name:<input type="text" style={{width:'500px',height:'20px',border:'solid 2px '}} />
                Email:<input type="text" style={{width:'500px',height:'20px',border:'solid 2px '}} />
               <div style={{paddingLeft: '200px'}}><button>Submit</button></div> 
            </div>
          </aside>
        </div>
      </section>
    );
  }
}