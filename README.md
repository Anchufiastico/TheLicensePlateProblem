Hi there! 👋

This project is a small test where I built a few components to display a license plate based on a user-provided number.

To achieve this, I created a pipeline that converts the numeric input into a valid license plate format. I also limited the user input to ensure the resulting license plate always has exactly 6 characters.

For the conversion logic, I was inspired by the hexadecimal system. However, since license plates in this case can include both letters and numbers, I realized there are 36 possible characters (0–9 and A–Z), compared to just 16 in hexadecimal. Because of this, I decided to implement a custom Base36 conversion.

Although there are some libraries available for Base36, most seemed outdated or unnecessarily complex, so I wrote my own function to handle the conversion in a more straightforward way.