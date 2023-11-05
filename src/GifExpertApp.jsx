
// const apiKey = '';
//         const resp   = await fetch(`http://api.giphy.com/v1/gifs/random?api_key=${ apiKey }`);
//         const { data } = await resp.json(); 

import { useState } from 'react'
import { AddCategory, GifGrids } from './components'
import './styles.css'

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['Dragon Ball'])

    const onAddCategory = (newCategory) => {

        if (categories.includes(newCategory)) {
            return
        }
        setCategories(cat => [...cat, newCategory])
        // setCategories([...c, 'One Piece'])
    }
    return (
        <>
            <h1>GifExpertApp</h1>
            <AddCategory
                // setCategories={setCategories}
                onNewCategory={onAddCategory}
            />
            {
                categories.map(category =>
                (
                    <GifGrids key={category} category={category} />
                )
                )
            }
        </>
    )
}
