import React from 'react'

function details({match,list}) {
    const found=list.find((el)=>el.id==match.params.id)
    return (
        <div>
            <h1>{found.name} </h1>
            <h2>{found.description} </h2>
           <span> <img src={found.image}/> </span>
        </div>
    )
}

export default details
