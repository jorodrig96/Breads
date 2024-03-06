const React = require('react');
import Default from './layouts/Default';

export default function Edit({ bread, index }){
    return(
        <Default>
              <h2>Edit Your Bread</h2>
              <form action={`/breads/${bread.id}?_method=PUT`} method="POST">

          <label htmlFor="name">Bread Name:</label>
          <input
            type="text"
            name="name"
            id="name"
            required
            defaultValue={bread.name}
          />
          <label htmlFor="image">Bread Image:</label>
          <input
            type="text"
            name="image"
            id="image"
            defaultValue={bread.image}/>
          <label htmlFor="baker">Baker</label>
          <select name="baker" id="baker" defaultValue={bread.baker}>
            <option value="Rachel">Rachel</option>
            <option value="Monica">Monica</option>
            <option value="Joey">Joey</option>
            <option value="Chandler">Chandler</option>
            <option value="Ross">Ross</option>
           <option value="Phoebe">Phoebe</option>
          </select>

          <label htmlFor="hasGluten">Has Gluten?</label>
          <input
            type="checkbox"
            name="hasGluten"
            id="hasGluten"
            defaultChecked={bread.hasGluten}
          />
          <br />
          <input type="submit"/>
        </form>
        </Default>
    )
}

