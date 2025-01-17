import React from 'react'

import Thought from './Thought'

const ShowThoughtList = ({ thoughtList }) => {
  return (
    <section className="thoughtList">
      {thoughtList &&
        thoughtList.map(singleThought => (
          <Thought key={singleThought._id} _id={singleThought._id} message={singleThought.message} hearts={singleThought.hearts} createdAt={singleThought.createdAt} />
        ))

      }
    </section>
  )
}

export default ShowThoughtList;