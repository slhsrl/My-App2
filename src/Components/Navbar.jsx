// import React, { Component ,memo} from 'react'
// import './Navbar.css';


// export default class Navbar extends Component {
//     iconclick = (e) => {
//         alert( 'clicked')
        
//     }

//     state={     
//         icons:[
//             { id:'1',type:"image",src:'../img/ic_Notification.svg'},
//             { id:'2',type:"image",src:'../img/Logout.svg'},
//             { id:'3',type:"image",src:'../img/User.svg'}
//         ]
//     }
//     render() {
//         console.log('navbar')
//         return (
//             <div className='navbar'>
//                 {this.state.icons.map(icon=>(
//                     <input key={icon.id}
//                     type="image"
//                     alt='icon'
//                     src={icon.src}
//                     onClick={this.iconclick}
//                 />
//                 )

//                 )}
                
//             </div>
//         )
//     }
// }

import React, { useState, memo } from 'react';
import './Navbar.css';

// Fonksiyonel bileşen
const Navbar = memo(() => {
    // State tanımlaması
    const [icons] = useState([
        { id: '1', type: "image", src: '../img/ic_Notification.svg' },
        { id: '2', type: "image", src: '../img/Logout.svg' },
        { id: '3', type: "image", src: '../img/User.svg' }
    ]);

    // Tıklama işlevi
    const iconclick = () => {
       alert('icon')
        
    }

    console.log('navbar');

    return (
        <div className='navbar'>
            {icons.map(icon => (
                <input
                    key={icon.id}
                    type="image"
                    alt='icon'
                    src={icon.src}
                    onClick={iconclick}
                />
            ))}
        </div>
    );
});

export default Navbar;

