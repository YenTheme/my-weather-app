body {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
}

h1 {
  color: cornflowerblue;
  font-size: 24px;
  font-weight: 100;
  line-height: 28px;
  margin-bottom: 0;
}

ul {
  margin: 0;
  padding: 0;
}

li {
  list-style: none;
  margin: 0;
  padding: 0;
  color: darkslategrey;
  font-size: 16px;
  font-weight: 100;
  line-height: 19px;
}

li:first-letter {
  text-transform: capitalize;
}

img [src=""] {
  display: none;
}

.weather-app-wrapper {
  max-width: 500px;
  margin: 30px auto;
}

.weather-app {
  padding: 20px;
  border: 1px solid #dadde1;
  border-radius: 5px;
}

.overview {
  margin-bottom: 20px;
}

.fa-cloud-rain {
  margin-right: 5px;
  font-size: 36px;
  color: rgb(198, 206, 214);
  opacity: 50%;
}

.weather-temperature strong {
  font-size: 40px;
  color: cornflowerblue;
  font-weight: 400;
  line-height: 1;
}

.weather-temperature .units {
  position: relative;
  font-size: 12px;
  top: -20px;
}

.weather-temperature .active {
  color: darkslategrey;
  cursor: default;
}

.weather-temperature .active:hover {
  text-decoration: none;
}

#celsius-link {
  text-decoration: none;
  cursor: default;
}

#fahrenheit-link {
  text-decoration: none;
}

search("Singapore");
