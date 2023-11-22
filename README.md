# ZMaison API

Here is the API of my project. It will be used by my Discord bot and by my website made in React Native. 
I try to make it the most documented as I can.

# Documentation

![alt text](https://github.com/rochdy0/ZMaison-API/blob/main/docs/UML.png?raw=true)

# Start the project

```sh
npm install #install dependencies
docker-compose build #build the docker image for the local DB
docker-compose up # run the container
npm run serv
```

/!\ It's possible it fails on `missing volume`. Create first the volume with the correct name and rerun the `docker-compose up` command.

# Test the API

When the app is running, you can `curl` or use a tool like `Postman` to do calls on the API.
Normally, your server is running on `localhost:4000`. You just have to test your routes and voilà!

##### Team Object

Field | Type | Description |
------------- | ------------- |  ------------- 
id | String | the team's id
name | String | the team's name
channel_name | String | the Discord channel name
channel_id | Number | the Discord channel id
role_id | Number | the Discord role id

##### User Object

Field | Type | Description |
------------- | ------------- |  ------------- 
id | String | the user's id
username | String | the user's username
avatar_url | String | the user's avatar URL
team | <a href="#team-object">team object</a> | the team where the user is in
arrival_date | String | the date when the user came in the challenge
theme_objective? | String | the theme of the final season objective
details_objective? | String | the details of the final season objective

##### Grouped Stats Object

Field | Type | Description |
------------- | ------------- |  ------------- 
user | <a href="#user-object">user object</a> | the user of the stat
stats | array of <a href="#stat-object">stat object</a> | any stat corresponding to the searching period

##### Stat Object

Field | Type | Description |
------------- | ------------- |  ------------- 
date? | String | the date of this stat in the format `YYYY-MM-DD`
messages_points | Number | the amout of points the user earned with messages
messages_number | Number | the number of messages the user sent
trainings_points | Number | the amout of points the user earned with trainings
trainings_number | Number | the number of trainings the user did
challenges_points | Number | the amout of points the user earned with weekly challenges
challenges_number | Number | the number of challenges the user did
penalty_points | Number | the amout of points the user lost
penalty_number | Number | the number of penalty the user took

##### Grouped Events Object

Field | Type | Description |
------------- | ------------- |  ------------- 
user | <a href="#user-object">user object</a> | the user of the stat
events | array of <a href="#event-object">event object</a> | any event corresponding to the searching period or type

##### Event Object

Field | Type | Description |
------------- | ------------- |  ------------- 
id | Number| the event"s id
type | Number | <a href="#event-type">type of event</a>
points | Number | the number of points the event brought
date | Number | the date of the event

##### Event Type
 Value | Type |
------------- | -------------
0 | Training
1 | Video Uploaded
2 | Message
3 | Weekly Challenge
4 | Penalty


## Get user informations

URL : `GET /users/:id`
Returns a <a href="#user-object">user object</a> for a given user id.

##### Response Code

HTTP Code | Description
------------- | -------------
200 OK | Successfully retrieved the user.
404 Not Found | `id` not match with any users.
400 Bad Request | • `id` not contain only numbers. <br> • `id` is missing.
500 Internal Server Error |


## Get user stats

URL : `GET /users/:id/stats`
Returns a <a href="#grouped-stats-object">grouped stats object</a> for a given user id.

#### Parameters

Field  | Type | Description
------------- |  ------------- | -------------
from? | String  | Date in the format `YYYY-MM-DD`
to? | String  | Date in the format `YYYY-MM-DD`

#### Response Code

HTTP Code | Description
------------- | -------------
200 OK | Successfully retrieved stats of the user.
404 Not Found | `id` not match with any users.
400 Bad Request | • `id` not contain only numbers. <br> • `id` is missing.
500 Internal Server Error |


## Get user events

URL : `GET /users/:id/events`
Returns a <a href="#grouped-events-object">grouped events object</a> for a given user id.

#### Parameters

Parameter  | Type |  Description
------------- | ------------- | -------------
type? | Number | <a href="#event-type">type of event</a>
from? | String  | Date in the format `YYYY-MM-DD`
to? | String  | Date in the format `YYYY-MM-DD`

#### Response Code

HTTP Code | Description
------------- | -------------
200 OK | Successfully retrieved events.
404 Not Found | • `id` not match with any users.
400 Bad Request | • `id` not contain only numbers. <br> • `id` is missing.
500 Internal Server Error |
