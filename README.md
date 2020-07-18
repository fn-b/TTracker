# TTracker

This is an Urbit Gall App that allows users to interact with Boston Train Data.

Current Issue: The frontend for  the trip planner is done But the backend does not work yet. I have detailed the issues here: https://groups.google.com/a/urbit.org/forum/#!topic/dev/JYCPbkWCbe0, and will move forward when I get a response from Tlon. 


## Installation

First, [boot your ship](https://urbit.org/using/develop/#creating-a-development-ship), and make sure you've mounted its pier by running `|mount %` in Dojo.

Then, clone this repo, and create an `.urbitrc` file in the repo directory with the following contents:

```js
module.exports = {
  URBIT_PIERS: [
    "/path/to/ship/home",
  ]
};
```

Then run this command from the home directory of TTracker:

```
npm run build
```

Finally, in your ship's Dojo, run:

```
|commit %home
|start %TTracker
```

You should then be able to see the `TTracker` tile on your Landscape home.


## Key Management
The app is dependent on the MBTA v3 API. You can set your api key in the `Key Management` page. You will need to go here https://api-v3.mbta.com/register to obtain a key (you need an email adress sorry!) 
The MBTA website says you can only make 40 requests without a key. During development I have made many more than this and did not run into any problems so maybe you don't need one ;).
