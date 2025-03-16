# TechFest Judging Platform

A web application for managing tech fest competitions with separate interfaces for participants and judges.

## Features

- **Authentication System**: Separate login for participants and judges
- **Participant Dashboard**: Submit project details including title, description, GitHub URL, and demo URL
- **Judge Dashboard**: View all projects and score them based on innovation, execution, and presentation
- **Scoring System**: Automatic calculation of average scores and total score
- **Role-based Access Control**: Different views and permissions for participants and judges

## Tech Stack

- **Frontend**: React.js, Next.js, Tailwind CSS
- **Backend**: Next.js API Routes
- **Database**: SQLite with Prisma ORM
- **Authentication**: JWT (JSON Web Tokens)

## Getting Started

### Prerequisites

- Node.js (v14 or later)
- npm or yarn

### Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   cd techfest-judging-platform
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Set up the database:
   ```
   npm run prisma:generate
   npm run prisma:push
   ```

4. Start the development server:
   ```
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Usage

### For Participants

1. Register as a participant
2. Log in with your credentials
3. Submit your project details (title, description, GitHub URL, demo URL)
4. View your project scores as judges evaluate your project

### For Judges

1. Register as a judge
2. Log in with your credentials
3. View all submitted projects
4. Score projects based on innovation, execution, and presentation

## Environment Variables

Create a `.env` file in the root directory with the following variables:

```
JWT_SECRET=your-secret-key
```

## License

This project is licensed under the MIT License. 