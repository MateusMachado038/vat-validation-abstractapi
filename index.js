

const apiKey = '5d0a15ef5e1e46fab7b6414f47b5ff25';
const vatNumber = 'SE556656688001';
const url = `https://vat.abstractapi.com/v1/validate?api_key=${apiKey}&vat_number=${vatNumber}`;

const options = {
  method: 'GET', 
  headers: {
    'Content-Type': 'application/json',
  },
};

fetch(url, options)
  .then(response => {
    if (!response.ok) {
      throw new Error('Erro na solicitação: ' + response.status);
    }
    return response.json();
  })
  .then(data => {
    console.log(data);
    alert(data.company.name  + "\n \n" + "Validade: " + data.valid)
  })
  .catch(error => {
    console.error('Erro na solicitação:', error);
  });


