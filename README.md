# ContentDisplayer

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 19.0.6.

# Timed Content Application

## Table of Contents
- [ContentDisplayer](#contentdisplayer)
- [Timed Content Application](#timed-content-application)
  - [Table of Contents](#table-of-contents)
  - [Introduction](#introduction)
  - [Prerequisites](#prerequisites)
  - [Setup](#setup)
  - [Running the Application](#running-the-application)
  - [Development server](#development-server)
  - [API Documentation](#api-documentation)

## Introduction

This is a web application that displays timed content items. The content is fetched from a local JSON database and automatically removes expired items.

## Prerequisites

- Node.js installed on your system
- npm (Node Package Manager) installed

## Setup

1. Clone the repository:
git clone https://github.com/Totiruzi/timed-content-removal-angular.git cd timed-content-removal-angular


2. Install dependencies:
npm install


## Running the Application

1. Start the JSON Server:
npx json-server --watch db.json

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.


3. Open your web browser and navigate to `http://localhost:4200` to view the application.

4. The API server runs on `http://localhost:3000`.

## API Documentation

The application uses a local JSON database served by `json-server`. The API endpoint is:

- GET `/contents`: Fetches all content items

The response format is an array of content objects:


