import { ArrowDropDown, ArrowDropUp } from '@mui/icons-material'
import { useState } from 'react'

const Table = (props: {query: String}) => {
  const querySelect = props.query
  const [posts, setPosts] = useState([{
    userId: 0,
    id: 0,
    title: '',
    body: ''
  }])



  return (
    <div className="table">
      <div className="tableHeader">
        <div className="tableCellHeader">
          <div className="text">ID</div>
          <div className="sortButton"> <ArrowDropDown /> <ArrowDropUp /> </div>
        </div>
        <div className="tableCellHeader">
          <div className="text">Заголовок</div>
          <div className="sortButton"> <ArrowDropDown /> <ArrowDropUp /> </div>
        </div>
        <div className="tableCellHeader">
          <div className="text">Описание</div>
          <div className="sortButton"> <ArrowDropDown /> <ArrowDropUp /> </div>
        </div>
      </div>
      <div className="tableBody">
        {posts.map((post) => (
          <div className="tableRow" key={post.id}>
            <div className="tableCell">{post.id}</div>
            <div className="tableCell">{post.title}</div>
            <div className="tableCell">{post.body}</div>
          </div>
        ))}
      </div>
      {/* <pre>{querySelect}</pre> */}
    </div>
  )
}

export default Table
