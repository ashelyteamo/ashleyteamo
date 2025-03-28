/* Reset some default styles */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: Arial, sans-serif;
    line-height: 1.6;
    background-color: #f4f4f4;
    color: #333;
}

nav {
    background-color: #333;
    color: white;
    padding: 1rem;
}

nav ul {
    list-style-type: none;
    text-align: center;
}

nav ul li {
    display: inline;
    margin: 0 20px;
}

nav ul li a {
    color: white;
    text-decoration: none;
    font-size: 18px;
}

nav ul li a:hover {
    text-decoration: underline;
}

/* Section Styles */
section {
    padding: 40px 20px;
    margin: 20px 0;
}

h1 {
    color: #333;
    font-size: 2rem;
    text-align: center;
}

p {
    text-align: center;
    font-size: 1.2rem;
    color: #666;
}

.gallery {
    display: flex;
    justify-content: center;
    gap: 20px;
}

.gallery img {
    width: 150px;
    height: 150px;
    object-fit: cover;
    border-radius: 10px;
}

button {
    background-color: #f3a683;
    color: white;
    border: none;
    padding: 10px 20px;
    cursor: pointer;
    font-size: 1rem;
    display: block;
    margin: 0 auto;
}

button:hover {
    background-color: #f78fb3;
}

/* Footer */
footer {
    background-color: #333;
    color: white;
    text-align: center;
    padding: 10px;
    position: fixed;
    width: 100%;
    bottom: 0;
}

