function Restaurants() {
    const org = document.getElementById("location").value;

    const url = `http://localhost:8080/api/routes/restaurants?location=${org}`;
    axios.get(url)
        .then(response => {
            const data = response.data;
            const existingElement = document.getElementById("restaurants");
            if (existingElement) {
                existingElement.remove();
            }
            const newElement = document.createElement('div');
            newElement.id = "restaurants";
            newElement.classList.add('grid', 'grid-cols-3', 'gap-4', 'p-4');

            const restaurantsToShow = data.filter(restaurant => restaurant && restaurant.rating && parseFloat(restaurant.rating) > 4);

            restaurantsToShow.slice(0, 20).forEach(restaurant => {
                const card = createRestaurantCard(restaurant);
                newElement.appendChild(card);
            });

            document.body.appendChild(newElement);
        })
        .catch(error => {
            console.error('Error fetching route data:', error);
        });
}

function createRestaurantCard(restaurant) {
    const card = document.createElement('div');
    card.classList.add('card', 'bg-white', 'rounded-lg', 'shadow-lg', 'overflow-hidden');
    card.innerHTML = `
        <div class="p-4">
            <p class="text-lg font-semibold">Name : ${restaurant.name}</p>
            <p>Address : ${restaurant.address}</p>
            <p>Location : ${restaurant.location}</p>
            <p>Contact Info : ${restaurant.phone}</p>
            <p>Rating : ${restaurant.rating}</p>
            <button class="bg-red-500 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded mt-4">
                <a href="${restaurant.url}" target="_blank">Order</a>
            </button>
        </div>
    `;
    return card;
}

const searchBtn = document.getElementById("searchBtn");
searchBtn.addEventListener("click", Restaurants);
