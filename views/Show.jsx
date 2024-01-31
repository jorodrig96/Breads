const React = require('react')
import Default from './layouts/default'

export default function Show({ bread }) {
    console.log(bread.name) //this is to confirm we are getting data in our terminal
    return(
        <Default>
            <h2>Show Page</h2>
            <h3>{bread.name}</h3>
            <p>
                and it
                {
                    bread.hasGluten 
                    ? <span> does </span>
                    : <span> does NOT </span>
                }
                have gluten.
            </p>
            <img src= {bread.image} alt= {bread.name} />
            <button>
                <a href='/breads'>Go home</a>
            </button>
        </Default>
    )
}