const React = require('react')
const Default = require('./layouts/default');
const bread = require('../models/bread');



function Index ({ breads }) {
    return (
      <Default>
        <h2>Home Page</h2>
        <p>My favorite bread is {breads[0].name}!</p>
        <div className="newButton">
</div>

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
        <a href="/breads/new"><button>Add a new bread</button></a>
      </Default>
    )
}

module.exports = Index;



