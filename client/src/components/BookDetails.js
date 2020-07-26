import React from 'react';
import { useQuery } from '@apollo/react-hooks'
import { getBookQuery } from '../queries/queries'

function BookDetails(props) {
    const { loading, error, data } = useQuery(getBookQuery, {
        skip: !props.bookId,
        variables: { id: props.bookId }
    });

    console.log(props);
    console.log(data);

    const displayBookDetails = () => {

        if (loading) return <p>Loading...</p>;
        if (error) return <p>Error :(</p>;
        if (!props.bookId) return <p>Select Book...</p>

        const { book } = data;
            
          return <div>
              <h2>{book.name}</h2>
              <p>{book.genre}</p>
              <p>{book.author.name} </p>
              <p>All Books by Author:</p>
              <ul className="other-books">
                  {
                  book.author.books.map( ({ id, name }) => {
                      return <li key={id}>{name}</li>;
                      })}
              </ul>
          </div>;
      }
  
    return (
      <div id="book-details">
         {displayBookDetails()} 
      </div>
    );
  }
  
  export default BookDetails;
  