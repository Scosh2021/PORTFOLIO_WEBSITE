import React from "react";
import Cards from "./cards";

function Projectsec(){
    let projects = [
        {
            id: 1,
            title: "Project 1",
            imageUrl: "https://s3.envato.com/files/238233065/preview.jpg",
            cardtext: "This Project is about..."
        },
        {
            id: 2,
            title: "Project 2",
            imageUrl: "data:image/jpeg;base64,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",
            cardtext: "This Project is about..."
        },
        {
            id: 3,
            title: "Project 3",
            imageUrl: "https://images.unsplash.com/photo-1544006659-f0b21884ce1d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bWFuJTIwd29ya2luZyUyMG9uJTIwY29tcHV0ZXJ8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80",
            cardtext: "This Project is about..."
        },
    ];
    return(
        <div className="container my-5 pt-5 pb-3 text-center">
            <h1 className="fw-light text-dark display-6">My <span className="text-info">Projects</span></h1>
            <p className="lead">I build Products just like this website.</p>
            <div className="row my-4 py-4">
                {
                    projects.map((project) => (
                        <div key={project.id} className="col-12 col-md-4 py-3">
                            <Cards 
                                project = {project}
                            />
                        </div>
                     ) )
                }
            </div>
            <div className="pe-2 text-end">
                <a href="/" className="text-dark" style={{textDecoration: "none"}}>
                    <h4 className="fw-normal">See more projects
                        <i className="ms-1 fas fa-arrow-right" style={{fontSize: "80%"}}></i></h4>
                </a>
            </div>
        </div>
    ); 
}

export default Projectsec;