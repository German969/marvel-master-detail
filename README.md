This project use data provided by Marvel. © 2014 Marvel.

## Marvel Master Detail

You can access the deployed application from the following URL:<br />
Open [https://german969.github.io/marvel-master-detail](https://german969.github.io/marvel-master-detail) to view it in the browser.

### Characters List

When you first land on the application, you'll see a list of superheroes ordered by name.<br />
The application displays 10 rows per page, but you can change that to 5, or 20.<br />

The data is retrieved by chunks of 20 characters per request. When you reach the last fulfilled page, it automatically will make a new request to fetch 20 more items to prepare for the next page. This was designed that way to have a better experience when navigating through the list of characters, and keeping the server responses in a small size. 

### Hero List Items

Each row of the list ic comprised by a small avatar, the name of the hero, and four flags indicating if there are any comic, series, event or story (respectively), available from that hero.<br />
You can hover the pointer over the flags to see the exact amount of items the hero has for that resource. The reason this was implemented with icons and tooltips was to keep the UI simple and user-friendly.

### Displaying Hero Details

You can see the hero details at the right column by clicking on any item from the list.<br />
The info include a bigger representative image, the full name a description (if available), and a list of resource links such as the official hero detail page, wiki and comiclink.<br />

### Hero Detail Deep Linking

You can access directly to any hero detail page by providing an anchor fragment with hero's name in lower serpent case (i.e. #black_panther).<br />
**note that you need to provide the full name defined by marvel. If you don't know the full name, you can still search for the starting characters from the search field.**

### Searching Heroes

A searching functionality was provided to filter the full list of characters with the ones that start with an specific string, just type the string in the search input and click the search button.
**this action will trigger a new call to the API, this is needed since we don't have the full list of heroes at the first time.**<br />
Also, this action will replace the previous data stored in the browser, because the complexity for maintaining the original order of the full list will be unmanageable. But you'll keep your recent hero selections.

### Recent Visited Heroes Detail

Below of the characters list, and the details page, you can find the last three displayed heroes, as a quick access to its details pages.<br />
This links will keep available even after triggering a new search with a query string. This functionality was also intended to provide a better user experience by having a way back to what they have been visited.<br />
The intention of this links is that they serve as a "deep linking" PoC.

### Loading State

Both, the list and the details page, have a skeleton placeholder that shows up when we are fetching data from the API to create a "loading" sensation. After the first time, storage might be always filled up with some data.

## Deployment Configuration

### Changing the API key

The application provides a pre-configured API key for the domain _german969.github.io_, but you can run the application with a different API key by prividing a custom environment variable called REACT_APP_API_KEY. This was you can deploy the application on different environments, each one with its own API key. 