# WeatherApp - Hybrid Mobile Application
Weather application developed using Ionic 3 and Angular 4 with the use of wnderground API to fetch weather information.
<hr>
WeatherApp is a hybrid mobile application developed in Ionic 3 framework. It uses wunderground API to report the weather of cities in US. Ionic storage is also implemented to store the location information in ionic.<br/>
API requests are made over HTTP. Data feature returns JSON data.<br/>
In Settings page, you can enter city and its state. After saving changes, application displays temperature, relative humidity, dewpoint, heat index. Default location for this application is Miami, FL

<hr>
<h3>Application interface for iOS and Android platforms</h3>
<img src = "https://github.com/patilankita79/WeatherApp/blob/master/Screenshots/Screenshot%202017-09-14%2011.38.08.png" />
<img src = "https://github.com/patilankita79/WeatherApp/blob/master/Screenshots/Screenshot%202017-09-14%2011.37.35.png" />
<img src = "https://github.com/patilankita79/WeatherApp/blob/master/Screenshots/Screenshot%202017-09-14%2011.37.56.png" />
<hr>
<h3>Installation: </h3>
<blockquote>$npm install</blockquote>

<h3>Serve the application to browser: </h3>
<blockquote>$ionic serve</blockquote>


<h3>To view application in mobile simulated platforms</h3>
<blockquote>$ionic serve --l</blockquote>
OR
<blockquote>$ionic lab</blockquote>

<h3>Adding platforms </h3>

<i>To add android platform</i><br/>
<blockquote>$ionic cordova platform add android</blockquote>
<br/>
<i>To add iOS platform</i><br/>
<blockquote>$ionic cordova platform add ios</blockquote>
<h3>Build an android apk</h3>
<blockquote>$ionic cordova build android</blockquote>
<hr> 
While building an APK you might yet an error => <strong>Module not found: Error: Can't resolve 'promise-polyfill' </strong><br>
Refer this issue => https://github.com/ionic-team/ionic-app-scripts/issues/1001

<b>Solution: </b>
In the project directory run the following command,
<blockquote>$npm install promise-polyfill --save-exact</blockquote>

and then run the command
<blockquote>$ionic cordova build android</blockquote>
