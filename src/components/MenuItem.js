import React from 'react';


// This is a functional component that represents a single menu item. It currently takes in the title and displays it in an h2 element.
// Modify the component to take in all the other properties of a menu item you need and display them in the component.
// Use bootstrap to style the elements so that it looks like the mockup in the assignment.
// Hint: You can use the image name to get the image from the images folder.
const MenuItem = ({ title, description, imageName, price }) => {
    return (
      <div className="row align-items-center mb-3">
        <div className="col-4 d-flex justify-content-center">
          <img src={`/images/${imageName}`} alt={title} className="item_pictures" />
        </div>
        <div className="col-8 d-flex flex-column justify-content-between">
          <div>
            <h5>{title}</h5>
            <p className="description">{description}</p>
          </div>
          <div className="d-flex justify-content-between align-items-center mt-auto">
            <p className="text-muted mb-0">${price.toFixed(2)}</p>
            <button className="btn btn-dark">Add</button>
          </div>
        </div>
      </div>
    );
  };
  

export default MenuItem;
