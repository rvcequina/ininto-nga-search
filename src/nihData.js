
const index = client.initIndex('indexName');

function populatedata(){
    const nihData =[{
      "name":"Syphilitic saddle nose",
      "code":"A50.57"
    },
    {
      "name":"Sadomasochism, unspecified",
      "code":"F65.50"
    },
    {
      "name":"Sexual sadism",
      'code':"F65.52"
    }];

    index.saveObjects(nihData).then(({ objectIDs }) => {
      console.log(objectIDs);
    });
}





