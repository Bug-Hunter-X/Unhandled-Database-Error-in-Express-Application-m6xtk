# Unhandled Database Error in Express Application

This repository demonstrates a common error in Express.js applications: unhandled database errors. The provided `bug.js` file contains code that directly sends the result of a database query as the response.  If the database query fails, the server crashes without proper error handling.

The solution (`bugSolution.js`) demonstrates how to correctly handle database errors using `try...catch` blocks and sending appropriate error responses to the client.