import React, { Component } from 'react';

class Portfolio extends Component {
  render() {

    if(this.props.data){
      var projects = this.props.data.projects.map(function(projects){
        var projectImage = 'images/portfolio/'+projects.image;
        return <div key={projects.title} className="rows portfolio-item">
           <div className="item-wrap">
             <h2>{projects.title}</h2>
             <div className="columns description">
             {projects.description.map(function (desc) {
                  return (
                    <li key={desc}>
                      {desc}
                    </li>
                  );
                })}
              </div>
               <img className="image" alt={projects.title} src={projectImage}/>
          </div>
        </div>
      })
    }

    return (
      <section id="portfolio">

      <div className="row">

         <div className="twelve columns collapsed">

            <h1>Check Out Some of My Work.</h1>

            <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
                {projects}
            </div>
          </div>
      </div>
   </section>
    );
  }
}

export default Portfolio;