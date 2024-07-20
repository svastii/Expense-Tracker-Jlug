## Notion Data Management API

This repository provides a Node.js API for interacting with Notion databases.

**Features:**

- **Insert data:** Add new entries to a specific Notion table row.
- **Retrieve data:** Fetch the contents of a specific Notion page.

**Requirements:**

- Node.js and npm (or yarn) installed on your system.
- A Notion account and a database you want to interact with.
- Notion API key (obtainable from your Notion settings).
- Block ID of the target Notion page (you can find this in the URL of the page).

**Installation:**

1. Clone this repository:

   ```bash
   git clone https://github.com/your-username/notion-data-management-api.git
   ```

2. Install dependencies:

   ```bash
   cd notion-data-management-api
   npm install
   ```

**Configuration:**

1. Create a `.env` file in the project root directory.
2. Add the following environment variables to the `.env` file, replacing the placeholders with your actual values:

   ```
   BLOCK_ID=your_notion_block_id
   NOTION_API_KEY=your_notion_api_key
   ```

**Usage:**

**1. Inserting data:**

- Make a POST request to the `/insert-data` endpoint with the following data in the request body:

  ```json
  {
    "item": "Your item name",
    "price": 123.45,
    "date": "2023-10-26" // Format: YYYY-MM-DD
  }
  ```

- The API will add a new row to the specified Notion table with the provided item name, price, and date.

**2. Retrieving data:**

- Make a GET request to the `/get-data` endpoint.
- The API will return the contents of the specified Notion page.

**Example:**

```bash
# Inserting data
curl -X POST http://localhost:3000/insert-data -H "Content-Type: application/json" -d '{"item": "New item", "price": 99.99, "date": "2024-03-07"}'

# Retrieving data
curl http://localhost:3000/get-data
```

**Note:**

- Remember to change your `.test-env ` to `.env` file secure and not commit it to version control.
