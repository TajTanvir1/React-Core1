import Actor from './Actor'
import './App.css'
import BookStore from './Bookstore'
import Book from './Book'

function App() {
  const books = [
    {id: 1, name: 'Physics', price: 100},
    {id: 1, name: 'Chemistry', price: 100},
    {id: 1, name: 'English', price: 100},
    {id: 1, name: 'Math', price: 100},
    {id: 1, name: 'Math 2', price: 100},
  ]

  const actors =['Sakib', 'Riaz', 'Raj', 'Salmal']

  return (
    <>      
      <h1>Vite + React</h1>
      {/* <Actor name={'Bapppa Raz'}></Actor>
      {
        actors.map(actor => <Actor name={actor}></Actor>)
      } */}
      <BookStore books={books}></BookStore>

    </>
  )
}

export default App
