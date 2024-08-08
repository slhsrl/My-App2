import React from 'react';
import './Content.css';
import CreateContent from './CreateContent';

function Content({ data }) {

  console.log('ccont rendered')

  return (
    <div className='container1'>
      {
        data && data.map((cont)=>(
          <CreateContent key={cont.id} content={cont}/>
        ))
      }

      {/* {inputtext.length > 0 ? (
        inputtext.map(item => (
          <div className='content' key={item.id}>
            <img className='image' src={item.img} alt={item.h3} />
            <div className='container-h3-icon'>
              <div className='content-h3-icon'>
                <h3>{item.h3}</h3>
                <div className='icon'>
                  <img src={item.icon} alt={`${item.h3} icon`} />
                </div>
              </div>
            </div>
            <p>{item.p}</p>
          </div>
        ))
      ) : (
        <p>No items to display</p>
      )} */}
    </div>
  );
}

export default Content;
