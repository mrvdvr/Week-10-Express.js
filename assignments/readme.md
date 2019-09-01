## Everything together!

### Create an Express server that has all routes described below.

1. `/calculator/num1/num2/operator` route(`GET`) that works with these operators: `+, -, *, /, %(percentage)` 
    - Example: `/calculator/20/10/%` returns `%10`
    
2. `/todo` route that makes possible to add new todo with `POST`, get all todos with `GET`, delete a todo with `DELETE` method.

3. `/future/hours` route(`GET`) that adds given hours to the current datetime and returns result.

4. `/login` route((`POST`) that checks if the given `username` and `password` is correct or not and will respond with **appropriate** status code. 
    - The correct credentials; username: `admin`, password:`password`.

5. `/report` route(`POST`) that gets the example data below and creates a json file based on that report in the `reports` folder. The json file will have the name of customer.

    - Example data: 
    ```
    {
      "customer": "X Company",
      "budget": "$200",
      "submitDate: "22-10-2019"
    }
    ```
    
    - Example file: `X Company.json`
