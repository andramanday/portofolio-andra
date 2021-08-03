import React, { Component } from "react";
import '../../styles/experience.scss';
import LoaderIMG from '../../../assets/img/loader.gif'

export class Experience extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    if (!this.props.experiences) {
      this.props.getExperience()
    }

  }

  render() {
    const { experiences, loading } = this.props

    return(

      <>
         {loading? 
          <div className="loader-img">
              <img src={LoaderIMG} width="100vh"/>
          </div>
        :
        <div className="experience-page">
        <ul className="timeline">
        {experiences && experiences.map((p, index) =>
        
          <li key={index}>
            <div className={index%2==0 ? "direction-l" : "direction-r"}>
              <div className="flag-wrapper">
                <span className="flag"><a href={p.URL}>{p.COMPTITLE}</a></span>
                <span className="time-wrapper"><span className="time">{p.ACTIVEYEAR}</span></span>
              </div>
              <div className="desc" 
                       dangerouslySetInnerHTML={{__html:  `<h2>${p.JOBTITLE}</h2> ${p.JOBDESC}`}} />
            </div>
          </li>
         )}
        </ul>
        </div>
        }
        </>
    )
  } 
}

export default Experience;