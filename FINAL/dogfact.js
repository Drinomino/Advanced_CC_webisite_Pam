 document.getElementById('fetchFactBtn').addEventListener('click', () => {
      fetch('https://dogapi.dog/api/v2/facts?limit=200')
        .then(response => {
          if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
          }
          return response.json();
        })
        .then(data => {
          const fact = data.data[0].attributes.body;
          document.getElementById('fact').innerText = fact;
        })
        .catch(error => {
          console.error('Error fetching the data:', error);
        });
    });
