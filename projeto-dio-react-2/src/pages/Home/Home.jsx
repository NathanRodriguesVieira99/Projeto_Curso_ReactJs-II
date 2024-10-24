import { Link } from 'react-router-dom'

function Home() {
  return (
    <>
      <h1>Home</h1>
      <Link to='/login'><button>Fazer Login</button></Link>
    </>
  )
}

export default Home