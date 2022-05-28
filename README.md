# VanHack-Qualified.io Assessment
# ATM Withdrawer

## Project Overview

ATM Withdrawer is an api service that returns the fewest combination of notes for a target amount based on available denominations of notes defined by the user


## Author
- AbdulAzeez Atanda

## Goal:

Set up the node/express server and RESTful API to achieve the project overview

## What Technologies Are Needed:

- NodeJS/Express
- Docker
- Git

## Getting Started
### Prerequisites for installation
- Docker

### Installation
    - For Dev Environment
    `docker-compose up`

    - For Prod Environment
    `docker-compose -f docker-compose-prod.yml up --build`


## Workable endpoints

 - Base Url: `https://localhost:3000`
 - Withdraw an amount: `/withdrawal`
 


## Requirements details / Instructions
```
Task
Your task is to create a ATM Service API in NodeJS. It is going to simulate a basic money withdrawal system but a little bit differently, because in this scenario the user decides which notes are available.

Your system must accept two parameters in the request.
1) An amount attribute, which represents the withdrawal amount. This attribute is a positive integer.
2) A validNotes attribute, which represents the notes available for that specific call. It must only contain integer values and must be organized in descending order.

In a positive scenario, your API will respond with HTTP Code 200, and a response body containing the notes attribute. Which is an array, composed of each note being delivered to the user.

Your goal is to respond to the user with the correct value and the least notes possible, always giving priority to the higher notes.

Example 1
Request
image.png

Response (HTTP Code 200)
image.png

Example 2
Request
image.png

Response (HTTP Code 200)
image.png

In case your program can't find a proper solution, given the validNotes, you must return a response with code HTTP 400 and this text in the response body Unavailable notes for that amount.

An example of a request that has no possible solution would be:

{
  amount: 45
  validNotes: [100, 50, 20, 10]
}
API Validation
In any of the scenarios below, your API must respond with code HTTP 400. For each one of them, use the related Response Message in the response body.

Scenario	Response message
amount attribute is not informed or is zero	"amount attribute is mandatory"
validNotes attribute is not informed or is empty	"validNotes attribute is mandatory"
amount attribute is not an integer or is lower than zero	"amount attribute must be an integer greater than zero"
validNotes numbers are not integers or are lower than zero	"validNotes can only contain integers greater than zero"
validNotes is not organized in descending order	"notes inside validNotes must be organized in descending order"
Code organization and best practices
Your code may be evaluated manually in the future. Make sure you keep your code clean and understandable as if it were a real-life program. Project your code thinking about a production environment.

```


