const React = require('react');
import Default from './layouts/Default';
const bread = require('../models/bread');

function Index({ breads, bakers }) {
  return (
    <Default>
      <h2>Home Page</h2>
      {breads && breads.length > 0 ? (
        <>
          <p>My favorite bread is {breads[0].name}!</p>
          <ul>
            {breads.map( bread => {
                console.log(bread._id)
              return (
                <li key={bread._id}>
                  <a href={`/breads/${bread._id}`}>{bread.name}</a>
                </li>
              );
            })}
          </ul>
        </>
      ) : (
        <p>No breads found</p>
      )}
      <h6> 
        <ul>{
          bakers.map((baker) => {
            return (
              <li key = {baker._id}>
                <a href={`/bakers/${baker._id}`}>{baker.name}</a>
              </li>
            )
          })}</ul>
      </h6>
      <a href="/breads/new">
        <button>Add a new bread</button>
      </a>
    </Default>
  );
}

module.exports = Index;
