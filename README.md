# Country, News & Weather App

This Ionic-based mobile application provides users with comprehensive information about countries, news, and weather. Built with Angular and the Ionic framework (v7.2.0), the app utilizes multiple APIs to fetch real-time data, ensuring an engaging and informative user experience.

## Features
1. Home Page:
  - Enter a country name or partial name to search.
  - Navigate to settings via the settings icon.
2. Settings Page:
  - Choose measurement units: Metric, Imperial, or Standard.
  - Default is Metric.
3. Countries Page:
  - Displays a list of countries matching the search term.
  - Data includes:
  - Flag
  - Official name
  - Buttons for News and Weather
4. News Page:
  - Displays the latest news for the selected country using the NewsData.io API.
  - If no news is available, users are informed accordingly.
5. Weather Page:
  - Displays real-time weather for the selected country using the OpenWeatherMap API.
  - Information includes:
  - Capital city
  - Weather icon and description
  - Current temperature with selected units

## APIs Used
	1.	RestCountries API – Fetches country details.
	2.	NewsData.io API – Provides country-specific news.
	3.	OpenWeatherMap API – Retrieves weather data.

## Installation
1. Clone the repository:

```bash
git clone <repository-url>
```

2 Navigate to the project directory:
```bash
cd G00425765
```

3. Install dependencies:
```bash
npm install
```

4. Run the app:
```bash
ionic serve
```



 
