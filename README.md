##  Project Overview
Created a full-fledged shoe selling site with Angular, Express, Node.js, and MongoDB involves several steps. Below, I'll provide an outline of how you can implement each feature you mentioned:

### Backend (Node.js, Express, MongoDB):

1. **Setup Express Server:**
   - Initialize a new Express project.
   - Set up routes for handling authentication, shoe listing, orders, and payments.

2. **User Authentication (Login/Register):**
   - Implement routes for user registration and login using bcrypt for password hashing.
   - Use JSON Web Tokens (JWT) for authentication.
   - Store user information in MongoDB.

3. **Shoe Listing with Tags:**
   - Create a MongoDB schema for shoes with fields like name, description, image URL, price, tags, etc.
   - Implement CRUD operations for managing shoes.
   - Allow users to add tags while adding new shoes.

4. **Filtering Shoes:**
   - Implement filtering based on shoe attributes such as price, brand, size, color, etc.
   - Use Angular to make AJAX requests to the backend to fetch filtered shoe data.

5. **Order Page:**
   - Implement functionality to allow users to add shoes to their cart.
   - Create routes to handle order creation, retrieval, and updating.

6. **Checkout Page:**
   - Develop a checkout page where users can review their orders.
   - Implement features like updating quantities, removing items, and adding delivery details.

7. **Payments:**
   - Integrate a payment gateway such as Stripe or PayPal for handling payments.
   - Implement secure payment processing on the server-side.
   - Confirm successful payment before completing the order.

8. **Maps Integration:**
   - Utilize services like Google Maps API to enable users to locate their address during checkout.
   - Save user addresses in the database for future reference.

### Frontend (Angular):

1. **User Interface:**
   - Design and develop user-friendly interfaces for login, registration, shoe listing, order management, and checkout using Angular components.

2. **Authentication:**
   - Implement forms for user login and registration.
   - Manage user sessions using JWT tokens.

3. **Shoe Listing and Filtering:**
   - Display a list of shoes with relevant details fetched from the backend.
   - Implement filtering options to refine search results based on user preferences.

4. **Order Management:**
   - Provide a user-friendly interface for managing orders.
   - Allow users to view their cart, update quantities, and remove items.

5. **Checkout Process:**
   - Guide users through the checkout process with a step-by-step interface.
   - Display a summary of the order before finalizing the purchase.

6. **Payments:**
   - Integrate payment gateway APIs into the checkout process.
   - Handle responses from the payment gateway to confirm successful transactions.

7. **Maps Integration:**
   - Implement a map component to display and select the user's address during checkout.
   - Utilize Angular services to interact with the Google Maps API for geolocation.

### Additional Features:

1. **Responsive Design:**
   - Ensure the site is fully responsive and works seamlessly across different devices and screen sizes.

2. **Error Handling and Validation:**
   - Implement robust error handling and validation mechanisms both on the frontend and backend to enhance user experience and security.

3. **Security:**
   - Implement security best practices such as input validation, CSRF protection, and HTTPS to secure the application.

4. **Session Management:**
   - Manage user sessions securely, ensuring proper session handling and expiration.
     
5. **Performance Optimization:**
   - Optimize frontend and backend code for performance to ensure fast loading times and smooth user experience.

6. **Testing:**
   - Write unit tests and integration tests to ensure the reliability and stability of the application.

8. **Documentation:**
   - Provide comprehensive documentation for developers and users to understand and use the application effectively.

By following this outline, created a robust shoe selling site showcasing your skills in the MEAN stack. Remember to continuously test and iterate on your application to ensure it meets the desired requirements and user expectations.

**Login page**
![logo](https://github.com/atharvburade/shoe-selling-site/blob/main/login%20page.PNG)

**Register page**
![logo](https://github.com/atharvburade/shoe-selling-site/blob/main/regiser%20page.PNG)

**Shoe listing ,filter page**
![logo](https://github.com/atharvburade/shoe-selling-site/blob/main/shoe%20listing%20page.PNG)

**Shoe preview page**
![logo](https://github.com/atharvburade/shoe-selling-site/blob/main/shoe%20page.PNG)

**Checkout page**
![logo](https://github.com/atharvburade/shoe-selling-site/blob/main/checkout%20page.PNG)

**Payment page**
![logo](https://github.com/atharvburade/shoe-selling-site/blob/main/payment%20option.PNG)

**Mongodb database page**
![logo](https://github.com/atharvburade/shoe-selling-site/blob/main/mongodb.PNG)

Note - Updating Packages (Optional)
    1.  Install npm-check-upates as a global package
    2.  Run ncu -u in the frontend folder
    3.  Downgrade typescript to version ~4.8.2
    4.  Run npm install --force
    5.  Run npm start
    6.  Run ncu -u in the backend folder
    7.  Run npm install
    8.  Run npm start
