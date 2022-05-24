import React from 'react';

const Blog = () => {
    return (
        <div className= 'container card-container p-5'>
            <div className='my-3'>
                <h5>difference between javascript and node js</h5>
                <p>javascript basically is a proggrammig language which was mainly 
                    created to make a website dynamic. node-js is a  runtime enviroment which gives us the ability to run javascript code outside the 
                    browser.
                </p>

            </div>
            <div className='my-3'>
            <h5>when should i use nodejs and when should i use mongoDB</h5>
                <p>
                    if we want to build a website which has to interact with the database to 
                    fetch data or show user data into the UI then node js is one of the best 
                    choice . we can use nodejs as a server to interect with the database.

                    now the qustion is which database system should we use . as we know mongodb is  a nosql database . which means if my data is document centric then mongoDB is the best choice . besides, to build a 
                    schalable application mongodb is better option than mysql. 
                </p>
            

            </div>
            <div>
            <h5>sql vs nosql</h5>
                <p>
                    sql means structred query language-ex:mysql and nosql-ex:mongodb is not structred query language which deals with document centric data.
                    sql is better for  multi-row transactions and nosql is effective for 
                    unnstructured data like documents or JSON
                </p>
            

            </div>
        </div>
    );
};

export default Blog;