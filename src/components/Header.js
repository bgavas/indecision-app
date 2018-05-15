import React from 'react';

// class Header extends React.Component {
//     render() {
//         return (
//             <div>
//                 <h1>{this.props.title}</h1>
//                 <h1>{this.props.subtitle}</h1>
//             </div>
//         );
//     }
// }

const Header = (props) => (
    <div className="header">
        <div className="container">
            <h1 className="hedaer__title">{props.title}</h1>
            {props.subtitle && <h2 className="hedaer__subtitle">{props.subtitle}</h2>}
        </div>
    </div>
);

Header.defaultProps = {
    title: 'Indecision'
};

export default Header;