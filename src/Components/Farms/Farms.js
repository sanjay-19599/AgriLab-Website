import React from "react"
import farm from './img.jpg'
export default class Pricing extends React.Component {
  
  render(){
    return (
      <div className="container pt-5">
        <div className="row mx-auto">
          <div className="col-lg-4">
            <div className="shadow-lg">
              <img src={farm} alt="Fruits" className="mx-auto img-fluid"  />
                <div class="d-grid gap-2">
                  <button className="btn btn-success d-block" name="fruits" value="fruits">Farm 1</button>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="shadow-lg">
                 <img src={farm} alt="Vegetables" className="mx-auto img-fluid"/>
                 <div class="d-grid gap-2">
                  <button className="btn btn-success d-block" name="vegetables" value="vegetables">Farm 2</button>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="shadow-lg">
                <img src={farm} alt="Dairy" className="mx-auto img-fluid"/>
                <div class="d-grid gap-2">
                  <button className="btn btn-success d-block" name="dairy" value="dairy">Farm 3</button>
                </div>
              </div>
            </div>
        </div>
      </div>  
    )
  }
}
