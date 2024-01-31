const React = require('react')
const Default = require('./layouts/default');
const bread = require('../models/bread');



function Index ({ breads }) {
    return (
      <Default>
        <h2>Home Page</h2>
        {/*<p>My favorite bread is {breads[0].name}!</p> */}
        <ul>
            { breads.map((bread, index) => {
                return(
                    <li key={index}>
                        <a href={`/breads/${index}`}>
                        { bread.name }
                        </a>
                    </li>
                )
            }) }
        </ul>

      </Default>
    )
}

module.exports = Index;



