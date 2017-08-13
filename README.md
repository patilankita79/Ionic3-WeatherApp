# WeatherApp
Weather application developed using Ionic 3 and Angular 4
<hr>
<br/>
WeatherApp is a hybrid mobile application developed in Ionic 3 framework. It uses wunderground API to report the weather of cities in US. Ionic storage is also implemented to store the location information in ionic.<br/>
API requests are made over HTTP. Data feature returns JSON data.<br/>
In Settings page, you can enter city and its state. After saving changes, application displays temperature, relative humidity, dewpoint, heat index. Default location for this application is Miami, FL

<hr>
<h3>Installation: </h3>
$npm install
<h3>Serve the application to browser: </h3>

$ionic serve

<h3>To view application in mobile simulated platforms</h3>
$ionic serve --l
<h3>Adding platforms </h3>
To add android platform<br/>
$ionic cordova platform add android
<br/>
To add iOS platform<br/>
$ionic cordova platform add ios
<h3>Build an android apk</h3>
$ionic cordova build android

