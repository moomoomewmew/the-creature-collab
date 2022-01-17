// import { redirect } from 'express/lib/response'
// import React from 'react'
// import { Navigate, Route } from 'react-router-dom'


// export default function ProtectedRoute({
//     user,
//     authenticated,
//     element: Element,
//     ...rest
//   }) {
//   return (
//     <Route
//       {...rest}
//       render={(props) =>
//         user && authenticated ? (
//           <Element {...props} /> // Render our chosen component if a user exists and they are authenticated
//         ) : (
//           <Navigate to="/login" /> // Otherwise, use the Redirect component to return the user to the sign in screen
//         )
//       }
//     />
//   )
//     }