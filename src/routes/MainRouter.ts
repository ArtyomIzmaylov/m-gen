import express from "express";
import container from "../inversify/InfersifyConfig";
import {Database} from "../database/Database";

const mainRouter = express.Router();
const databaseInstance = container.get<Database>(Database).getDb();
mainRouter.get('/', (req, res) => {
    res.send(`
    <html>
      <head>
        <title>Выберите категорию</title>
        <style>
          body {
            font-family: Arial, sans-serif;
            margin: 20px;
          }

          h1 {
            margin-bottom: 20px;
          }

          button {
            margin-right: 10px;
            margin-bottom: 10px;
            padding: 10px;
            font-size: 14px;
            cursor: pointer;
          }

          #result {
            white-space: pre-wrap;
            margin-top: 20px;
            padding: 10px;
            border: 1px solid #ccc;
            border-radius: 5px;
            background-color: #f8f8f8;
          }

          .json-key {
            color: #d9534f;
          }

          .json-string {
            color: #5bc0de;
          }

          .json-number {
            color: #5bc0de;
          }

          .json-boolean {
            color: #5bc0de;
          }

          .json-null {
            color: #5bc0de;
          }
        </style>
      </head>
      <body>
        <h1>Выберите категорию:</h1>
        <button onclick="getData('api/getClinics')">Получить клиники</button>
        <button onclick="getData('api/getMLaboratories')">Получить лаборатории</button>
        <button onclick="getData('api/getMedics')">Получить врачей</button>
        <button onclick="getData('api/getTests')">Получить тесты</button>
        <pre id="result"></pre>
        <script>
          import {rejects} from "assert"; 
async function getData(endpoint) {
            try {
              const response = await fetch(\`/\${endpoint}\`);
              const data = await response.json();
              await new Promise((resolve) => {
                    setTimeout(() => {
                    resolve()
                    }, 1000)
              })
              document.getElementById('result').innerHTML = formatData(data);
            } catch (error) {
              console.error('Error fetching data:', error);
              document.getElementById('result').innerHTML = 'Error fetching data. Check the console for details.';
            }
          }

          function formatData(data) {
            return syntaxHighlight(JSON.stringify(data, null, 2));
          }

          function syntaxHighlight(json) {
            json = json.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
            return json.replace(/("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+-]?\d+)?)/g, function (match) {
              var cls = 'json-number';
              if (/^"/.test(match)) {
                if (/:$/.test(match)) {
                  cls = 'json-key';
                } else {
                  cls = 'json-string';
                }
              } else if (/true|false/.test(match)) {
                cls = 'json-boolean';
              } else if (/null/.test(match)) {
                cls = 'json-null';
              }
              return '<span class="' + cls + '">' + match + '</span>';
            });
          }
        </script>
      </body>
    </html>
  `);
});

export default mainRouter;