const React = require('react')
import Default from './layouts/Default'

export default function Show({ bread }) {
    console.log(bread.name) //this is to confirm we are getting data in our terminal
    return(
        <Default>
            <h2>Show Page</h2>
            <h3>{bread.getBakedBy()}</h3>
            <p>
                and it
                {
                    bread.hasGluten 
                    ? <span> does </span>
                    : <span> does NOT </span>
                }
                have gluten.
            </p>
            <form action={`/breads/${bread._id}?_method=DELETE`} method="POST">
                <input type='submit' value="DELETE"/>
            </form>
            <a href={`/breads/${bread._id}/edit`}><button>Edit</button></a>
            <button>
                <a href='/breads'>Go home</a>
            </button>
            <img src= {bread.image} alt= {bread.name} />
        </Default>
    )
}