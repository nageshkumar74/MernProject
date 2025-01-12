# MernProject
# MERN Stack Project - Product Dashboard

## Overview
This project showcases a product dashboard with data visualization. It includes APIs for handling transactions, statistics, and charts.

## Features
- List of transactions with search and pagination.
- Statistics for sales, sold, and unsold items.
- Bar chart for price range distribution.
- Pie chart for category-wise distribution.
- Combined API for fetching all data.

## Tech Stack
- Backend: Node.js, Express, MongoDB
- Frontend: React, Vite, Chart.js, Tailwind CSS

## How to Run Locally
1. Clone the repository:
   ```bash
   git clone https://github.com/nageshkumar74/MernProject
   cd project-name

cd backend
npm install
npm run dev

cd frontend
npm install
npm run dev
## Open your Browser

http://localhost:5173

API Endpoints

    GET /items - retrieve all items
GET /items/q={search by description and title} - to search by description and title
GET /items?month="By month" - filter according to month
GET /items/piechart?month="Type month" - visualize items with the help of chart
GET /items/combine?month="Type Month" - combine all api and return in one api POST /API/items - create a new item

Technology Stack
react.js
Node.js
Express.js
MongoDB
chakra ui
tailwind css
