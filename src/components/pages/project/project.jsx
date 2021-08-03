import React, { Component } from "react";
import '../../styles/project.scss';
import { Fade, Zoom } from 'react-reveal';

export class Project extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        if (!this.props.projects) {
            this.props.getProject()
        }
    }

  render() {
    const { projects } = this.props
    console.log(projects);
    return(
        <div className="project-wrap">
            {projects && projects.map(function(item, i){
                return(
                    <div className="project-item">
                        <Zoom><img src={`https://api.antarracoding.com/${item.URL}`} alt=""/></Zoom>
                        <Fade><div className="project-info">
                            <p className="info-title">{item.TITLE}</p>
                            <pre className="info-title">CLIENT  : {item.CLIENT}</pre>
                            <pre className="info-title">YEAR    : {item.YEAR}</pre>
                            <pre className="info-title">LOKASI  : {item.Location}</pre>
                            <pre className="info-title">TECH    : {item.TOOLS}</pre>
                            <pre className="info-title">DESC    : {item.DESC}</pre>
                        </div></Fade>
                    </div>
                )
            })}
        </div>
    )
  }
}


export default Project;