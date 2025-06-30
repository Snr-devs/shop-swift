SHOPSWIFT APP


ShopSwift is a full-stack e-commerce web application built with Flask (Python) for the backend and React for the frontend. It allows users to register, log in, browse products, manage a shopping cart, and place orders.




FEATURES 

1) User login and authentication: Secure sign-up and login using JWT tokens.



2)product display:  Users can browse a collection of seeded products.



3)Buying items and placing an order:  Add items to a cart and simulate order placement.




4)Displaying account details:  Displays username, email, and phone number . 




SETUP 
install dependencies using the following command:

     npm install



To start the app use the following command:


     npm start





Demo Login Credentials



To access the app with a demo account:



Email: alice@gmail.com



Password: alicepass



Routing (React Router v6)
ShopSwift uses react-router-dom to manage page navigation:

| Route       | Page Component  | Description                      |
| ----------- | --------------- | -------------------------------- |
| `/`         | `LoginPage.jsx` | User login and registration form |
| `/mainpage` | `MainPage.jsx`  | Displays all products            |
| `/account`  | `Account.jsx`   | Shows user account info          |
| `/cart`     | `Cart.jsx`      | Shows items in the cart          |



Navigation is handled by the <Navbar /> component.



Key Libraries Used


| Library            | Purpose                                   |
| ------------------ | ----------------------------------------- |
| **React**          | UI building framework                     |
| **React Router**   | Client-side routing                       |
| **Axios**          | Making API requests to Flask backend      |
| **Formik + Yup**   | Form management and validation            |
| **LocalStorage**   | Store JWT tokens & user info persistently |
| **CSS / Tailwind** | Styling and layout                        |




