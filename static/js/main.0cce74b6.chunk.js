(this.webpackJsonpgalleria=this.webpackJsonpgalleria||[]).push([[0],{13:function(e,a,t){e.exports={card:"Card_card__yW1ix",cardBody:"Card_cardBody__1_mCw",cardTitle:"Card_cardTitle__1WLVu",cardName:"Card_cardName__2aX9r",cardArtist:"Card_cardArtist__2YScc"}},21:function(e,a,t){e.exports={progress:"ProgressBar_progress__tnMZB",progressActive:"ProgressBar_progressActive__EjC_z",progressInactive:"ProgressBar_progressInactive__12Eq4"}},25:function(e,a,t){e.exports={masonryGrid:"Gallery_masonryGrid__16nqc"}},32:function(e,a,t){e.exports={footer:"Footer_footer__7dIj9"}},4:function(e,a,t){e.exports={content:"picturepage_content__2Xljy",picture:"picturepage_picture__KLekw",pictureImage:"picturepage_pictureImage__fnBCn",lightbox:"picturepage_lightbox__3AZKb",lightboxWrapper:"picturepage_lightboxWrapper__2dx0N",lightboxWrapperContent:"picturepage_lightboxWrapperContent__etq90",lightboxCloseButton:"picturepage_lightboxCloseButton__V2dRm",lightboxButton:"picturepage_lightboxButton__15sdR",lightboxText:"picturepage_lightboxText__XrtLy",title:"picturepage_title__3o7r3",titleText:"picturepage_titleText__3_UcY",titleName:"picturepage_titleName__wMWq-",titleArtistName:"picturepage_titleArtistName__1rbVV",titleArtistImage:"picturepage_titleArtistImage__2kdSC",description:"picturepage_description__20gx_",descriptionBody:"picturepage_descriptionBody__3Lflu",descriptionText:"picturepage_descriptionText__WJ2X-",descriptionYear:"picturepage_descriptionYear__CVVxf",descriptionLink:"picturepage_descriptionLink__1aPFk"}},40:function(e,a,t){},43:function(e,a,t){},44:function(e,a,t){"use strict";t.r(a);var i=t(0),s=t.n(i),n=t(24),r=t.n(n),o=(t(40),t(6)),l=t(2),h=t.p+"static/media/logo.0a6c0727.svg",g=t(9),c=t.n(g),p=t(1),d=function(){var e=Object(l.e)();return Object(p.jsx)("div",{className:c.a.header,children:Object(p.jsxs)("div",{className:c.a.content,children:[Object(p.jsx)(o.b,{to:"/frontend-mentor-galleria",className:c.a.logo,children:Object(p.jsx)("img",{src:h,className:c.a.logoIcon,alt:"logo"})}),"/frontend-mentor-galleria"===e.pathname?Object(p.jsx)(o.b,{to:"starry-night",className:c.a.slideshowLink,children:Object(p.jsx)("span",{className:c.a.slideshow,children:"START SLIDESHOW"})}):Object(p.jsx)(o.b,{to:"/frontend-mentor-galleria",className:c.a.slideshowLink,children:Object(p.jsx)("span",{className:c.a.slideshow,children:"STOP SLIDESHOW"})})]})})},m=t(3),u=t(46),b=t(12),j=t(13),f=t.n(j),y={0:"250px",1:"400px",2:"285px",3:"250px",4:"340px",5:"250px",6:"500px",7:"280px",8:"430px",9:"420px",10:"260px",11:"525px",12:"340px",13:"330px",14:"260px"},w=function(e){var a=e.data,t=e.index;return Object(p.jsx)(o.b,{to:a.key,children:Object(p.jsx)("div",{className:f.a.card,style:{height:"".concat(y[t]),backgroundImage:"url(".concat(a.images.gallery,")")},children:Object(p.jsx)("div",{className:f.a.cardBody,children:Object(p.jsxs)("div",{className:f.a.cardTitle,children:[Object(p.jsx)("div",{className:f.a.cardName,children:a.name}),Object(p.jsx)("div",{className:f.a.cardArtist,children:a.artist.name})]})})})},t)},v=t(7),_=function(e){return e<=375?1:e>=375&&e<=768?2:4},x=t(25),k=t.n(x),O=function(){var e=v,a=Object(b.a)(),t=Object(m.a)(a,1)[0];return Object(p.jsx)("div",{className:k.a.masonryGrid,children:Object(p.jsx)(u.a,{items:e,columnGutter:40,columnWidth:310,render:w,columnCount:_(t)})})},N=function(){return Object(p.jsx)("div",{children:Object(p.jsx)(O,{})})},T=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return v.find((function(a){return a.key===e}))};function I(){return(I=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e}).apply(this,arguments)}function L(e,a){if(null==e)return{};var t,i,s=function(e,a){if(null==e)return{};var t,i,s={},n=Object.keys(e);for(i=0;i<n.length;i++)t=n[i],a.indexOf(t)>=0||(s[t]=e[t]);return s}(e,a);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(i=0;i<n.length;i++)t=n[i],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(s[t]=e[t])}return s}var C=i.createElement("g",{fill:"#FFF",fillRule:"nonzero"},i.createElement("path",{d:"M7.714 0l1.5 1.5-2.357 2.357 1.286 1.286L10.5 2.786l1.5 1.5V0zM3.857 6.857L1.5 9.214 0 7.714V12h4.286l-1.5-1.5 2.357-2.357zM8.143 6.857L6.857 8.143 9.214 10.5l-1.5 1.5H12V7.714l-1.5 1.5zM4.286 0H0v4.286l1.5-1.5 2.357 2.357 1.286-1.286L2.786 1.5z"}));function A(e,a){var t=e.title,s=e.titleId,n=L(e,["title","titleId"]);return i.createElement("svg",I({width:12,height:12,xmlns:"http://www.w3.org/2000/svg",ref:a,"aria-labelledby":s},n),t?i.createElement("title",{id:s},t):null,C)}var G=i.forwardRef(A),B=(t.p,t(4)),S=t.n(B),P=function(e){var a=e.name,t=e.artistName,i=e.artisImage;return Object(p.jsxs)("div",{className:S.a.title,children:[Object(p.jsxs)("div",{className:S.a.titleText,children:[Object(p.jsx)("div",{className:S.a.titleName,children:a}),Object(p.jsx)("div",{className:S.a.titleArtistName,children:t})]}),Object(p.jsx)("div",{className:S.a.titleArtistImage,children:Object(p.jsx)("img",{src:i,alt:t})})]})},V=function(e){var a=e.description,t=e.year,i=e.link;return Object(p.jsxs)("div",{className:S.a.description,children:[Object(p.jsx)("div",{className:S.a.descriptionYear,children:t}),Object(p.jsxs)("div",{className:S.a.descriptionBody,children:[Object(p.jsx)("div",{className:S.a.descriptionText,children:a}),Object(p.jsx)("a",{href:i,className:S.a.descriptionLink,children:"GO TO SOURCE"})]})]})},M=function(e){var a=e.image,t=e.name,s=Object(i.useState)(!1),n=Object(m.a)(s,2),r=n[0],o=n[1],l=function(){return o(!r)};return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsxs)("div",{className:S.a.lightboxButton,onClick:l,children:[Object(p.jsx)(G,{}),Object(p.jsx)("div",{className:S.a.lightboxText,children:"VIEW IMAGE"})]}),r&&Object(p.jsx)("div",{className:S.a.lightbox,children:Object(p.jsx)("div",{className:S.a.lightboxWrapper,children:Object(p.jsxs)("div",{className:S.a.lightboxWrapperContent,children:[Object(p.jsx)("span",{className:S.a.lightboxCloseButton,onClick:l,children:"CLOSE"}),Object(p.jsx)("img",{src:a,alt:t,className:S.a.lightboxImage})]})})})]})},E=function(e){var a=e.image,t=e.lightboxImage,i=e.name;return Object(p.jsxs)("div",{className:S.a.picture,children:[Object(p.jsx)("img",{src:a,alt:i,className:S.a.pictureImage}),Object(p.jsx)(M,{image:t,name:i})]})},F=function(){var e=Object(l.g)(),a=T(e.pictureName),t=Object(b.a)(),i=Object(m.a)(t,1)[0];return a?Object(p.jsxs)("div",{className:S.a.content,children:[Object(p.jsx)(E,{image:i<=375?a.images.hero.small:a.images.hero.large,lightboxImage:a.images.gallery,name:a.name}),Object(p.jsx)(P,{name:a.name,artistName:a.artist.name,artisImage:a.artist.image}),Object(p.jsx)(V,{description:a.description,year:a.year,link:a.source})]}):null},H=t(21),W=t.n(H),z=function(e){var a=e.pictureCount;return Object(p.jsx)("div",{className:W.a.progress,children:function(){var e=[];if(void 0===a)return[];for(var t=0;t<=15;t++)t<=a?e.push(!0):e.push(!1);return e}().map((function(e){return e?Object(p.jsx)("div",{className:W.a.progressActive}):Object(p.jsx)("div",{className:W.a.progressInactive})}))})},R=t.p+"static/media/icon-back-button.53213882.svg",D=t.p+"static/media/icon-next-button.b6581839.svg",J=t(8),K=t.n(J),Y=function(e){var a=e.name,t=e.artistName,i=e.prevPicture,s=e.nextPicture;return Object(p.jsxs)("div",{className:K.a.navigation,children:[Object(p.jsxs)("div",{className:K.a.navigationTitle,children:[Object(p.jsx)("div",{className:K.a.navigationName,children:a}),Object(p.jsx)("div",{className:K.a.navigationArtist,children:t})]}),Object(p.jsxs)("div",{className:K.a.navigationButtons,children:[Object(p.jsx)(o.b,{to:"/".concat(i),className:K.a.navigationButtonsLink,children:Object(p.jsx)("img",{src:R,className:K.a.navigationButtonsIcon,alt:"prevButton"})}),Object(p.jsx)(o.b,{to:"/".concat(s),className:K.a.navigationButtonsLink,children:Object(p.jsx)("img",{src:D,className:K.a.navigationButtonsIcon,alt:"nextButton"})})]})]})},q=t(32),U=t.n(q),X=function(){var e=Object(l.e)();if("/"===e.pathname)return null;var a=e.pathname.slice(1),t=T(a);if(void 0===t)return null;var i=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",a=v.findIndex((function(a){return a.key===e})),t=a-1<0?v[v.length-1].key:v[a-1].key,i=a+1>=v.length?v[0].key:v[a+1].key;return[a,t,i]}(a),s=Object(m.a)(i,3),n=s[0],r=s[1],o=s[2];return Object(p.jsxs)("div",{className:U.a.footer,children:[Object(p.jsx)(z,{pictureCount:n}),Object(p.jsx)(Y,{name:null===t||void 0===t?void 0:t.name,artistName:null===t||void 0===t?void 0:t.artist.name,prevPicture:r,nextPicture:o})]})},Q=(t(43),function(){return Object(p.jsxs)(o.a,{children:[Object(p.jsx)(d,{}),Object(p.jsxs)(l.c,{children:[Object(p.jsx)(l.a,{path:"/frontend-mentor-galleria",element:Object(p.jsx)(N,{})}),Object(p.jsx)(l.a,{path:"frontend-mentor-galleria/:pictureName",element:Object(p.jsx)(F,{})})]}),Object(p.jsx)(X,{})]})}),Z=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,47)).then((function(a){var t=a.getCLS,i=a.getFID,s=a.getFCP,n=a.getLCP,r=a.getTTFB;t(e),i(e),s(e),n(e),r(e)}))};r.a.render(Object(p.jsx)(s.a.StrictMode,{children:Object(p.jsx)(Q,{})}),document.getElementById("root")),Z()},7:function(e){e.exports=JSON.parse('[{"key":"starry-night","name":"Starry Night","year":1889,"description":"Although The Starry Night was painted during the day in Van Gogh\'s ground-floor studio, it would be inaccurate to state that the picture was painted from memory. The view has been identified as the one from his bedroom window, facing east, a view which Van Gogh painted variations of no fewer than twenty-one times, including The Starry Night. \\"Through the iron-barred window,\\" he wrote to his brother, Theo, around 23 May 1889, \\"I can see an enclosed square of wheat ... above which, in the morning, I watch the sun rise in all its glory.\\"","source":"https://en.wikipedia.org/wiki/The_Starry_Night","artist":{"image":"./assets/starry-night/artist.jpg","name":"Vincent Van Gogh"},"images":{"thumbnail":"./assets/starry-night/thumbnail.jpg","hero":{"small":"./assets/starry-night/hero-small.jpg","large":"./assets/starry-night/hero-large.jpg"},"gallery":"./assets/starry-night/gallery.jpg"}},{"key":"girl-with-pearl-earring","name":"Girl with a Pearl Earring","year":1665,"description":"The painting is a tronie, the Dutch 17th-century description of a \'head\' that was not meant to be a portrait. It depicts a European girl wearing an exotic dress, an oriental turban, and what was thought to be a very large pearl as an earring. In 2014, Dutch astrophysicist Vincent Icke raised doubts about the material of the earring and argued that it looks more like polished tin than pearl on the grounds of the specular reflection, the pear shape and the large size of the earring.","source":"https://en.wikipedia.org/wiki/Girl_with_a_Pearl_Earring","artist":{"image":"./assets/girl-with-pearl-earring/artist.jpg","name":"Johannes Vermeer"},"images":{"thumbnail":"./assets/girl-with-pearl-earring/thumbnail.jpg","hero":{"small":"./assets/girl-with-pearl-earring/hero-small.jpg","large":"./assets/girl-with-pearl-earring/hero-large.jpg"},"gallery":"./assets/girl-with-pearl-earring/gallery.jpg"}},{"key":"guernica","name":"Guernica","year":1937,"description":"The scene occurs within a room where, on the left, a wide-eyed bull stands over a grieving woman holding a dead child in her arms. In the center of the room a horse falls in agony with a large gaping hole in its side, as if it had just been run through by a spear or javelin. The horse appears to be wearing chain mail armor, decorated with vertical tally marks arranged in rows. A dead and dismembered soldier lies under the horse. The hand of his severed right arm grasps a shattered sword, from which a flower grows.","source":"https://en.wikipedia.org/wiki/Guernica_(Picasso)","artist":{"image":"./assets/guernica/artist.jpg","name":"Pablo Picasso"},"images":{"thumbnail":"./assets/guernica/thumbnail.jpg","hero":{"small":"./assets/guernica/hero-small.jpg","large":"./assets/guernica/hero-large.jpg"},"gallery":"./assets/guernica/gallery.jpg"}},{"key":"penitent-magdalene","name":"Penitent Magdalene","year":1625,"description":"Penitent Magdalene is a painting by the Italian artist Artemisia Gentileschi. It hangs in Seville Cathedral. It has probably been in the cathedral since the late 17th century. The painting\'s first home was the collection of Fernando Enriquez Afan de Ribera, from 1626 to 1637. She returned to the subject later in the 1620s in Mary Magdalene as Melancholy.","source":"https://en.wikipedia.org/wiki/Penitent_Magdalene_(Artemisia_Gentileschi)","artist":{"image":"./assets/penitent-magdalene/artist.jpg","name":"Artemisia Gentileschi"},"images":{"thumbnail":"./assets/penitent-magdalene/thumbnail.jpg","hero":{"small":"./assets/penitent-magdalene/hero-small.jpg","large":"./assets/penitent-magdalene/hero-large.jpg"},"gallery":"./assets/penitent-magdalene/gallery.jpg"}},{"key":"the-storm-on-the-sea-of-galilee","name":"The Storm on the Sea of Galilee","year":1633,"description":"The painting, in vertical format, shows a close-up view of Christ\'s disciples struggling frantically against the heavy storm to regain control of their fishing boat. A huge wave beats the bow and rips the sail. One of the disciples is seen vomiting over the side. Another one, looking directly out at the viewer, is a self-portrait of the artist. Only Christ, depicted on the right, remains calm.","source":"https://en.wikipedia.org/wiki/The_Storm_on_the_Sea_of_Galilee","artist":{"image":"./assets/the-storm-on-the-sea-of-galilee/artist.jpg","name":"Rembrandt"},"images":{"thumbnail":"./assets/the-storm-on-the-sea-of-galilee/thumbnail.jpg","hero":{"small":"./assets/the-storm-on-the-sea-of-galilee/hero-small.jpg","large":"./assets/the-storm-on-the-sea-of-galilee/hero-large.jpg"},"gallery":"./assets/the-storm-on-the-sea-of-galilee/gallery.jpg"}},{"key":"the-sleeping-gypsy","name":"The Sleeping Gypsy","year":1897,"description":"The Sleeping Gypsy (French: La Boh\xe9mienne endormie) is an 1897 oil painting by French Na\xefve artist Henri Rousseau (1844\u20131910). It is a fantastical depiction of a lion musing over a sleeping woman on a moonlit night. Rousseau first exhibited the painting at the 13th Salon des Ind\xe9pendants, and tried unsuccessfully to sell it to the mayor of his hometown, Laval. Instead, it entered the private collection of a Parisian charcoal merchant where it remained until 1924, when it was discovered by the art critic Louis Vauxcelles.","source":"https://en.wikipedia.org/wiki/The_Sleeping_Gypsy","artist":{"image":"./assets/the-sleeping-gypsy/artist.jpg","name":"Henri Rousseau"},"images":{"thumbnail":"./assets/the-sleeping-gypsy/thumbnail.jpg","hero":{"small":"./assets/the-sleeping-gypsy/hero-small.jpg","large":"./assets/the-sleeping-gypsy/hero-large.jpg"},"gallery":"./assets/the-sleeping-gypsy/gallery.jpg"}},{"key":"van-gogh-self-portrait","name":"Van Gogh Self-portrait","year":1889,"description":"This self-portrait was one of about 32 produced over a 10-year period, and these were an important part of his work as a painter; he painted himself because he often lacked the money to pay for models. He took the painting with him to Auvers-sur-Oise, near Paris, where he showed it to Dr. Paul Gachet, who thought it was \\"absolutely fanatical\\". Art historians are divided as to whether this painting or Self-portrait without beard is Van Gogh\'s final self-portrait. The art historians Ingo F. Walther and Jan Hulsker consider this to be the last.","source":"https://en.wikipedia.org/wiki/Van_Gogh_self-portrait_(1889)","artist":{"image":"./assets/van-gogh-self-portrait/artist.jpg","name":"Vincent Van Gogh"},"images":{"thumbnail":"./assets/van-gogh-self-portrait/thumbnail.jpg","hero":{"small":"./assets/van-gogh-self-portrait/hero-small.jpg","large":"./assets/van-gogh-self-portrait/hero-large.jpg"},"gallery":"./assets/van-gogh-self-portrait/gallery.jpg"}},{"key":"the-great-wave-off-kanagawa","name":"The Great Wave off Kanagawa","year":1831,"description":"The Great Wave off Kanagawa (Japanese: \u795e\u5948\u5ddd\u6c96\u6d6a\u88cf, Hepburn: Kanagawa-oki Nami Ura, lit. \\"Under the Wave off Kanagawa\\"), also known as The Great Wave or simply The Wave, is a woodblock print by the Japanese ukiyo-e artist Hokusai. It was published sometime between 1829 and 1833 in the late Edo period as the first print in Hokusai\'s series Thirty-six Views of Mount Fuji. The image depicts an enormous wave threatening three boats off the coast in the Sagami Bay (Kanagawa Prefecture) while Mount Fuji rises in the background.","source":"https://en.wikipedia.org/wiki/The_Great_Wave_off_Kanagawa","artist":{"image":"./assets/the-great-wave-off-kanagawa/artist.jpg","name":"Hokusai"},"images":{"thumbnail":"./assets/the-great-wave-off-kanagawa/thumbnail.jpg","hero":{"small":"./assets/the-great-wave-off-kanagawa/hero-small.jpg","large":"./assets/the-great-wave-off-kanagawa/hero-large.jpg"},"gallery":"./assets/the-great-wave-off-kanagawa/gallery.jpg"}},{"key":"the-basket-of-apples","name":"The Basket of Apples","year":1893,"description":"The Basket of Apples (French: Le panier de pommes) is a still life oil painting by French artist Paul C\xe9zanne, which he created c. 1893. The painting is particularly remarkable for its creative composition, which rejected realistic representation in favour of distorting objects to create multiple perspectives. This approach eventually influenced other art movements, including Fauvism and Cubism. It belongs to the Helen Birch Bartlett Memorial Collection of the Art Institute of Chicago.","source":"https://en.wikipedia.org/wiki/The_Basket_of_Apples","artist":{"image":"./assets/the-basket-of-apples/artist.jpg","name":"Paul C\xe9zanne"},"images":{"thumbnail":"./assets/the-basket-of-apples/thumbnail.jpg","hero":{"small":"./assets/the-basket-of-apples/hero-small.jpg","large":"./assets/the-basket-of-apples/hero-large.jpg"},"gallery":"./assets/the-basket-of-apples/gallery.jpg"}},{"key":"lady-with-an-ermine","name":"Lady with an Ermine","year":1489,"description":"The Lady with an Ermine (Italian: Dama con l\'ermellino [\u02c8da\u02d0ma kon lermel\u02c8li\u02d0no]; Polish: Dama z gronostajem) is a portrait painting widely attributed to the Italian Renaissance artist Leonardo da Vinci. Dated to c.\u20091489\u20131491, the work is painted in oils on a panel of walnut wood. Its subject is Cecilia Gallerani, a mistress of Ludovico Sforza (\\"Il Moro\\"), Duke of Milan; Leonardo was painter to the Sforza court at the time of its execution. It is one of only four surviving portraits of women painted by Leonardo, the others being Ginevra de\' Benci, La Belle Ferronni\xe8re and the Mona Lisa","source":"https://en.wikipedia.org/wiki/Lady_with_an_Ermine","artist":{"image":"./assets/lady-with-an-ermine/artist.jpg","name":"Leonardo da Vinci"},"images":{"thumbnail":"./assets/lady-with-an-ermine/thumbnail.jpg","hero":{"small":"./assets/lady-with-an-ermine/hero-small.jpg","large":"./assets/lady-with-an-ermine/hero-large.jpg"},"gallery":"./assets/lady-with-an-ermine/gallery.jpg"}},{"key":"the-night-cafe","name":"The Night Caf\xe9","year":1888,"description":"The Night Caf\xe9 (French: Le Caf\xe9 de nuit) is an oil painting created by Dutch artist Vincent van Gogh in September 1888 in Arles. Its title is inscribed lower right beneath the signature. The painting is owned by Yale University and is currently held at the Yale University Art Gallery in New Haven, Connecticut. The interior depicted is the Caf\xe9 de la Gare, 30 Place Lamartine, run by Joseph-Michel Ginoux and his wife Marie, who in November 1888 posed for Van Gogh\'s and Gauguin\'s Arl\xe9sienne; a bit later, Joseph Ginoux evidently posed for both artists, too.","source":"https://en.wikipedia.org/wiki/The_Night_Caf%C3%A9","artist":{"image":"./assets/the-night-cafe/artist.jpg","name":"Vincent Van Gogh"},"images":{"thumbnail":"./assets/the-night-cafe/thumbnail.jpg","hero":{"small":"./assets/the-night-cafe/hero-small.jpg","large":"./assets/the-night-cafe/hero-large.jpg"},"gallery":"./assets/the-night-cafe/gallery.jpg"}},{"key":"mona-lisa","name":"Mona Lisa","year":1503,"description":"The Mona Lisa (/\u02ccmo\u028an\u0259 \u02c8li\u02d0s\u0259/; italian: La Gioconda [la d\u0292o\u02c8konda] or Monna Lisa [\u02c8m\u0254nna \u02c8li\u02d0za]) is a half-length portrait painting by Italian artist Leonardo da Vinci. Considered an archetypal masterpiece of the Italian Renaissance, it has been described as \\"the best known, the most visited, the most written about, the most sung about, the most parodied work of art in the world\\". The painting\'s novel qualities include the subject\'s enigmatic expression, the monumentality of the composition, the subtle modelling of forms, and the atmospheric illusionism.","source":"https://en.wikipedia.org/wiki/Mona_Lisa","artist":{"image":"./assets/mona-lisa/artist.jpg","name":"Leonardo da Vinci"},"images":{"thumbnail":"./assets/mona-lisa/thumbnail.jpg","hero":{"small":"./assets/mona-lisa/hero-small.jpg","large":"./assets/mona-lisa/hero-large.jpg"},"gallery":"./assets/mona-lisa/gallery.jpg"}},{"key":"the-swing","name":"The Swing","year":1767,"description":"The painting depicts an elegant young woman on a swing. A smiling young man, hiding in the bushes on the left, watches her from a vantage point that allows him to see up into her billowing dress, where his arm is pointed with hat in hand. A smiling older man, who is nearly hidden in the shadows on the right, propels the swing with a pair of ropes. The older man appears to be unaware of the young man. As the young lady swings high, she throws her left leg up, allowing her dainty shoe to fly through the air.","source":"https://en.wikipedia.org/wiki/The_Swing_(Fragonard)","artist":{"image":"./assets/the-swing/artist.jpg","name":"Jean-Honor\xe9 Fragonard"},"images":{"thumbnail":"./assets/the-swing/thumbnail.jpg","hero":{"small":"./assets/the-swing/hero-small.jpg","large":"./assets/the-swing/hero-large.jpg"},"gallery":"./assets/the-swing/gallery.jpg"}},{"key":"arnolfini-portrait","name":"Arnolfini Portrait","year":1434,"description":"It is considered one of the most original and complex paintings in Western art, because of its beauty, complex iconography, geometric orthogonal perspective, and expansion of the picture space with the use of a mirror. According to Ernst Gombrich \\"in its own way it was as new and revolutionary as Donatello\'s or Masaccio\'s work in Italy. A simple corner of the real world had suddenly been fixed on to a panel as if by magic ... For the first time in history the artist became the perfect eye-witness in the truest sense of the term\\".","source":"https://en.wikipedia.org/wiki/Arnolfini_Portrait","artist":{"image":"./assets/arnolfini-portrait/artist.jpg","name":"Jan van Eyck"},"images":{"thumbnail":"./assets/arnolfini-portrait/thumbnail.jpg","hero":{"small":"./assets/arnolfini-portrait/hero-small.jpg","large":"./assets/arnolfini-portrait/hero-large.jpg"},"gallery":"./assets/arnolfini-portrait/gallery.jpg"}},{"key":"the-boy-in-the-red-vest","name":"The Boy in the Red Vest","year":1889,"description":"C\xe9zanne painted four oil portraits of this Italian boy in the red vest, all in different poses, which allowed him to study the relationship between the figure and space. The most famous of the four, and the one commonly referred to by this title, is the one which depicts the boy in a melancholic seated pose with his elbow on a table and his head cradled in his hand. It is currently held in Z\xfcrich, Switzerland. The other three portraits, of different poses, are in museums in the US","source":"https://en.wikipedia.org/wiki/The_Boy_in_the_Red_Vest","artist":{"image":"./assets/the-boy-in-the-red-vest/artist.jpg","name":"Paul C\xe9zanne"},"images":{"thumbnail":"./assets/the-boy-in-the-red-vest/thumbnail.jpg","hero":{"small":"./assets/the-boy-in-the-red-vest/hero-small.jpg","large":"./assets/the-boy-in-the-red-vest/hero-large.jpg"},"gallery":"./assets/the-boy-in-the-red-vest/gallery.jpg"}}]')},8:function(e,a,t){e.exports={navigation:"Navigation_navigation__2bTQI",navigationButtons:"Navigation_navigationButtons__3VGuq",navigationButtonsLink:"Navigation_navigationButtonsLink__3NpiK",navigationButtonsIcon:"Navigation_navigationButtonsIcon__20lEP",navigationTitle:"Navigation_navigationTitle__2hYMr",navigationName:"Navigation_navigationName__1c-H8",navigationArtist:"Navigation_navigationArtist__PuYDl"}},9:function(e,a,t){e.exports={header:"Header_header__1v0yI",content:"Header_content__3z1OQ",logo:"Header_logo__3T0lc",logoIcon:"Header_logoIcon__2QAVH",slideshow:"Header_slideshow__1Xc_E",slideshowLink:"Header_slideshowLink__rbryr"}}},[[44,1,2]]]);
//# sourceMappingURL=main.0cce74b6.chunk.js.map