import React, {useState} from 'react';
import { useQuery } from '@apollo/react-hooks'
import { getBooksQuery } from '../queries/queries'
import BookDetails from './BookDetails';

function BookList() {
  const { loading, error, data } = useQuery(getBooksQuery);
  const [ clicked, setClicked] = useState(null);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  const { books } = data;

  const bookListItems = books.map( ({ id, name }) => {
     return <li key={id} onClick={ (e) => setClicked(id)}>{name}</li>;
  });

  return (
    <div>
        <ul id="book-list">{bookListItems}</ul>
        <BookDetails bookId={clicked}/>
    </div>
  );
}

export default BookList;
