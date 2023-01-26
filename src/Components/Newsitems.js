import React from "react";
const  Newsitems =(props)=> {
    let { description, title, imageUrl, newsUrl, source, author, date } =
      props;
    return (
      <div className="container my-4">
        <div className="row">
          <div className="col-md-3">
            <div className="card" style={{ width: "18rem" }}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "flex-end",
                  position: "absolute",
                  right: "0",
                }}
              >
                <span className="badge rounded-pill bg-danger"> {source} </span>
              </div>

              <img
                src={
                  imageUrl
                    ? imageUrl
                    : "https://cdn.zeebiz.com/sites/default/files/2022/12/27/218230-m1.jpg"
                }
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{description}</p>
                <p className="card-text">
                  <small className="text-muted">
                    By {!author ? "NewsDaddy" : author} on {date}
                  </small>
                </p>

                <a
                  href={newsUrl}
                  rel="noreferrer"
                  target="_blank"
                  className="btn btn-dark"
                >
                  Read more
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );

}
export default Newsitems;