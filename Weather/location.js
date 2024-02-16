        //Location.js
        function storeCityName() {
            var cityName = document.getElementById('city').value;
            
            // Your server endpoint URL to handle the Excel file creation
            var endpointUrl = 'https://your-server-endpoint-url.com/createExcelFile';

            // Send the city name data to the server endpoint
            fetch(endpointUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ cityName: cityName }),
            })
            .then(response => {
                if (response.ok) {
                    console.log('City name sent to server for Excel file creation');
                } else {
                    console.error('Failed to send city name to the server');
                }
            })
            .catch(error => {
                console.error('Error occurred while sending city name to server:', error);
            });
        }