import React from 'react';

function PuppyCard({ puppy: { name, breed, imgURL, total_favs } }) {
  return (<div className="col-4 col-sm-6">
    <div className="card">
      <img className="card-img-top" alt={name} src={imgURL} />
      <div className="card-body">
        <p className="card-title">{name} <small>({breed})</small></p>
        <p>{total_favs} {total_favs === 1 ? 'favorite' : 'favorites'}</p>
      </div>
    </div>
  </div>);
}

export default PuppyCard;
