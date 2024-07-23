function fetchRouteData() {
    const org = document.getElementById("origin").value;
    const des = document.getElementById("dest").value;
    console.log(org + " " + des);

    const origin = encodeURIComponent(org);
    const destination = encodeURIComponent(des);
    const url = `http://localhost:8080/api/routes/ddr?origin=${origin}&destination=${destination}`;
    axios.get(url)
        .then(response => {
            const data = response.data[0];
            const existingElement = document.getElementById("routeInfo");
            if (existingElement) {
                existingElement.remove();
            }

            const newElement = document.createElement('div');
            newElement.id = "routeInfo";
            newElement.innerHTML = `
                <p>Route No: ${data.routeNo}</p>
                <p>Distance: ${data.distance}</p>
                <p>Duration: ${data.duration}</p>
            `;
            const parentElement = document.querySelector('#info');
            parentElement.appendChild(newElement);

        })
        .catch(error => {
            console.error('Error fetching route data:', error);
        });
}

function fetchRoutes(){
    const org = document.getElementById("origin").value;
    const des = document.getElementById("dest").value;
    console.log(org + " " + des);

    const origin = encodeURIComponent(org);
    const destination = encodeURIComponent(des);

    const url = `http://localhost:8080/api/routes/bus_stops?origin=${origin}&destination=${destination}`;
    axios.get(url)
        .then(response => {
            const data = response.data[0];
            const existingElement = document.getElementById("routeStops");
            if (existingElement) {
                existingElement.remove();
            }

            const newElement = document.createElement('div');
            newElement.id = "routeStops"; 
            const jsonData = JSON.parse(data.busStops);
            newElement.innerHTML = `<div id = "routeB">Route</div>`;
            for(let i=0; i<jsonData.length; i++){
                const busStop = jsonData[i];
                const busStopDiv = document.createElement('div');
                busStopDiv.id = "busStop";
                busStopDiv.innerHTML = `
                    <div>Bus Stop: ${busStop.busstop}</div>
                    <div>Latitude: ${busStop.latlons[0]}</div>
                    <div>Longitude: ${busStop.latlons[1]}</div>`;
                newElement.appendChild(busStopDiv);
            }

            const parentElement = document.querySelector('#stops');
            parentElement.appendChild(newElement);
        }
        )
        .catch(error => {
            console.error('Error fetching route data:', error);
    })};
    

function fetchBusTimings1(){
    const org = document.getElementById("origin").value;
    const des = document.getElementById("dest").value;
    console.log(org + " " + des);

    const origin = encodeURIComponent(org);
    const destination = encodeURIComponent(des);

    const url = `http://localhost:8080/api/routes/orgtdest?origin=${origin}&destination=${destination}`;
    axios.get(url)
        .then(response => {
            const data = response.data[0];
            const existingElement = document.getElementById("busTimings1");
            if (existingElement) {
                existingElement.remove();
            }


            const newElement = document.createElement('div');
            newElement.id = "busTimings1";

            departureTimes = data.departureTimes.slice(1, -1).split(',');
            arrivalTimes = data.arrivalTimes.slice(1, -1).split(',');

            departureTimes = departureTimes.map(time => time.trim().replace(/"/g, ''));
            arrivalTimes = arrivalTimes.map(time => time.trim().replace(/"/g, ''));

            let n = departureTimes.length;
            newElement.innerHTML = `<div>Bus Timings From Origin To Destination</div>`;
            for(let i=0; i<n; i++){
                if(departureTimes[i] !== undefined && arrivalTimes[i] !== undefined){
                    const busTimingDiv = document.createElement('div');
                    busTimingDiv.innerHTML = `
                        <div id ="list2">${departureTimes[i]} - ${arrivalTimes[i]}</div>`
                    newElement.appendChild(busTimingDiv);
                }
            }
            const parentElement = document.querySelector('#timings1');
            parentElement.appendChild(newElement);

        })
        .catch(error => {
            console.error('Error fetching route data:', error);
        });
}

function fetchBusTimings2(){
    const org = document.getElementById("origin").value;
    const des = document.getElementById("dest").value;
    console.log(org + " " + des);

    const origin = encodeURIComponent(org);
    const destination = encodeURIComponent(des);

    const url = `http://localhost:8080/api/routes/desttorg?origin=${origin}&destination=${destination}`;
    axios.get(url)
        .then(response => {
            const data = response.data[0];
            const existingElement = document.getElementById("busTimings2");
            if (existingElement) {
                existingElement.remove();
            }

            const newElement = document.createElement('div');
            newElement.id = "busTimings2";

            const dfd1 = data.departure_from_destination.slice(1, -1).split(',');
            const aao1 = data.arrival_at_origin.slice(1, -1).split(',');

            console.log(dfd1);
            console.log(aao1);
            const dfd = dfd1.map(time => time.trim().replace(/"/g, ''));
            const aao = aao1.map(time => time.trim().replace(/"/g, ''));

            console.log(dfd);
            console.log(aao);

            let n = dfd.length;
            newElement.innerHTML = `<div>Bus Timings From Destination To Origin</div>`;
            for(let i=0; i<n; i++){
                if(dfd[i] !== undefined && aao[i] !== undefined){
                    const busTimingDiv = document.createElement('div');
                    busTimingDiv.innerHTML = `
                        <div id = "list2">${dfd[i]} - ${aao[i]}</div>`
                    newElement.appendChild(busTimingDiv);
                }
            }
            const parentElement = document.querySelector('#timings2');
            parentElement.appendChild(newElement);
        })
        .catch(error => {
            console.error('Error fetching route data:', error);
        });
}


function Restaurants(){
    const org = document.getElementById("loc").value;
    console.log(org);

    const url = `http://localhost:8080/api/routes/restaurants?Location=${org}`;
    axios.get(url)
        .then(response => {
            const data = response.data;
            console.log(data);
            const existingElement = document.getElementById("hotels");
            if (existingElement) {
                existingElement.remove();
            }
            const newElement = document.createElement('div');
            newElement.id = "rest1"; 

            
            for(let i=0;i<data.length;i++)
            {
                if(data[i]!==null && data[i].rating!==null)
                {
                    const restDiv = document.createElement('div');
                    restDiv.innerHTML = `
                    <p>Name : ${data[i].name}</p>
                    <p>Address : ${data[i].address}</p>
                    <p>Loaction : ${data[i].location}</p>
                    <p>Contact Info : ${data[i].phone}</p>
                    <p>Rating : ${data[i].rating}</p>
                    <p>Url : ${data[i].url}</p>`
                    newElement.appendChild(restDiv);
                }
            }
            const parentElement = document.querySelector('#Restuar');
            parentElement.appendChild(newElement);
        })
        .catch(error => {
            console.error('Error fetching route data:', error);
        });
}


const ddr = document.getElementById("ddr");
ddr.addEventListener("click", fetchRouteData);

const routes = document.getElementById("route");
routes.addEventListener("click", fetchRoutes);

const busTimings1 = document.getElementById("busT1");
busTimings1.addEventListener("click", fetchBusTimings1);

const busTimings2 = document.getElementById("busT2");
busTimings2.addEventListener("click", fetchBusTimings2);

const Rest = document.getElementById("rest");
Rest.addEventListener("click", Restaurants);



