import React from 'react';
import './CreateContent.css';

function CreateContent({ content }) {
  console.log('createcon rendered')
  return (
   
          <div className='content' key={content.id}>
            <img className='image' src={content.img} alt={content.h3} />
            <div className='container-h3-icon'>
              <div className='content-h3-icon'>
                <h3>{content.h3}</h3>
                <div className='icon'>
                  <img src={content.icon} alt={`${content.h3} icon`} />
                </div>
              </div>
            </div>
            <p>{content.p}</p>
          </div>
        
  );
}

export default CreateContent;