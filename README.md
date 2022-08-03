# Carbon Calculator Backend

A REST Api backend for Carbon Calculator project.

## Installation

Run the command "npm install" and create a ".env" file in the root path with contents from ".env.example".

## Structure

### Controllers

Implements routing and main interface controller for HTTP requests.

### Data

A mockup sets of data for compatibility with future databases.

### Models

An abstraction layer for ORM architectures.

### Services

Implements the main logic for data handling, storage and query for real databases, and helper utilities services.

## Technical Details

The approach was to build a calculator with the capacibility to handle any categories or subcategories (usages), making it scalable and easier to add more information, and with support for any unit measures input.

## Tech Stack

    - TypeScript
    - ExpressJS
    - decorators/express