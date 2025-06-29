import React from 'react'

function NewCart({blocks}) {
  return (
    <div>
      {
        blocks.map((item,index)=>
                <div key={index}>
                    <p>{item.title}</p>
                </div>
            )
    }
    </div>
  )
}

export default NewCart