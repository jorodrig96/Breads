const React = require('react');
import Default from './layouts/Default';
const bread = require('../models/bread');

function Index({ breads }) {
  return (
    <Default>
      <h2>Home Page</h2>
      {breads && breads.length > 0 ? (
        <>
          <p>My favorite bread is {breads[0].name}!</p>
          <ul>
            {breads.map( bread => {
                console.log(bread.id)
              return (
                <li key={bread.id}>
                  <a href={`/breads/${bread.id}`}>{bread.name}</a>
                </li>
              );
            })}
          </ul>
        </>
      ) : (
        <p>No breads found</p>
      )}
      <a href="/breads/new">
        <button>Add a new bread</button>
      </a>
    </Default>
  );
}

module.exports = Index;
