import { mockStore } from './store-mock'

export const responseMock = {
  "code": 200,
  "status": "Ok",
  "copyright": "© 2020 MARVEL",
  "attributionText": "Data provided by Marvel. © 2020 MARVEL",
  "attributionHTML": "<a href=\"http://marvel.com\">Data provided by Marvel. © 2020 MARVEL</a>",
  "etag": "27b27e6e9f4956b4e34bedd0fad1f6bbbafb2599",
  "data": {
    "data": {
      "offset": 0,
      "limit": 20,
      "total": 10,
      "count": 20,
      "results": mockStore.characters
    },
  }
};