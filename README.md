# Trigg.Track.

Are you a victim of any health condition that never seems to get any better? Or if it does - does it still keep coming back?

Have you ever wondered or been told to keep track of certain variables that MAY HAVE caused it to deteriorate, but never seem to know how to start, or get too overwhelmed halfway through the daily recording process?

This is what inspired this personal project of mine - **Trigg.Track.**, while fortifying my newly gained knowledge in React js.

**Trigg.Track.** is a trigger tracker that helps users to log their health condition every day, along with variables that may have triggered any change in the specific condition. Apart from prompting daily inputs, displaying conditions vs variables per month, it aims to allow users the selection of potential triggers that may help plan their future life to avoid them.

**As of 2023-01-28:**\
In this project, the conditions to be studied is my eczema, while observing the diet variable by logging in the meals I had every day. The charting and trigger selection functions are not yet developed, as well as the inclusion of other conditions and variables. Once user authentication has been incorporated, I will update the deployed link over here for trying out!

### Technologies used

**1. React js v.18:**

1. Functional components
2. Hookes are mostly useState and useEffect, and custom useFetch
3. Using props and lifting state for mostly the user interactions with Input, Select and Button components.
4. Hierachy of the components used:
   <!-- image links [alt:] (url "title") -->

   ![TriggTrack App Hierachy](https://i.imgur.com/6Znqjfk.png "TriggTrack Hierachy")

   **As of 2023-01-28:**\
   The minimal viable product (MVP) consists of the Home and Track pages that are routed through the NavBar links. The description of the hierachy can be found int the wireframes within [the general approach section](#general-approach).

**2. Firebase realtime database:**

1. The data of each users' conditions and variables are stored in google cloud's platform - [Firebase](https://firebase.google.com/).
2. Javscript's fetch api was used to fetch the database through the url provided on Firebase.

### General approach

The app's design is catered to the general wellbeing of our users, through the use of a minimalist display of information that is easy for the eyes, accompanied with slow glowing buttons that prompts user actions for daily inputs.

**Home Page**\\
In order to not overwhelm users with too much information, the home page greets users with 2 main questions:

1. To request for inputs, depending on whether the current date has been filled.
2. To ask if the user wants to be redirected to view their tracked history.
   ![TriggTrack Wireframe 01](https://i.imgur.com/QSmm5yz.png "TriggTrack Wireframe 01")

**Input Form**\\
Following the user's action, if the form input option has been selected, the individual form sections will open up for users to choose their date, condition, and variables respectively.

![TriggTrack Wireframe 02](https://i.imgur.com/vD9weMl.png "TriggTrack Wireframe 02")

**Track History**\\
The records can be viewed by selecting the month to dispay. This triggers a list of individual date's records to be displayed throughout the page.

![TriggTrack Wireframe 03](https://i.imgur.com/kjIrA96.png "TriggTrack Wireframe 03")

### Major hurdles

1. Structuring my own database for the first time was one of the biggest challenge. This made me redo the structure many times when I tried to map and display the information within Track history.

2. Fetching data from Firebase was also difficult, mostly due misunderstanding Google's documentation. Firebase has 2 database options - Firestore, and realtime database (fantastic naming, right? That makes it oh so easy to search for answers.) Although I found that Firebase library has functions to fetch data easily with their API key, as required by GA's project brief, I had to use the javascript fetch method. For more details, do contact me - I shall not elaborate too much here.

3. Fetching data in more than 1 React components. As React works with states, the data stored within states that are props to children cannot be accessed simply. We need to check if the data fetched is not null before processing the data.

### Unsolved problems / Future work

**User Authentication:**
In the future, I would like user accounts to have their own list of conditions and variables to track.

1. Before that, it is important to ensure that the data structure that can be universally used with the react components make sense.
2. .
3. .

**Customized conditions & variation inputs:**

1. .
2. .

**Trigg.Track to other functions:**
Once the app has enough users, I aim to incorporate other features that extends their user interactions to further supports their condition tracking.

1. Trigg.Track. to Chit.Chat. This connects users with similar conditions to a social platform that facilitates features like sharing of tips, communication, or event organizing of events.
2. Trigg.Track. to Shake.Shack. Kidding they probably should avoid that.
3. Trigg.Track. to Shit.Shat. Sorry just wanted to add 3 points. Will think of more in the future! Something along the lines of connecting them to sources of help - dieticians, physiologists etc.
