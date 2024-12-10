<!-----------------------------------------------------

    Website by  : Buuut | Websites & Marketing
    Contact     : www.buuut.nl

------------------------------------------------------>
<!DOCTYPE html>
<html lang="ne">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Buuút</title>
    <link rel="icon" type="image/fav,png" href="resources/images/buuut-logo.svg">
    <link rel="stylesheet" href="resources/main.css" />
</head>
<body>

<?php include 'resources/include/navigation.php'; ?>

<main id="hero" role="main">
    <section aria-label="Welcome">
        <div>
            <div class="text-container">
                <h1>
                    <span>buu</span><span>ú</span><span>t</span>
                </h1>
                <p>
                    Wij leveren doordachte & creatieve digitale diensten,
                    <br>
                    voor bedrijven die willen innoveren.
                </p>
                <div class="hero-button-container">
                    <button class="hero-btn-1">Ons werk</button>
                    <button class="hero-btn-2">Contact</button>
                </div>
            </div>
        </div>
    </section>
</main>

<div class="image-banner">
    <img src="resources/images/test.svg" alt="buuut logo banner">
    <div class="background-fill"></div>
</div>

<section id="about-us">
    <div class="logo-banner">
        <img src="resources/images/monsterboard.png" alt="Company logo 1">
        <img src="resources/images/Bos-Incasso.png" alt="Company logo 2">
        <img src="resources/images/equinox.png" alt="Company logo 3">
        <img src="resources/images/acadin.png" alt="Company logo 4">
        <img src="resources/images/Vrest.png" alt="Company logo 5">
        <img src="resources/images/parkeer-garages.png" alt="Company logo 6">
    </div>

    <div class="content">
        <div class="text-section">
            <h1>Wij zijn jouw <br>digitale partner</h1>
            <p>
                Waarom? Omdat we een goede band belangrijk vinden. Buuut denkt mee, is creatief en beschikt over een multidisciplinair team om jouw organisatie blijvend te ondersteunen. Dat doen we met vele klanten, waarmee we ook al vele jaren werken. Niet op zoek naar een one-night stand, maar een vaste evenwaardige relatie.
            </p>
            <button>Wat wil jij bereiken?</button>
        </div>

        <div class="custom-carousel-section">
            <div class="custom-carousel-viewport">
                <div class="custom-carousel-images">
                    <img src="resources/images/website-ph.png" alt="Platform Screenshot">
                    <img src="resources/images/website-ph.png" alt="Platform Screenshot">
                    <img src="resources/images/website-ph.png" alt="Platform Screenshot">
                    <img src="resources/images/website-ph.png" alt="Platform Screenshot">
                    <img src="resources/images/website-ph.png" alt="Platform Screenshot">
                </div>
            </div>
            <div class="custom-carousel-controls">
                <button class="prev" onclick="prevImage()"></button>
                <button class="next" onclick="nextImage()"></button>
            </div>
        </div>
    </div>
</section>

<section id="team">
    <ul>
        <li style="background-color: #45a0a9">
            <img src="resources/images/team-bas.png" alt="Image 1">
            <h3>Bas</h3>
        </li>
        <li style="background-color: #64d1c8">
            <img src="resources/images/team-yanna.png" alt="Image 1">
            <h3>Yanna</h3>
        </li>
        <li style="background-color: #ebeaed">
            <img src="resources/images/team-tobias.png" alt="Image 1">
            <h3>Tobias</h3>
        </li>
        <li style="background-color: #dfdfe1">
            <img src="resources/images/team-cas.png" alt="Image 1">
            <h3>Cas</h3>
        </li>
        <li style="background-color: #3c4e6d">
            <img src="resources/images/team-henk.png" alt="Image 1">
            <h3>Henk</h3>
        </li>
    </ul>
</section>

<section id="services">
    <div class="container">
        <header class="header">
            <h1>Alle digitale diensten onder één dak</h1>
            <p>
                Digitale partners die op ons kunnen rekenen en waarop wij kunnen rekenen door de persoonlijke en de goede relatie die wij met hen hebben. Benieuwd naar hoe een partnerschap eruit kan zien?
            </p>
            <button href="#" class="button">Neem contact met ons op</button>
        </header>

        <ul>
            <li>
                <span>01</span>
                <img src="resources/images/code.svg" alt="Code icon" >
                <h3>Webapplicaties</h3>
                <p>
                    Als je kijkt naar onze indrukwekkende portfolio, dan zie je dat we al vanaf dag 1 bezig zijn met online software. Dagelijks spijkeren we onze kennis bij en blijven wij op de hoogte. Wat is jouw vraagstuk?
                </p>
            </li>
            <li>
                <span>02</span>
                <img src="resources/images/megaphone.svg" alt="Online marketing icon">
                <h3>Online marketing</h3>
                <p>
                    Doelen stellen, kanalen bepalen, creatieve campagnes & dataverzameling voor analyse. De mix om jouw organisatie naar een hoger niveau te tillen. Of het nu gaat om social media beheer, zichtbaar zijn in Google of advertenties.
                </p>
            </li>
            <li>
                <span>03</span>
                <img src="resources/images/website.svg" alt="Websites icon">
                <h3>Websites</h3>
                <p>
                    Zelf een product of online marketingtraject lopen en wil je een sparringpartner voor een keer, of met regelmaat? Dan delen wij graag onze kennis. Waar loop je tegenaan?
                </p>
            </li>
            <li>
                <span>04</span>
                <img src="resources/images/chat-bubble.svg" alt="Communicatie icon">
                <h3>Communicatie</h3>
                <p>
                    Digitale partners die op ons kunnen rekenen en waarop wij kunnen rekenen door de persoonlijke en de goede relatie die wij met hen hebben. Benieuwd naar hoe een partnerschap eruit kan zien?
                </p>
            </li>
            <li>
                <span>05</span>
                <img src="resources/images/people.svg" alt="Interim advies icon">
                <h3>Interim advies</h3>
                <p>
                    Digitale partners die op ons kunnen rekenen en waarop wij kunnen rekenen door de persoonlijke en de goede relatie die wij met hen hebben. Benieuwd naar hoe een partnerschap eruit kan zien?
                </p>
            </li>
        </ul>
    </div>
</section>

<section id="video">
    <div class="video-container">
        <iframe
          src="https://www.youtube.com/embed/NDFHi8r1j1I"
          title="buuut youtube video"
          allowfullscreen
        ></iframe>
    </div>
    <div class="content">
        <h2>Wat we er zelf van vinden?</h2>
        <p>
            Dat vertelt ons team je graag zelf. Wie zitten er nou achter al dat moois dat Buuút maakt? Bekijk de video.
        </p>
    </div>
</section>

<section id="changelog">
    <div>

        <h1>Onze updates</h1>
        <p>.changelog</p>
        <div>
            <article>
                <h3>ONLINE MARKETING</h3>
                <h2>YANNA</h2>
                <p>TikTok mega populair en brengt klanten naar winkelcentrum Zaailand</p>
            </article>
            <article>
                <h3>WEBAPPLICATIES</h3>
                <h2>BAS</h2>
                <p>Het opzetten van een webapplicatie doen we in deze volgorde</p>
            </article>
            <article>
                <h3>WEBDEVELOPMENT</h3>
                <h2>TOBIAS</h2>
                <p>Mijn werk afkrijgen is uitdagend door verplicht darten met de baas</p>
            </article>
        </div>
    </div>
</section>

<?php include 'resources/include/footer.php'; ?>

</body>
<script src="resources/js/navbar.js"></script>
<script src="resources/js/Carousel.js"></script>

</html>
