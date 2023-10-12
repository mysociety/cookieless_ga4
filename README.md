# Cookieless GA4

This is an approach to use Google Analytics 4 for basic analytics, without using cookies (and so needing a cookie banner).

Similar to this [StackOverflow comment](https://stackoverflow.com/questions/71424887/cookieless-google-analytics-v4-still-generates-ga-cookie) - this works by monkey patching `document.cookies` so that a random value is returned when Google Analytics tries to access its own cookie - and it throws away any attempt to set it. 

See [cookieless_template.html](cookieless_template.html), and replace references to `{{ GA4_MEASUREMENT_ID }}` with your measurement ID.
