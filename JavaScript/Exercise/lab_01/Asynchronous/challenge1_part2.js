const renderCountry = function (data) {
    console.log(data); // Dữ liệu quốc gia từ REST Countries API
    const html = `
      <article>
        <h3>${data.name.common}</h3>
        <p>Population: ${(data.population / 1_000_000).toFixed(1)} million</p>
        <p>Capital: ${data.capital[0]}</p>
        <p>Languages: ${Object.values(data.languages).join(', ')}</p>
        <p>Region: ${data.region}</p>
      </article>
    `;
    document.body.insertAdjacentHTML('beforeend', html);
  };
  
  const whereAmI = function (lat, lng) {
    fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`)
      .then((response) => {
        if (!response.ok) throw new Error(`Problem with geocoding ${response.status}`);
        return response.json();
      })
      .then((data) => {
        console.log(data); // Xem toàn bộ dữ liệu trả về từ API
        console.log(`You are in ${data.city}, ${data.country}`);
  
        // Bước 6: Sử dụng REST Countries API với tên quốc gia nhận được từ geocode API
        return fetch(`https://restcountries.com/v3.1/name/${data.country}`);
      })
      .then((response) => {
        if (!response.ok) throw new Error(`Country not found (${response.status})`);
        return response.json();
      })
      .then((data) => {
        renderCountry(data[0]); // Hiển thị dữ liệu quốc gia đầu tiên trong kết quả
      })
      .catch((err) => {
        console.error(`${err.message}`);
      });
  };
  
  // Gọi thử hàm với dữ liệu tọa độ mẫu
  whereAmI(52.508, 13.381); 
  whereAmI(19.037, 72.873); 
  whereAmI(-33.933, 18.474); 
  