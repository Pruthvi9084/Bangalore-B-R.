function createCardRoute(routeData) {

    const existingCard = document.getElementById("routeCard");
    if (existingCard) {
        existingCard.remove();
    }


    const card = document.createElement("div");
    card.id = "routeCard";
    card.className = "card bg-white rounded-lg shadow-lg overflow-hidden m-4";

    const content = `
        <div class="p-4">
            <h2 class="text-xl font-semibold mb-2">Route Information</h2>
            <p><strong>Route Number:</strong> ${routeData.routeNo}</p>
            <p><strong>Distance:</strong> ${routeData.distance}</p>
            <p><strong>Origin Location:</strong> ${routeData.originLocation}</p>
            <p><strong>Destination Location:</strong> ${routeData.destinationLocation}</p>
            <p><strong>Duration:</strong> ${routeData.duration}</p>
        </div>
    `;
    card.innerHTML = content;

    const parent = document.getElementById("route");
    parent.appendChild(card);
}


function createBusTimingsCard(departureTimes, arrivalTimes,origin,destination) {
    const busTimingsCard = document.createElement('div');
    busTimingsCard.id = "bus-timings-1";
    busTimingsCard.className = "bus-timings-card";
    busTimingsCard.innerHTML = `<div class="bus-timings-title">Bus Timings From ${origin} To ${destination}</div>`;
    
    const timingsGrid = document.createElement('div');
    timingsGrid.className = "timings-grid";

    const maxTimings = 20; 
    let timingsToShow = Math.min(maxTimings, departureTimes.length);

    for (let i = 0; i < timingsToShow; i++) {
        if (departureTimes[i] !== undefined && arrivalTimes[i] !== undefined) {
            const busTimingDiv = document.createElement('div');
            busTimingDiv.className = "bus-timing";
            busTimingDiv.innerHTML = `
                <div>${departureTimes[i]} - ${arrivalTimes[i]}</div>`;
            timingsGrid.appendChild(busTimingDiv);
        }
    }

    busTimingsCard.appendChild(timingsGrid);

    
    const showMoreButton = document.createElement('button');
    showMoreButton.className = "show-more-button";
    showMoreButton.textContent = "Show More Timings";
    showMoreButton.addEventListener('click', function() {
       
        timingsToShow = departureTimes.length;
        for (let i = maxTimings; i < timingsToShow; i++) {
            if (departureTimes[i] !== undefined && arrivalTimes[i] !== undefined) {
                const busTimingDiv = document.createElement('div');
                busTimingDiv.className = "bus-timing";
                busTimingDiv.innerHTML = `
                    <div>${departureTimes[i]} - ${arrivalTimes[i]}</div>`;
                timingsGrid.appendChild(busTimingDiv);
            }
        }
        showMoreButton.style.display = 'none';

        showLessButton.style.display = 'block';
    });
    busTimingsCard.appendChild(showMoreButton);

    const showLessButton = document.createElement('button');
    showLessButton.className = "show-less-button";
    showLessButton.textContent = "Show Less Timings";
    showLessButton.style.display = 'none';
    showLessButton.addEventListener('click', function() {
        const childNodes = timingsGrid.childNodes;
        for (let i = 0; i < 12; i++) {
            timingsGrid.removeChild(childNodes[childNodes.length - 1]);
        }
        if (departureTimes.length - childNodes.length > 20) {
            showMoreButton.style.display = 'block';
        }
        
        if (childNodes.length <= 20) {
            showLessButton.style.display = 'none';
        }
    });
    busTimingsCard.appendChild(showLessButton);

    if (departureTimes.length <= maxTimings) {
        showMoreButton.style.display = 'none';
    } else {
        showLessButton.style.display = 'none';
    }

    return busTimingsCard;
}



function fetchRouteData() {
    const org = document.getElementById("boardingPoint").value;
    const des = document.getElementById("destination").value;

    const origin = encodeURIComponent(org);
    const destination = encodeURIComponent(des);
    const url = `http://localhost:8080/api/routes/ddr?origin=${origin}&destination=${destination}`;
    axios.get(url)
        .then(response => {
            const data = response.data;
            if (data.length > 0) {
                createCardRoute(data[0]);
            } else {
                console.log("No route data found.");
            }
        })
        .catch(error => {
            console.error('Error fetching route data:', error);
        });
}

