# Soko Mobile Shopping App

## Overview
Soko is a mobile shopping application designed to provide a seamless and intuitive shopping experience on mobile devices. The app allows users to browse products, manage their user profile, maintain a list of favorites, handle their shopping bag, and checkout seamlessly.

## Features
- **Home**: View promotions and featured products.
- **Product Catalog**: Browse products by categories.
- **Product Details**: View detailed information about products.
- **Favorites**: Save and manage favorite products.
- **Shopping Bag**: Add items to the shopping bag and manage them.
- **Checkout**: Complete purchases with address and payment options.
- **User Profile**: Manage user information and settings.
- **Authentication**: Secure user login and registration system.

## Architecture
This project follows the Clean Architecture principles, ensuring that the app is scalable, maintainable, and decoupled. The architecture is divided into three layers:
- **Data Layer**: Handles data transactions and API calls.
- **Domain Layer**: Contains business logic and use cases.
- **Presentation Layer**: Manages state and user interface.

We use the BLoC (Business Logic Component) pattern for state management to separate the business logic from the UI.

## Tech Stack
- **Flutter**: For building the mobile application.
- **Firebase**: For backend operations including data storage and authentication.
- **Bloc**: For managing the state within the app.

## Setup
To get started with the Soko app, follow these steps:

1. **Clone the repository:**

git clone https://github.com/yourusername/soko.git
cd soko/frontend


2. **Install dependencies:**

flutter pub get


3. **Run the app:**

flutter run


Make sure you have Flutter installed and properly set up on your development machine. For more information, see the [Flutter documentation](https://flutter.dev/docs).

## Contribution
Contributions are welcome! Please fork the repository and submit pull requests to the `develop` branch. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.

## Authors
- **Your Name** - *Initial work* - [YourUsername](https://github.com/yourusername)

---

Thank you for checking out our project. We hope you find the Soko app useful and intuitive!
