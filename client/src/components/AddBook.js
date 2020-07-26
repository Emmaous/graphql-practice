import React, {useState} from 'react';
import { useQuery, useMutation } from '@apollo/react-hooks';
import { getAuthorsQuery, addBookMutation, getBooksQuery } from '../queries/queries';

function AddBook() {
  const { loading, error, data } = useQuery(getAuthorsQuery);
  const [addNewBook, { dataMutation }] = useMutation(addBookMutation);
  const [newBook, setNewBook] = useState({ name: "", genre: "", authorId: "" });

  const displayAuthors = () => {

    if (loading) return <option disabled>Loading...</option>;
    if (error) return <option disabled>Error :(</option>;

      return data.authors.map( ({ id, name }) => <option key={id} value={id}>{name}</option>);
  }

  const handleSubmit = e => {
    e.preventDefault();
    addNewBook({
      variables: {
        ...newBook
      },
      refetchQueries: [{ query: getBooksQuery }]
    });
}

  return (
    <form id='add-book' onSubmit={handleSubmit}>

      <div className='field'>
        <label>Book name:</label>
        <input value={newBook.name} onChange={e => setNewBook({ ...newBook, name: e.target.value })} type="text" />
      </div>

      <div className='field'>
        <label>Genre:</label>
        <input value={newBook.genre} onChange={e => setNewBook({ ...newBook, genre: e.target.value })} type="text" />
      </div>

      <div className='field'>
        <label>Book name:</label>
        <select value={newBook.authorId} onChange={e => setNewBook({ ...newBook, authorId: e.target.value })} >
          <option>Select author</option>
          {displayAuthors()}
        </select>
      </div>

      <button>+</button>


    </form>
  );
}

export default AddBook;