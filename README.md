# AI Model Builder - Front-End Assignment

## Overview
This project is a part of the evaluation process for the React.js Front-End Developer position at **Aventisia**. The objective was to implement the UI for an AI Model Builder application based on the provided design files (PDF). The goal was to replicate the design with certain functionality like sorting, pagination, and search for a table with dummy data. Additionally, a pop-up for creating a new model was implemented.

---

## Assignment Details

### Technologies Used:
- **Front-End**: React.js
- **Styling**: Tailwind CSS

### Functional Requirements:
- **Landing Page UI**: A static layout as per the Figma screenshot.
- **Table with Dummy Data**: The table displays at least 40 results, with pagination, sorting, and a search functionality for the model name.
- **Pop-up Modal**: A pop-up window that opens when the user clicks on "Create New Model." Upon saving the data in the modal, the data is logged to the browser console.

## Features Implemented

### UI Implementation:
- The landing page UI was implemented with a sidebar, navbar, and table as per the given design.
- The **Create New Model** button triggers a pop-up modal.
- The **Save** button in the modal logs the collected data in the browser console.

### Table with Functionalities:
- A table was added with dummy data for model names.
- **Pagination** was implemented using the `react-paginate` library.
- **Sorting** and **searching** functionalities were added to the table, allowing users to search by model name and sort the entries.

### Pop-up Modal:
- A pop-up modal opens when the user clicks on **"Create New Model."**
- The modal contains form fields for creating a new model.
- Clicking the **Save** button logs the entered data to the browser console.

---

## Commit Log Highlights

### UI Enhancements:
- Improved layout and added UI components like buttons, pop-ups, and table styles.

  - **Commit**: `a1da647` - UI enhancement for landing page and navbar

### Table Functionalities:
- Added pagination and sorting logic.

  - **Commit**: `daf426b` - `react-paginate` installed, added pagination logic using code splitting

### Pop-up Modal:
- Created the pop-up for adding a new model, integrated form fields, and logged the data on save.

  - **Commit**: `d8688f0` - Created new pop-up and imported into the model lib, logging the saved data into the console

### Sorting and Searching:
- Implemented functionality to sort the table data and search by model name.

  - **Commit**: `9168d82` - Added search method

### Dummy Data:
- Added 40 entries of dummy data to populate the table.

  - **Commit**: `d27dcd9` - lib table added with dummy data


### Technologies updated:
- **TypeScript**: For type safety and better development practices.
- **Tailwind CSS & UI**: For styling, including components from Tailwind UI.
- **ShadCN Components**: To accelerate component development.
- **State Management**: Zustand is used for state management due to its simplicity and performance.
- **Form Handling**: React Hook Form is used for handling form validations and errors.

---

## Features Implemented

### UI Implementation:
- Implemented a **sidebar** and **navbar** using **Tailwind UI** components.
- Designed a table with dummy data to display at data from initialdata.
- **Create New Model** button launches a modal pop-up for adding a new model.
- model consist **react Hook form**.
- Responsive layout with **mobile-first design**.

### Functionalities:
#### Table with Sorting, Pagination, and Search:
- **Sorting**: Users can sort table entries by specific columns.
- **Pagination**: Added pagination functionality using the `react-paginate` library for smooth navigation through large datasets.
- **Search**: Implemented a search bar to filter table rows by model name.

#### Pop-up Modal:
- Clicking the **Create New Model** button opens a modal pop-up.
- The modal contains form fields for creating a new model.
- On clicking **Save**, the entered data is logged to the browser console.
- Utilized **React Hook Form** for error handling and validations.

#### Fonts and Styling:
- Attached the **Aptos** font as per project requirements.
- Integrated **ShadCN components** for cohesive and consistent design.
- Styled using **Tailwind CSS** for both flexibility and rapid development.

#### State Management:
- Used **Zustand** for efficient and minimalistic state management.

---

## Demo
A live demo of the project can be seen here: [https://aventisia-assignment.onrender.com/]