function fetchBusTimings1() {
    const org = document.getElementById("boardingPoint").value;
    const des = document.getElementById("destination").value;
    console.log(org + " " + des);

    const origin = encodeURIComponent(org);
    const destination = encodeURIComponent(des);

    const url = `http://localhost:8080/api/routes/orgtdest?origin=${origin}&destination=${destination}`;
    axios.get(url)
        .then(response => {
            const data = response.data[0];
            const departureTimes = data.departureTimes.slice(1, -1).split(',').map(time => time.trim().replace(/"/g, ''));
            const arrivalTimes = data.arrivalTimes.slice(1, -1).split(',').map(time => time.trim().replace(/"/g, ''));

            console.log(data);
            const existingElement = document.getElementById("bus-timings-1");
            if (existingElement) {
                existingElement.remove();
            }

            const newElement = createBusTimingsCard(departureTimes, arrivalTimes,org,des);
            const parent = document.getElementById("Bt-1");
            parent.appendChild(newElement);
        })
        .catch(error => {
            console.error('Error fetching route data:', error);
        });
}


function fetchBusTimings2() {
    const org = document.getElementById("boardingPoint").value;
    const des = document.getElementById("destination").value;
    console.log(org + " " + des);

    const origin = encodeURIComponent(org);
    const destination = encodeURIComponent(des);

    const url = `http://localhost:8080/api/routes/desttorg?origin=${origin}&destination=${destination}`;
    axios.get(url)
        .then(response => {
            const data = response.data[0];
            const dfd1 = data.departure_from_destination.slice(1, -1).split(',');
            const aao1 = data.arrival_at_origin.slice(1, -1).split(',');

            const dfd = dfd1.map(time => time.trim().replace(/"/g, ''));
            const aao = aao1.map(time => time.trim().replace(/"/g, ''));

            console.log(dfd);
            console.log(aao);

            const existingCard = document.getElementById("bus-timings-1");
            if (existingCard) {
                existingCard.remove();
            }

            const newElement = createBusTimingsCard(dfd, aao,des,org);
            const parent = document.getElementById("Bt-2");
            parent.appendChild(newElement);
        })
        .catch(error => {
            console.error('Error fetching route data:', error);
        });
}


function fetchRoutes() {
    const org = document.getElementById("boardingPoint").value;
    const des = document.getElementById("destination").value;
    console.log(org + " " + des);

    const origin = encodeURIComponent(org);
    const destination = encodeURIComponent(des);

    const url = `http://localhost:8080/api/routes/bus_stops?origin=${origin}&destination=${destination}`;
    axios.get(url)
        .then(response => {
            const data = response.data[0];
            const jsonData = JSON.parse(data.busStops);

            // Create container for bus stops
            const routeContainer = document.createElement('div');
            routeContainer.className = 'route-container-custom';

            // Iterate over bus stops data
            for (let i = 0; i < jsonData.length; i++) {
                const busStop = jsonData[i];

                // Create bus stop element
                const busStopElement = document.createElement('div');
                busStopElement.className = 'route-bus-stop-custom';
                busStopElement.textContent = `${i + 1}. ${busStop.busstop}`; // Add numbering
                routeContainer.appendChild(busStopElement);
            }

            // Append route container to parent element
            const parentElement = document.getElementById('stops');
            parentElement.innerHTML = ''; // Clear previous content
            parentElement.appendChild(routeContainer);
        })
        .catch(error => {
            console.error('Error fetching route data:', error);
        });
}


const ddr = document.getElementById("ddr");
ddr.addEventListener("click", fetchRouteData);

const busTimings1 = document.getElementById("bt-1");
busTimings1.addEventListener("click", fetchBusTimings1);

const busTimings2 = document.getElementById("bt-2");
busTimings2.addEventListener("click", fetchBusTimings2);

const path = document.getElementById("stop");
path.addEventListener("click", fetchRoutes);