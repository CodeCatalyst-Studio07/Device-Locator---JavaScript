function getPosition(position) {
    const {
        latitude, longitude
    } = position.coords,
    url = `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`;

    fetch(url).then(data => data.json()).then(response => {
        const addr = response.address;

        console.table(addr);
    })
};