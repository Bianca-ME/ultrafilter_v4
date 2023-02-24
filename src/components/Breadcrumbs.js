import React from "react";
import { useLocation, Link } from "react-router-dom";
import '../assets/Breadcrumbs.css';

export default function Breadcrumbs() {
  const location = useLocation()

  let currentLink = ''

  const crumbs = location.pathname.split('/')
    .filter(crumb => crumb !== '')
    .map(crumb => {
      currentLink += `/${crumb}`

      return (
        <div className="crumb" key={crumb}>
          <Link to={currentLink}>{crumb}</Link>
        </div>
      )
    })

  return (
    <div className="breadcrumbs">
      {crumbs}
    </div>
  )
}

// export default function Breadcrumbs() {
//     const location = useLocation();
//     const pathnames = location.pathname.split('/').filter((x) => x);
    
//     const crumbs = pathnames.map((name, index) => {
//         const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`;
//         const isLast = index === pathnames.length - 1;
//         return (
//           <span key={name}>
//             <Link to={routeTo}>{name}</Link>
//             {!isLast && ' > '}
//             <div className="breadcrumbs">{crumbs}</div>;
//           </span>
//         );
//       });
//   }