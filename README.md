# This project was developed with HTML, CSS, and JAVASCRIPT

# Live Site
https://lribeirodev.github.io/ProjetoWEM/

# Views

## Mobile View
<img src="/../master/static_files/screenshots/mobile.png" height="600px"/>

## Desktop View
<img src="/../master/static_files/screenshots/desktop.png" width="600px"/>

</br>

# Mackup Content Project

### The code below shows us the components
<img src="/../master/static_files/modelagem/Modulos.png" width="600px"/>

</br>

### The webpage below shows us possible database schema
<img src="/../master/static_files/modelagem/Modelagem.png" width="600px"/>

</br>

### We have a diagram about the project simplifying what How WEM works
<img src="/../master/static_files/modelagem/Diagrama.png" width="600px"/>

</br>

# Sql Query to create tables in oracle database
```sql
CREATE TABLE REPLACE_WITH_DATABASE.TC_LUCASR_TOP_BANNER_INDEX
( ID VARCHAR2(40) PRIMARY KEY NOT NULL,
  URL_LINK VARCHAR2(255),
  URL_IMAGE_DESKTOP VARCHAR2(255),
  URL_IMAGE_MOBILE VARCHAR2(255)
);

CREATE TABLE REPLACE_WITH_DATABASE.TC_LUCASR_TREND_INDEX
( ID VARCHAR2(40) PRIMARY KEY NOT NULL,
  URL_LINK VARCHAR2(255),
  TEXT_TREND VARCHAR2(255)
);

CREATE TABLE REPLACE_WITH_DATABASE.TC_LUCASR_CARD_INDEX
( ID VARCHAR2(40) PRIMARY KEY NOT NULL,
  URL_LINK VARCHAR2(255),
  URL_IMAGE_DESKTOP VARCHAR2(255),
  URL_IMAGE_MOBILE VARCHAR2(255),
  TEXT_TITLE VARCHAR2(255)
);

CREATE TABLE REPLACE_WITH_DATABASE.TC_LUCASR_CAROUSEL_BANNER_INDEX
( ID VARCHAR2(40) PRIMARY KEY NOT NULL,
  URL_IMAGE_DESKTOP VARCHAR2(255),
  URL_IMAGE_MOBILE VARCHAR2(255),
  TEXT_TITLE VARCHAR2(255),
  TEXT_BUTTON VARCHAR2(255),
  URL_LINK_BUTTON VARCHAR2(255)
);

CREATE TABLE REPLACE_WITH_DATABASE.TC_LUCASR_BIOGRAPHY_INDEX
( ID VARCHAR2(40) PRIMARY KEY NOT NULL,
  URL_IMAGE_DESKTOP VARCHAR2(255),
  URL_IMAGE_MOBILE VARCHAR2(255),
  TITLE_TEXT VARCHAR2(255),
  DESCRIPTION_TEXT VARCHAR2(255)
);
```
</br>

## Notes:
<ul>
<li>Aspect #1 When creating CTD we should consider images references for desktop, and mobile</li>
<li>Aspect #2 The mockup is just a base to the possible real model, however, while making implementation the database could be altered, for example, a table, a column name URL_IMAGE_DESKTOP is better than URL_IMAGE because the more specific will turn things easy for the user to understand the implementation that was used for.</li>
<li>Aspect #3 While shaping the page, we will consider that one element will be used to make a component, this is a SHAPE for our CAKE, now repeated images and text will use one CTD to make many content instances and pointing to references inside the database.</li>
</ul>

