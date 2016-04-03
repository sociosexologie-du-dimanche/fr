// Flouter le canvas quand mouseouver sur le corps, déflouter quand en sort
(function(){
    var corps = document.getElementById('corps'),
        canvas = document.getElementById('mycanvas'),
        aurevoir = document.getElementById('aurevoir');
    corps.addEventListener('mouseover',function() { 
        canvas.style.WebkitFilter = 'blur(5px)' ;
        canvas.style.filter = 'blur(5px)' ;
    });
    corps.addEventListener('mouseout',function() { 
        canvas.style.WebkitFilter = 'none' ;
        canvas.style.filter = 'none' ;
    });
})();

// QUIZZ
(function(){
//------------------------------------------------------------
// Création du tableau 'textes'
    var    reponse1V =  "<p> Et bien oui ! La part des individus en France se déclarant <em>non-religieux</em> et ayant déjà eu un rapport sexuel avec quelqu'un du même sexe est de <span class='chiffre'>16%</span>. Il en est de même pour les individus appartenant à <span class='emph'>une religion autre que le catholicisme</span>.<p> Les catholiques quant à eux sont moins tentés par les expériences homosexuelles, mais la différence n'est pas bien significative... <span class='chiffre'>12%</span> des catholiques ont déjà eu une expérience avec quelqu'un du même sexe. C'est à dire seulement <span class='chiffre'>4 points</span> de pourcentage de moins que le reste de la population !</p>",
        reponse1F = "<p> Pas du tout ! On est loin de l'époque où la foi et l'homosexualité sont incompatibles ! La part des individus en France se déclarant <em>non-religieux</em> et ayant déjà eu un rapport sexuel avec quelqu'un du même sexe est de <span class='chiffre'>16%</span>. Il en est de même pour les individus appartenant à <span class='emph'>une religion autre que le catholicisme</span>.<p> Les catholiques quant à eux sont moins tentés par les expériences homosexuelles, mais la différence n'est pas bien significative... <span class='chiffre'>12%</span> des catholiques ont déjà eu une expérience avec quelqu'un du même sexe. C'est à dire seulement <span class='chiffre'>4 points</span> de pourcentage de moins que le reste de la population !</p>",
        reponse2V = "<p> En effet, les répondants religieux sont plus nombreux à <q> n'avoir jamais... </q> que les non-religieux. C'est ainsi que <span class='chiffre'> 21%</span>  des catholiques pratiquants et <span class='chiffre'> 23%</span> des individus d'une autre religion <span class='emph'> n'ont jamais sucé ou léché le sexe de leur partenaire </span>, contre seulement <span class='chiffre'> 11%</span> chez les non-religieux. Les catholiques non-pratiquants quant à eux aiment autant lécher/sucer le sexe de leur partenaire que leurs compatriotes agnostiques.</p><p> Plus que l'appartenance religieuse, c'est donc la pratique de la religion qui est déterminante pour expliquer les pratiques sexuelles des individus. <span class='chiffre'> 63%</span> <span class='emph'>des catholiques pratiquants n'ont jamais pratiqué la sodomie </span> même avec une personne du même sexe contre <span class='chiffre'> 46%</span> <span class='emph'> pour le reste de la population </span> </p>",
        reponse2F = "<p> Si vous êtes un.e P.A.M. et que vous avez répondu ça, alors vous n'êtes pas comme la majorité ! Si non, vous avez juste faux. C'est ainsi que <span class='chiffre'> 21%</span>  des catholiques pratiquants et <span class='chiffre'> 23%</span> des individus d'une autre religion <span class='emph'> n'ont jamais sucé ou léché le sexe de leur partenaire </span>, contre seulement <span class='chiffre'> 11%</span> chez les non-religieux. Les catholiques non-pratiquants quant à eux aiment autant lécher/sucer le sexe de leur partenaire que leurs compatriotes agnostiques.</p><p> Plus que l'appartenance religieuse, c'est donc la pratique de la religion qui est déterminante pour expliquer les pratiques sexuelles des individus. <span class='chiffre'> 63%</span> <span class='emph'>des catholiques pratiquants n'ont jamais pratiqué la sodomie </span> même avec une personne du même sexe contre <span class='chiffre'> 46%</span> <span class='emph'> pour le reste de la population </span> </p>",
        reponse3V = "<p> Effectivement ! Il paraît que les femmes vont plus souvent dans les détails que les hommes lors de leurs conversations entre amis... On entend rarement un homme aller dans le détail à propos de ce qu'il a fait ou pas à sa partenaire la nuit dernière. On entend d'ailleurs encore trop rarement un homme parler de sexe en laissant entendre qu'il était là pour le plaisir de l'autre...</p><p>Mais dans les faits, on constate qu'<span class='emph'>une proportion plus grande d'hommes (49%) que de femmes (36%) <em>suce ou lèche souvent le sexe de son/sa partenaire</em></span>. Inversement, <span class='chiffre'>15%</span> des femmes déclarent ne jamais le faire, contre <em>seulement</em> <span class='chiffre'>11%</span> des hommes. Au fond, c'est plutôt clair, quel que soit le sexe de votre partenaire, les gâteries, c'est bien, mangez-en.</p>",
        reponse3F = "<p> Ah, l'imaginaire collectif et les faits... deux choses radicalement différentes ! Il est vrai que dans une société androcentrée, une conséquence <em>attendue</em> de la domination masculine serait que les gâteries soient plutôt données par les femmes et reçues par les hommes... et bien non, et tant mieux !</p><p>On constate qu'<span class='emph'>une proportion plus grande d'hommes (49%) que de femmes (36%) <em>suce ou lèche souvent le sexe de son/sa partenaire</em></span>. Inversement, <span class='chiffre'>15%</span> des femmes déclarent ne jamais le faire, contre <em>seulement</em> <span class='chiffre'>11%</span> des hommes. Au fond, c'est plutôt clair, quel que soit le sexe de votre partenaire, les gâteries, c'est bien, mangez-en.</p>",
        reponse4F = "<p>Bien tenté, mais non ! Parmi les hommes disposant d'un diplôme supérieur au baccalauréat, <span class='chiffre'>48%</span> déclarent sucer ou lécher souvent le sexe de leur partenaire. Parmi ceux ayant un diplôme inférieur au baccalauréat, ils sont <span class='chiffre'>50%</span> ! Inversement, <span class='chiffre'>13%</span> des premiers déclarent ne jamais le faire, contre <span class='chiffre'>9%</span> pour les seconds. La différence n'est de fait pas énorme, et elle est plus grande chez les femmes.</p><p> Chez les femmes, l'effet du diplôme est inversé. Les diplômées sont plus nombreuses à utiliser leur bouche <span class='emph'>souvent</span> et moins nombreuses à ne le faire <span class='emph'>jamais</span>. Que traduit cet effet opposé entre les hommes et les femmes ? L'éducation contribue à réduire les différences de pratiques sexuelles entre hommes et femmes, comme ça tout le monde profite des talents lingaux de l'autre sexe ! Sur l'infographie ci-dessus, on vous résume toutes ces informations.</p><p class='hidden'> Pour les attentifs qui ont remarqué que la longueur des barres ne correspond pas au pourcentage donné : elle correspond à la proportion relative des répondants entre les deux modalités <em>souvent</em> et <em>jamais</em>, afin de mieux comparer les différentes séries. La somme des pourcentages ne fait pas 100, et c'est normal !</p>",
        reponse4V="<p>C'est bien ça ! Parmi les femmes disposant d'un diplôme supérieur au baccalauréat, <span class='chiffre'>36%</span> déclarent sucer ou lécher souvent le sexe de leur partenaire. Parmi celles ayant un diplôme inférieur au baccalauréat, elles sont <span class='chiffre'>29%</span>. Inversement, <span class='chiffre'>14%</span> des premières déclarent ne jamais le faire, contre <span class='chiffre'>18%</span> pour les secondes. Ces écarts sont plus grands que chez les hommes, environ deux fois plus grands.</p><p> Chez les hommes, l'effet du diplôme est inversé. Les diplômés sont moins nombreux à utiliser leur bouche <span class='emph'>souvent</span> et plus nombreux à ne le faire <span class='emph'>jamais</span>. Que traduit cet effet opposé entre les hommes et les femmes ? L'éducation contribue à réduire les différences de pratiques sexuelles entre hommes et femmes, comme ça tout le monde profite des talents lingaux de l'autre sexe ! Sur l'infographie ci-dessus, on vous résume toutes ces informations.</p><p class='hidden'> Pour les  attentifs qui ont remarqué que la longueur des barres ne correspond pas au pourcentage donné : elle correspond à la proportion relative des répondants entre les deux modalités <em>souvent</em> et <em>jamais</em>, afin de mieux comparer les différentes séries. La somme des pourcentages ne fait pas 100, et c'est normal !</p>",
        reponse5V="<p>Et vous avez... partiellement raison! Il est vrai que <span class='emph'> la pratique de la sodomie est un tout petit peu plus courante chez les gauchos </span> que chez les droitistes: <span class='chiffre'>53%</span> des électeurs PS et 51% des écologistes ont déclaré avoir déjà pratiqué la pénétration anale contre <span class='chiffre'> 50% </span> des électeurs UMP et 49% des électeurs du Modem-UDI. Ces derniers sont également <span class='emph'> les plus frileux en matière d'homosexualité </span>. Ainsi, 10% des électeurs UMP ont déclarés avoir eu une relation homosexuelle, contre 15% des électeurs PS. <\p> Mais c'est en fait aux extrêmes que la fête est plus folle. <span class='emph'> Front de Gauche et Front National </span> gagnent ainsi le prix des plus décoincés avec respectivement <span class='chiffre'> 59% </span> et <span class='chiffre'>57%</span> des électeurs ayant déjà pratiqué la sodomie. C'est à dire en moyenne <span class='chiffre'> 8 points </span> de pourcentage de plus que les électeurs plus modérés! On retrouve d'ailleurs le même schéma en U conçernant <span class='emph'>les expériences sexuelles avec plus de deux personnes en même temps</span>. FN et Front de Gauche sont en tête, avec respectivement <span class='chiffre'>22% et 21%</span> de leurs électeurs ayant déjà donné de l'amour à plusieurs personnes en même temps. En voilà une valeur commune!</p>",
        reponse5F="<p> Attention aux raccourcis ! Il est vrai que <span class='emph'> la pratique de la sodomie est un peu plus courante chez les gauchos </span> que chez les droitistes: <span class='chiffre'>53%</span> des électeurs PS et 51% des écologistes ont déclaré avoir déjà pratiqué la pénétration anale contre <span class='chiffre'> 50% </span> des électeurs UMP et 49% des électeurs du Modem-UDI. Ces derniers sont également <span class='emph'> les plus frileux en matière d'homosexualité </span>. Ainsi, 10% des électeurs UMP ont déclarés avoir eu une relation homosexuelle, contre 15% des électeurs PS. <\p> Mais c'est en fait aux extrêmes que la fête est plus folle. <span class='emph'> Front de Gauche et Front National </span> gagnent ainsi le prix des plus décoincés avec respectivement <span class='chiffre'> 59% </span> et <span class='chiffre'>57%</span> des électeurs ayant déjà pratiqué la sodomie. C'est à dire en moyenne <span class='chiffre'> 8 points </span> de pourcentage de plus que les électeurs plus modérés! On retrouve d'ailleurs le même schéma en U conçernant <span class='emph'>les expériences sexuelles avec plus de deux personnes en même temps</span>. FN et Front de Gauche sont en tête, avec respectivement <span class='chiffre'>22% et 21%</span> de leurs électeurs ayant déjà donné de l'amour à plusieurs personnes en même temps. En voilà une valeur commune!</p>",
        reponse6V="<p> Vive la constance ! En effet, parmi les individus <span class='emph'>peu ou pas satisfaits</span> de leur vie sexuelle, les moins insatisfaits sont les individus déclarant n'avoir eu qu'<span class='emph'>un seul partenaire</span>. Parmi ces amants uniques, <span class='chiffre'>1 sur 4</span> est peu satisfait voire pas satisfait du tout, contre <span class='chiffre'>1 sur 3</span> pour les petits lapins ayant eu entre quatre et cinq partenaires différents !</p><p>On constate de fait qu'à partir de deux partenaires, <span class='emph'>les taux d'insatisfaction sont globalement les mêmes</span>, qu'il y ait eu deux partenaires ou dix-huit ! Comment l'expliquer ? Valeur particulière de la première conquête et complicité extrême de l'unique ? Niveau d'exigence qui augmente avec la diversité ? La réponse est entre vos mains ! <span class='hidden'>vos mains, pas vos jambes...</span></p>",
        reponse6F="<p>Tant pis pour Barney ! Car oui, parmi les individus <span class='emph'>peu ou pas satisfaits</span> de leur vie sexuelle, les moins insatisfaits sont les individus déclarant n'avoir eu qu'<span class='emph'>un seul partenaire</span>. Parmi ces amants uniques, <span class='chiffre'>1 sur 4</span> est peu satisfait voire pas satisfait du tout, contre <span class='chiffre'>1 sur 3</span> pour les petits lapins ayant eu entre quatre et cinq partenaires différents !</p><p>On constate de fait qu'à partir de deux partenaires, <span class='emph'>les taux d'insatisfaction sont globalement les mêmes</span>, qu'il y ait eu deux partenaires ou dix-huit ! Comment l'expliquer ? Valeur particulière de la première conquête et complicité extrême de l'unique ? Niveau d'exigence qui augmente avec la diversité ? La réponse est entre vos mains ! <span class='hidden'>oui vos mains, pas vos jambes</span></p>",
        reponse7F="<p>...c'est le cas de <em>seulement</em> <span class='chiffre'>14%</span> des couples non-cohabitants</p><p>...tandis qu'on en trouve <span class='chiffre'>1 sur 2</span> parmi les couples non cohabitants</p>",
        reponse7V=reponse7F,
        reponse8F="<p>Quel pessimisme ! La proportion de répondants ayant une activité sexuelle modérée mais régulière (environ une fois par semaine) est <span class='emph'>la même quel que soit l'âge</span> : <span class='chiffre'>45%</span> (cliquez sur la légende du graphique). Il reste vrai que les moins de 25 ans sont en tête avec <span class='chiffre'>15%</span> d'entre eux qui s'aiment près d'un jour sur deux. Chez les plus de 65 ans ayant un tel rythme, on passe à... <span class='chiffre'>2%</span>.</p><p>Pas de panique cependant, entre 50 et 65 ans, on compte encore <span class='chiffre'>1 répondant sur 4</span> avec un rythme d'<span class='emph'>au moins deux fois par semaine</span>. Mieux : en cumulant les effectifs, on compte <span class='emph'>plus de la moitié des plus de 65 ans qui ne répondent pas jamais</span>... Bonne nouvelle, donc, on continue à se faire plaisir quand on vieillit, mais avec une touche de modération !</p>",
        reponse8V="<p>C'est beau ! Effectivement, la proportion de répondants ayant une activité sexuelle modérée mais régulière (environ une fois par semaine) est <span class='emph'>la même quel que soit l'âge</span> : <span class='chiffre'>45%</span> (cliquez sur la légende du graphique). En revanche, les moins de 25 ans restent en tête avec <span class='chiffre'>15%</span> d'entre eux qui s'aiment près d'un jour sur deux. Chez les plus de 65 ans ayant un tel rythme, on passe à... <span class='chiffre'>2%</span>.</p><p>Pas de panique cependant, entre 50 et 65 ans, on compte encore <span class='chiffre'>1 répondant sur 4</span> avec un rythme d'<span class='emph'>au moins deux fois par semaine</span>. Mieux : en cumulant les effectifs, on compte <span class='emph'>plus de la moitié des plus de 65 ans qui ne répondent pas jamais</span>... Bonne nouvelle, donc, on continue à se faire plaisir quand on vieillit, mais avec une touche de modération !</p>",
    textes = {
        vrai : [
            reponse1V ,
            reponse2V ,
            reponse3V ,
            reponse4V ,
            reponse5V ,
            reponse6V ,
            reponse7V ,
            reponse8V ,
        ],
        faux : [
            reponse1F ,
            reponse2F ,
            reponse3F , 
            reponse4F ,
            reponse5F ,
            reponse6F ,
            reponse7F ,
            reponse8F ,
    ]},
        scroller = function(){};
    
    
    document.querySelector("#quizz1 .commentaire").innerHTML = reponse1V ;
    document.querySelector("#quizz2 .commentaire").innerHTML = reponse2V ;
    document.querySelector("#quizz3 .commentaire").innerHTML = reponse3V ;
    document.querySelector("#quizz4 .commentaire").innerHTML = reponse4V ;
    document.querySelector("#quizz5 .commentaire").innerHTML = reponse5V ;
    document.querySelector('#quizz6 .commentaire').innerHTML = reponse6V ;
    document.querySelector('#quizz7 .commentaire').innerHTML = reponse7V ;
    document.querySelector('#quizz8 .commentaire').innerHTML = reponse8V ;



//-------------------------------------------------------------
// Début du script        
    var clics = document.querySelectorAll('.fenetreQuestion'),  // Récupération de toutes les fenêtres de question
        Reponse = {                                               // Création d'un prototype contenant la fenêtre mère parente et le clic
        init:function(bloc,result){
            this.fenetre = bloc ;
            this.result = result ;
        }
        },
        reponse = Object.create(Reponse),                       // Création de l'objet réponse
        infogra, comm, question,                               // Création des variables utilisées dans la boucle
        action = function(){
            question.style.WebkitFilter = 'opacity(0%)' ;     // On désaffiche la fenêtre question
            infogra.style.WebkitFilter = 'none' ;            // On enlève le flous sur les infographies
            comm.style.WebkitFilter = 'none' ;
            
            question.style.filter = 'opacity(0%)' ;     // On désaffiche la fenêtre question
            infogra.style.filter = 'none' ;            // On enlève le flous sur les infographies
            comm.style.filter = 'none' ;
            
            question.style.zIndex = '-1' ;  // On passe la fenêtre question derrière pour pas pouvoir cliquer dessus
        },
        comLat = document.getElementById('comLat');

    for (i=0, n=clics.length; i<n; i++) {                       // On 'prépare à l'écoute' toutes les fenêtres de la page
        clics[i].addEventListener('click',function(e){

            if (e.target.className === 'reponseV') {                    // On récupère true si cliqué sur V, false si cliqué sur F
                reponse.init(e.target.parentNode.parentNode,true);      // et un caractère vide si cliqué ailleurs dans la fenêtre
            } else if (e.target.className === 'reponseF') {
                reponse.init(e.target.parentNode.parentNode,false);
            } else {
                reponse.init(e.target.parentNode.parentNode,'erreur');
            }
        
            idFenetre = reponse.fenetre.id ;
        
            if (reponse.result != 'erreur') {                                  // On ne modifie le CSS que si l'utilisateur a répondu
                infogra = document.querySelector("#" + idFenetre + " .infographie") ;   // On enregistre les trois enfants de la fenêtre mère
                question = document.querySelector("#" + idFenetre + " .fenetreQuestion") ;      // On récupère l'élément question
                comm = document.querySelector("#"+ idFenetre + " .commentaire") ;       // On récupère le commentaire de réponse
                noQuestion = idFenetre.charAt(5) - 1;
                (reponse.result) ? comm.innerHTML = textes.vrai[noQuestion]: comm.innerHTML = textes.faux[noQuestion] ; 
                setTimeout(action,200) ;
                
                switch (noQuestion+1) { // On scrolle la page selon le quizz
                    case 2 : 
                        window.scrollBy(0,70) ;
                        break ;
                    case 3 :
                        window.scrollBy(0,190) ;
                        break ;
                    case 4 :
                        window.scrollBy(0,175) ;
                        break ;
                    case 5 :
                        window.scrollBy(0,270) ;
                        break ;
                    case 6 :
                        window.scrollBy(0,340) ;
                        break ;
                    case 7 :
                        comLat.style.filter = 'none' ;
                        comLat.style.WebkitFilter = 'none' ;
                        window.scrollBy(0,300) ;
                        break ;
                    case 8 :
                        window.scrollBy(0,300) ;
                        break ;
                }
            }
        });
    }
})();


// Apparition de la vidéo quand on clique sur le titre pour la section gâteries
(function(){
    var videoPipe = document.createElement('iframe'),
        titreGaterie = document.getElementById('titreGateries'),
        titreSatis = document.getElementById('titreSatis'),
        videoBarney = document.createElement('iframe'),
        pBarney = document.getElementById('pBarney'),
        spanBarney = document.getElementById('spanBarney'),
        compteur = 0,
        compteurBarney = 0,
        compteurMouseOver = 0,
        compteurMouseOver2 = 0,
        toolTip = document.createElement('div'),
        toolTip2 = document.createElement('div'),
        toolTipInsep = document.createElement('div'),
        questionInsep = document.getElementById('spanInsep'),
        affiche = function(video){
            video.style.opacity = '1' ;
        },
        retire = function(bloc,video){
            bloc.removeChild(video);
        };
    videoPipe.setAttribute('id','videoPipe') ;
    videoPipe.width = '420' ;
    videoPipe.height = '315' ;
    videoPipe.src = 'https://www.youtube.com/embed/ZyZBkGETvE8';
    videoPipe.allowFullscreen = false ;
    
    videoBarney.setAttribute('id','videoBarney') ;
    videoBarney.width = '420' ;
    videoBarney.height = '315' ;
    videoBarney.src = 'https://www.youtube.com/embed/NpnG044XzIo';
    videoBarney.allowFullscreen = false ;
    
    toolTip.setAttribute('class','tooltip') ;
    toolTip2.setAttribute('class','tooltip') ;
    toolTipInsep.setAttribute('class','tooltip') ;
    toolTip.innerHTML = "Un bonus se cache </br> derrière le titre..." ;
    toolTip2.innerHTML = "Oui, ce titre est plutôt déprimant..." ;
    toolTipInsep.innerHTML =  "Vous savez, <a href='https://fr.wikipedia.org/wiki/Inséparable' target='_blank'>ces petits perroquets</a> qui passent souvent toute leur vie avec le même partenaire." ;

    titreGaterie.appendChild(toolTip) ;
    titreSatis.appendChild(toolTip2) ;
    spanInsep.parentElement.appendChild(toolTipInsep) ;
    

    titreGaterie.addEventListener('click',function(){
        compteur++ ;
        if (compteur%2===1) {
            titreGaterie.appendChild(videoPipe);
            titreGaterie.style.height = '600px';
            setTimeout(function(){
                affiche(videoPipe) ;
            },200) ;
        } else {
            titreGaterie.style.height = '50px';
            videoPipe.style.opacity = '0' ;
            setTimeout(function(){
                       retire(titreGaterie,videoPipe) ;
            },1000) ;
        };
    });
    
    spanBarney.addEventListener('click',function(){
        compteurBarney++ ;
        if (compteurBarney%2===1) {
            pBarney.appendChild(videoBarney);
            pBarney.style.height = '600px';
            setTimeout(function(){ affiche(videoBarney) },200) ;
        } else {
            pBarney.style.height = '100px';
            videoBarney.style.opacity = '0' ;
            setTimeout(function(){ retire(pBarney,videoBarney) },1000) ;
        };
    });
    // Création d'un tooltip !
    titreGaterie.firstElementChild.firstElementChild.addEventListener('mouseover',function(){
        compteurMouseOver++ ;
        if (compteurMouseOver === 1 ) { toolTip.style.opacity = '1' } ;
    }) ;
    titreGaterie.firstElementChild.firstElementChild.addEventListener('mouseout',function(){
        toolTip.style.opacity = '0' ;
    }) ;
    titreSatis.firstElementChild.firstElementChild.addEventListener('mouseover',function(){
        compteurMouseOver2++ ;
        if (compteurMouseOver2 === 1 ) { toolTip2.style.opacity = '1' } ;
    }) ;
    titreSatis.firstElementChild.firstElementChild.addEventListener('mouseout',function(){
        toolTip2.style.opacity = '0' ;
    }) ;
    questionInsep.addEventListener('mouseover',function(){
        toolTipInsep.style.opacity = '1' ;
    }) ;
    questionInsep.addEventListener('mouseout',function(){
        setTimeout(function(){
            toolTipInsep.style.opacity = '0' ;
        },3000);
    }) ;
})() ;

// Apparition de la liste de liens quand on clique sur le paragraphe Pam
(function(){
    var Pam = document.getElementById('listePam'),
        pPam = Pam.firstElementChild,
        motLien = document.getElementById('lienArticles'),
        liens = document.getElementById('liensPam'),
        compteur = 0,
        hauteurPetit = pPam.clientHeight.toString(),
        hauteurGrand = Pam.clientHeight.toString(),
        affiche = function(){
            liens.style.display = 'block' ;
        },
        retire = function(){
            liens.style.display = 'none' ;
        } ;
    Pam.style.height = hauteurPetit ;
    liens.style.display = 'none' ;
    motLien.addEventListener('click',function(){
        compteur ++ ;
        console.log(compteur) ;
        if (compteur%2 === 1) {
            Pam.style.height = '800px' ;
            setTimeout(affiche,100) ;
        } else {            
            Pam.style.height = '80px' ;
            setTimeout(retire,100) ;
        };
    });
})();

// Tooltip pour liste des films et sources
(function(){
    var toolTip = document.getElementById('toolFilms'),
        toolIfop = document.getElementById('toolIfop'),
        toolContact = document.getElementById('toolContact'),
        toolAurevoir = document.getElementById('toolAurevoir'),
        fenetreBlur = document.getElementById('fenetreBlur'),
        texte = "<p>Toutes les images en arrière-plan </br>sont des captures d'écran </br>des (bons) films suivants, donnés par ordre d'apparition :</p>",
        texteIfop = "<p>Les données utilisées pour réaliser ce site ont été récupérées auprès de l'<a href='http://www.ifop.com/?option=com_homepage' target='_blank'>Ifop</a>. Elles ont été recueillies lors d'une enquête menée à la demande du journal <a href='http://www.marianne.net/Cette-semaine-dans-Marianne-Les-Francais-la-politique-et-le-sexe_a238936.html' target='_blank'>Marianne</a>, dans le but d'étudier les relations entre sexualité et positionnement politique. Nous remercions l'Ifop d'avoir gracieusement mis à notre disposition les résultats de cette enquête.</p><p> Les graphiques interactifs ont été réalisés avec <a href='http://www.highcharts.com' target='_blank'>Highcharts</a>.</p>",
        texteContact = "<p>Ce site a été réalisé dans le cadre du cours de visualisation de données de l'<a href='http://www.ensae.fr' target='_blank'>Ensae ParisTech</a>. Vous pouvez nous contacter en utilisant les liens suivants, ou <a href='mailto:sociosexologuesdudimanche@ntymail.com?Subject=A%20propos%20de%20votre%20site%20de%20dataviz'>écrire à toute l'équipe en même temps !</a></p>",
        texteAurevoir = "<p>Nous remercions nos plus curieux lecteurs qui sont parvenus en bas de page (et ont eu l'idée de cliquer sur la petite croix) de leur attention. Nous remercions (encore) également l'Ifop pour la mise à disposition de ces précieuses données agrégées. Malgré tout notre sérieux travail, les résultats présentés ici ne permettent en aucun cas de tirer des liens de causalité... Non, ce n'est pas parce que vous n'avez eu qu'une relation sexuelle que vous êtes le plus satisfait dans votre cercle d'amis. Nous espérons cependant vous avoir surpris, distrait et pourquoi pas instruit !</p><p>Vous pourrez désormais clouer le bec à votre copine Odile qui essaye de vous en mettre plein la vue avec son nombre de partenaires sexuels qui dépasse la trentaine : de toute façon, c'est pas le nombre qui compte !</p><p>Il vous sera également possible de justifier vos appartenances politiques pas toujours bien vues par l'ouverture sexuelle de leurs adhérents. Ah non ! Ca, ce serait tirer de mauvaises conclusions des chiffres...</p><p>Et si vous voulez être adorable, partagez cette page avec vos amis, vos parents, vos grands-parents, vos collègues, avec Aurélie Phillipeti ou Emma Watson... ca nous fera une bonne note !</p>",
        films = [ {
                nom : 'La mala educacion',
                lien : 'http://www.imdb.com/title/tt0275491/'
            },{
                nom : 'Priest',
                lien : 'http://www.imdb.com/title/tt0110889/' ,
            },{
                nom :'Blue Valentine',
                lien : 'http://www.imdb.com/title/tt1120985/' ,
            },{
                nom :'Titanic',
                lien : 'http://www.imdb.com/title/tt0120338/',
            },{
                nom:'American History X',
                lien: 'http://www.imdb.com/title/tt0120586/',
            },{
                nom :'Eyes Wide Shut',
                lien : 'http://www.imdb.com/title/tt0120663/' ,
            },{
                nom :'Vicky Cristina Barcelona',
                lien : 'http://www.imdb.com/title/tt0497465/' ,
            },{
                nom: 'Harold and Maude',
                lien : 'http://www.imdb.com/title/tt0067185/',
            }
        ],
        contacts = [ {
                nom : 'Celle qui a les bonnes idées',
                lien : 'https://www.linkedin.com/in/marie-beigelman-955a8397'
            },{
                nom : 'Celui qui était ultramotivé depuis le début',
                lien : 'https://www.linkedin.com/in/ptanneau' ,
            },{
                nom : "Celle dont la maman parle très bien anglais",
                lien : 'https://fr.linkedin.com/in/kim-montalibet-1a01a265' ,
            },{
                nom :'Celui qui aime bien coder la nuit',
                lien : 'https://fr.linkedin.com/in/romaindamian' ,
            }
        ],
        filmList = document.getElementById('filmList'),
        sourceDonnees = document.getElementById('sourceDonnees'),
        auteurs = document.getElementById('auteurs'),
        goodbye = document.getElementById('buttonGoodbye'),
        x = 0,
        y = 0,
        a = 0,
        b = 0,
        blurer = function(e){
            x = Math.random()*60;
            y = Math.random()*20;
            a = Math.random()*30;
            b = Math.random()*70;
            if (e.target === filmList) {
                toolTip.style.top = y+'%' ;
                toolTip.style.left = x+'%' ;
                toolTip.style.opacity = '1' ;
                toolTip.style.zIndex = '7' ;
            } else if (e.target === sourceDonnees) {
                toolIfop.style.top = a+'%' ;
                toolIfop.style.left = b+'%' ;
                toolIfop.style.opacity = '1' ;
                toolIfop.style.zIndex = '7' ;
            } else if (e.target === auteurs){
                toolContact.style.top = a+'%' ;
                toolContact.style.left = b+'%' ;
                toolContact.style.opacity = '1' ;
                toolContact.style.zIndex = '7' ;
            } else {
                toolAurevoir.style.opacity = '1' ;
                toolAurevoir.style.zIndex= '7' ;
            }
            fenetreBlur.style.opacity = '1' ;
            fenetreBlur.style.zIndex = '6' ;
        },
        cleaner = function(e){
            a = Math.random()*100;
            b = Math.random()*100;
            toolTip.style.top = a+'%' ;
            toolTip.style.left = b+'' ;
            toolTip.style.opacity = '0' ;
            toolTip.style.zIndex = '-1' ;
            
            toolIfop.style.top = a+'%' ;
            toolIfop.style.left = b+'' ;
            toolIfop.style.opacity = '0' ;
            toolIfop.style.zIndex = '-1' ;
            
            toolContact.style.top = a+'%' ;
            toolContact.style.left = b+'' ;
            toolContact.style.opacity = '0' ;
            toolContact.style.zIndex = '-1' ;
            
            toolAurevoir.style.opacity = '0' ;
            toolAurevoir.style.zIndex = '-1' ;
            
            fenetreBlur.style.opacity = '0' ;
            fenetreBlur.style.zIndex = '-1' ;
        };
    
    for (i = 0,n=films.length;i<n;i++){
        texte = texte + "<p><a href=" + films[i].lien + " target='_blank'>"+films[i].nom+"</a></p>" ;
    };
    for (i = 0,n=contacts.length;i<n;i++){
        texteContact = texteContact + "<p><a href=" + contacts[i].lien + " target='_blank'>"+contacts[i].nom+"</a></p>"
    }
    texte = texte + "<p> Le code javascript à l'origine des spermatozoïdes baladeurs est disponible <a href='http://paperjs.org/examples/tadpoles/' target='_blank'>ici</a>.</p>" ;
    toolTip.innerHTML = texte ;
    toolIfop.innerHTML = texteIfop ;
    toolContact.innerHTML = texteContact ;
    toolAurevoir.innerHTML = texteAurevoir ;
    filmList.addEventListener('click',function(e) {
        blurer(e) ;
    });
    sourceDonnees.addEventListener('click',function(e){
        blurer(e) ;
    });
    auteurs.addEventListener('click',function(e) {
        blurer(e) ;
    });
    goodbye.addEventListener('click',function(e) {
       blurer(e) ; 
    });
    fenetreBlur.addEventListener('click',function(e){
        cleaner(e) ;
    });
 })();

//ScrollTO
$(document).ready(function() {
				$('.scrollTo').click( function() { // Au clic sur un élément
					var page = $(this).attr('href'); // Page cible
					var speed = 900; // Durée de l'animation (en ms)
					$('html, body').animate( { scrollTop: $(page).offset().top }, speed ); // Go
					return false;
				});
			});

// Infographie cathos
(function(){
    // test 

var imagesCathos = document.getElementById('imagesCathos'),     // Récupération des div contenant les iamges
    imagesAthees = document.getElementById('imagesAthees'),
    chiffre = document.getElementById('chiffreInfoCathos'),     // Récupération de la div contenant les chiffres
    // Remplissage variables de texte contenant les chiffres
    texteDepart = "Survolez les <a href='https://youtu.be/dExlgiBADhI' target='_blank' class='lienCache'>petits bonhommes</a> pour voir les chiffres !",
    texteCathoOui = "Cathos ayant eu une expérience homo : <span class='chiffre'>12%</span>" ,
    texteCathoNon = "Cathos n'ayant pas eu une d'expérience homo : <span class='emph'>88%</span>",
    texteAtheeOui = "Non-religieux ayant eu une expérience homo : <span class='chiffre'>16%</span>" ,
    texteAtheeNon = "Non-religieux n'ayant pas eu une d'expérience homo : <span class='emph'>84%</span>",
    // HTML à insérer dans les div span pour avoir l'image
    cathoOui = "<img src='Images/cathoOui.png'/>" ,
    cathoNon = "<img src='Images/cathoNon.png'/>",
    atheeOui = "<img src='Images/atheeOui.png'/>" ,
    atheeNon = "<img src='Images/atheeNon.png'/>";
    
var petitBloc , autreReligion ; // Variables utilisées dans la boucle initialisées ici

// On va faire la même chose pour les deux lignes de bonhommes, donc on fait une fonction
var alignerImages = function (religion,imageOui,imageNon,nombreOui) {
    
    // Les deux boucles for ajoutent en ligne les images en utilisant des span
    for (i=0;i<nombreOui;i++) {
        petitBloc = document.createElement('span') ;
        petitBloc.setAttribute('id','span'+i) ;
        petitBloc.setAttribute('class','oui') ;
        religion.appendChild(petitBloc) ;
        petitBloc.innerHTML = imageOui ;
    }

    for (i=0;i<20-nombreOui;i++) {
        petitBloc = document.createElement('span') ;
        petitBloc.setAttribute('id','span'+i) ;
        petitBloc.setAttribute('class','non') ;
        religion.appendChild(petitBloc) ;
        petitBloc.innerHTML = imageNon ;
    }

    // Réaction des bonhommes lors du survol de la souris
    religion.addEventListener('mouseover', function(e){
        
        // On enregistre quelle religion/non-religion est survolée
        reliSur = e.target.parentElement.parentElement ;
        (reliSur.id === 'imagesCathos') ? autreReligion = imagesAthees : autreReligion = imagesCathos ;
        
        // selon que c'est les images oui ou non qui sont survolées, on opacifie les autres et on affiche la bonne réponse
        if (e.target.parentElement.className === 'oui') {
            nons = document.querySelectorAll('#' + reliSur.id + ' .non') ;
            for (j=0,n=nons.length;j<n;j++){
                nons[j].style.opacity = '0.5' ;
            }
            (reliSur.id === 'imagesCathos') ? chiffre.innerHTML = texteCathoOui : chiffre.innerHTML = texteAtheeOui ;
        } else if (e.target.parentElement.className === 'non') {
            ouis = document.querySelectorAll('#'+ reliSur.id + ' .oui') ;
            for (j=0,n=ouis.length;j<n;j++){
                ouis[j].style.opacity = '0.5' ;
            }
            (reliSur.id === 'imagesCathos') ? chiffre.innerHTML = texteCathoNon : chiffre.innerHTML = texteAtheeNon ;
        }
        
        // on opacifie également l'autre ligne d'images pour plus de lisibilité ;
        autreReligion.style.opacity = '0.5' ;
    });

    // lorsque la souris sort des images, tout redevient normal et on raffiche le texte de départ
    religion.addEventListener('mouseout', function(e){
        nons = document.querySelectorAll('.non') ;
        ouis = document.querySelectorAll('.oui') ;
        for (j=0,n=ouis.length;j<n;j++){
            ouis[j].style.opacity = '1' ;
        }
        for (j=0,n=nons.length;j<n;j++){
            nons[j].style.opacity = '1' ;
        }
        chiffre.innerHTML = texteDepart ;
        imagesCathos.style.opacity = '1' ;
        imagesAthees.style.opacity = '1' ;
    });
}

chiffre.innerHTML = texteDepart ; // remplissage par le texte de départ à l'ouverture de la page

alignerImages(imagesCathos,cathoOui,cathoNon,3) ;
alignerImages(imagesAthees,atheeOui,atheeNon,4) ;
})();

// Couple
    $(function() {
  $('#couple').highcharts({
    chart: {
        type: 'bar',
        backgroundColor : null
    },
    colors: ['#CBA148', '#107671', '#004C59'],
    title: {
      text: 'Stacked bar chart'
    },
    xAxis: {
      categories: ['En couple cohabitant', 'En couple non cohabitant', 'Célibataire ayant déjà été en couple', 'Célibataire n\'ayant jamais été en couple']
    },
    yAxis: {
      min: 0,
      title: {
        text: 'Pourcentage (%)'
      }
    },
    tooltip: {
      valueSuffix: '%'
    },
    legend: {
      reversed: true
    },
    plotOptions: {
      series: {
        stacking: 'normal'
      }
    },
    series: [{
      name: 'Pas du tout satisfait',
      data: [5, 3, 19, 16]

    }, {
      name: 'Peu satisfait',
      data: [16, 11, 29, 29]
    }]
  });
});

// Gauge
(function(){
    
var legend1 = "<span style='font-weight:100'>Un peu</span>",
    legend2 = "<span style='font-weight:100'>Beaucoup</span>",
    legend3 = "<span style='font-weight:100'>Pas du <br/>tout</span>";




$(function () {
    
    if (!Highcharts.theme) {
        Highcharts.setOptions({
            chart: {
                backgroundColor: 'none'
            },
            colors: ['#CBA148', '#0092B9', '#107671']
        });
    }
    // 

    Highcharts.chart('gauge', {

        chart: {
            type: 'solidgauge',
            marginTop: 0
        },

        title: {
            text: '',
        },

        tooltip: {
            borderWidth : 0,
            backgroundColor: 'none',
            shadow: false,
            style: {
                fontSize: '15px',
                fontFamily: 'Gill Sans'
            },
            pointFormat: '{series.name}<br><span style="font-size:2em; color: {point.color}; font-weight: bold">{point.y}%</span>',
            positioner: function (labelWidth, labelHeight) {
                return {
                    x: 200 - labelWidth / 2,
                    y: 150
                };
            }
        },

        pane: {
            startAngle: 0,
            endAngle: 360,
            background: [{ // Track for 'un peu H'
                outerRadius: '112%',
                innerRadius: '100%',
                backgroundColor: Highcharts.Color(Highcharts.getOptions().colors[0]).setOpacity(0.3).get(),            
                borderWidth:0,


            }, { // Track for 'un peu F'
                outerRadius: '100%',
                innerRadius: '88%',
                backgroundColor: Highcharts.Color(Highcharts.getOptions().colors[0]).setOpacity(0.3).get(),
                 borderWidth:0,


            }, { // Track for Beaucoup H
                outerRadius: '87%',
                innerRadius: '75%',
                backgroundColor: Highcharts.Color(Highcharts.getOptions().colors[1]).setOpacity(0.3).get(),
								borderWidth:0,


            }, { // Track for Beaucoup F
                outerRadius: '75%',
                innerRadius: '63%',
                backgroundColor: Highcharts.Color(Highcharts.getOptions().colors[1]).setOpacity(0.3).get(),
                borderWidth: 0
            }, { // Track for Pas du tout H
                outerRadius: '62%',
                innerRadius: '50%',
                backgroundColor: Highcharts.Color(Highcharts.getOptions().colors[2]).setOpacity(0.3).get(),
                borderWidth: 0
            }, { // Track for Pas du tou F
                outerRadius: '50%',
                innerRadius: '38%',
                backgroundColor: Highcharts.Color(Highcharts.getOptions().colors[2]).setOpacity(0.3).get(),
                borderWidth: 0
            }]
        },

        yAxis: {
            min: 0,
            max: 60,
            lineWidth: 0,
            tickPositions: []
        },

        plotOptions: {
            solidgauge: {
                borderWidth: 17,
                dataLabels: {
                    enabled: false
                },
                linecap : 'round',
                stickyTracking: false
            }
        },

        series: [{
            name: '(hommes) <br/><b>Un peu :</b>',
            borderColor:Highcharts.getOptions().colors[0],
            data: [{
                color: Highcharts.getOptions().colors[0],
                radius: '106%',
                innerRadius: '106%',
                y: 40
            }]
        }, {
            name: '(femmes) <br/><b>Un peu :</b>',
            borderColor:Highcharts.getOptions().colors[0],
            data: [{
                color: Highcharts.getOptions().colors[0],
                radius: '94%',
                innerRadius: '94%',
                y: 51
            }]
        } , {
            name: '(hommes) <br/><b>Beaucoup :</b>',
            borderColor:Highcharts.getOptions().colors[1],
            data: [{
                color: Highcharts.getOptions().colors[1],
                radius: '81%',
                innerRadius: '81%',
                y: 49
            }]
        }, {
            name: '(femmes) <br/><b>Beaucoup :</b>',
            borderColor:Highcharts.getOptions().colors[1],
            data: [{
                color: Highcharts.getOptions().colors[1],
                radius: '69%',
                innerRadius: '69%',
                y: 36
            }]
        } , {
            name: '(hommes) <br/><b>Pas du tout :</b>',
            borderColor:Highcharts.getOptions().colors[2],
						data: [{
                color: Highcharts.getOptions().colors[2],
                radius: '56%',
                innerRadius: '56%',
                y: 11
            }]
        }, {
            name: '(femmes) <br/><b>Pas du tout :</b>',
            borderColor:Highcharts.getOptions().colors[2],
						data: [{
                color: Highcharts.getOptions().colors[2],
                radius: '44%',
                innerRadius: '44%',
                y: 15
            }]
        }]
    },

    /**
     * In the chart load callback, add icons on top of the circular shapes
     */
    function callback() {

        // Move icon
        this.renderer.text(legend1, -55, 5)
            .attr({
                'stroke': '#303030',
                'stroke-linecap': 'round',
                'stroke-linejoin': 'round',
                'stroke-width': 0,
                'zIndex': 10
            })
            .translate(190, 26)
            .add(this.series[2].group);

        // Exercise icon
        this.renderer.text(legend2, -65, 10)
            .attr({
                'stroke': '#303030',
                'stroke-linecap': 'round',
                'stroke-linejoin': 'round',
                'stroke-width': 0,
                'zIndex': 10
            })
            .translate(190, 61)
            .add(this.series[2].group);

        // Stand icon
        this.renderer.text(legend3,-50,5)
            .attr({
                'stroke': '#303030',
                'stroke-linecap': 'round',
                'stroke-linejoin': 'round',
                'stroke-width': 0,
                'zIndex': 10
            })
            .translate(190, 96)
            .add(this.series[2].group);
    });


});

})();

// Highcharts1
(function(){
    $(function () {
    $('#highchart1').highcharts({
        data: {
            columns: [
                [null, 'Non-religieux', 'Cathloiques non pratiquants', 'Autres religions','Catholiques pratiquants'], // categories
                ["N'ont jamais sucé ou léché le sexe de leur partenaire", 11, 12, 21,23], // first series
                ["N'ont jamais sodomisé leur partenaire", 45, 47, 45,63] // second series
            ]
        },
        colors : ['#0092B9','#004C59'],
        chart: {
            type: 'column',
            backgroundColor : null
        },
        title: {
            text: ''
        },
        yAxis: {
            allowDecimals: false,
            title :'',
        },
        tooltip: {
            formatter: function () {
                return '<b>' + this.series.name + ' :</b><br/>' +
                    this.point.y + '% parmi les ' + this.point.name.toLowerCase();
            }
        },

    });
});
})();

// Nombre
(function(){
    $(function () {
    $('#nombre').highcharts({
        chart: {
            type: 'bar',
            backgroundColor : null
        },
             		colors: ['#004C59','#107671'],

        title: {
            text: ''
        },
        xAxis: {
            categories: ['1','Entre 2 et 3','Entre 4 et 5','Entre 6 et10','Plus de 10']
        },
        yAxis: {
            min: 0,
            title: {
                text: 'Pourcentage (%)'
            }
        },
        tooltip: {
            valueSuffix: '%'
            },
        legend: {
            reversed: true
        },
        plotOptions: {
            series: {
                stacking: 'normal'
            }
        },
        series: [ {
            name: 'Pas du tout satisfait',
            data: [7,10,9,9,9]
     
        },
        {
            name: 'Peu satisfait',
            data: [18,18,21,20,20]
        }]
    });
});
})();

//Polsodo
    $(function () {
    $('#polsodo').highcharts({ 
        chart : {
            backgroundColor : null
        },
        colors: ['#CBA148', '#107671', '#004C59'],
        title: {
            text: '',
            x: -20 //center
        },
       
        xAxis: {
            categories: ['Front de Gauche', 'PS','Europe Ecologie les Verts','Modem-UDI','UMP','Front National']
        },
        yAxis: {
            title: {
                text: 'Pourcentage (%)'
            },
             tooltip: {
            formatter: function () {
                return '<b>' + this.series.name + ' :</b><br/>' +
                    this.point.y + '% parmi les ' + this.point.name.toLowerCase();
            }
        },
        
            plotLines: [{
                value: 0,
                width: 1,
                color: '#808080'
            }]
        },
        tooltip: {
            valueSuffix: '%'
        },
        legend: {
            layout: 'vertical',
            align: 'center',
            verticalAlign: 'bottom',
            borderWidth: 0
        },
        series: [{
            name: 'Ont déjà eu une relation sexuelle avec plus de deux personnes en même temps',
            data: [22, 17, 16, 13, 14, 21],
            visible : false
        }, {
            name: 'Ont déjà eu une relation homosexuelle',
            data: [16, 15, 18, 11, 10, 15],
            visible : false
        }, {
            name: 'Ont déjà pratiqué la pénétration anale',
            data: [55, 53, 51, 49, 50, 57]
            
        }]
        
        
    });
});


// Treemap
    $(function () {
    $('#treemap').highcharts({
    		chart : {
        	   type : 'treemap',
                backgroundColor : null
            },
    		plotOptions : {
        	treemap : {
							allowDrillToNode : true,
              interactByLeaf : true,
              layoutAlgorithm : 'stripes',
              tooltip : {
              	pointFormat : '<b>{point.name}</b>'
              }
            }
        },
        series: [{
        	levels: [{
                level: 1,
                layoutAlgorithm : 'stripes',
                layoutStartingDirection : 'horizontal',
                borderWidth : 5,
                dataLabels: {
                align : 'left',
                    enabled: true,
                    style: {
                        fontSize: '15px',
                        fontWeight: 'bold',
                        color : '#FFFFFF'
                    }
                }
            },{
            		level : 2,
                layoutStartingDirection : 'horizontal',
                dataLabels :{
                align : 'left',
                	enabled : true,
                  style : {
                  	fontSize : '13px'
                   },
                  color : '#FFFFFF'
                }
            },{
            		level : 3,
                layoutStartingDirection : "vertical",
                dataLabels : {
                	enabled : true,
									color : 'rgb(230,230,230)',
                  verticalAlign : 'bottom',
                  align : 'right'
                }
            }],
            data: [{
                id: 'D',
                name: 'Supérieur au bac',
            }, {
                id: 'R',
                name: 'Inférieur au bac',
            },{
            		id: 'DH',
                name: 'Hommes',
                parent : 'D'
            }, {
            		id: 'DF',
                name: 'Femmes',
                parent : 'D'
            },{
                name: 'Souvent : 48%',
                parent: 'DH',
                color : '#107671',
                value: 78.7,
                  dataLabels :{
                format : "Souvent"
                }
            },{
            		name : 'Jamais : 13%',
                parent: 'DH',
                color : '#004C59',
                value : 21.3,
                dataLabels : {
                format : "Jamais"
                }
            },{
            		name : 'Souvent : 36%',
                parent: 'DF',
                color : '#CBA148',
                value : 72,
                  dataLabels :{
                format : "Souvent"
                }
            },{
            		name : 'Jamais : 14%',
                parent : 'DF',
                color : '#B67823',
                value : 28,
                dataLabels : {
                format : "Jamais"
                }
            },{
            		id: 'RH',
                name: 'Hommes',
                parent : 'R',
            }, {
                id: 'RF',
                name: 'Femmes',
                parent : 'R',
            },{
                name: 'Souvent : 50%',
                parent: 'RH',
  							color: '#107671',
                value: 84.7,
                  dataLabels :{
                format : "Souvent"
                }
            },{
            		name : 'Jamais : 9%',
                parent: 'RH',   
                color : '#004C59',
                value : 15.3,
                dataLabels : {
                format : "Jamais"
                }
            },{
            		name : 'Souvent : 29%',
                parent: 'RF',
                value : 61.7,
                color : '#CBA148',
                dataLabels :{
                format : "Souvent"
                }
            },{
            		name : 'Jamais : 18%',
                parent : 'RF',
                value : 38.3,
                color : '#B67823',
                dataLabels : {
                format : "Jamais"
                }
            }],

        }],
        title: {
            text: ''
        }
    });
});

// vieillir
    $(function () {
    $('#vieillir').highcharts({
        chart: {
            type: 'area',
            backgroundColor : null
        },
        colors:['rgba(248,215,201,1)','rgba(0,146,185,0.3)','rgba(203,161,72,0.5)'],
        legend : {
        	width : 50,
        },
        title: {
            text: ''
        },
        xAxis: {
            categories: ['Moins de 35 ans','Entre 35 et 50 ans','Plus de 50 ans']
        },
        yAxis: {
            title: {
                text: "Part de la génération d'âge"
            },
            floor : 20
        },
        tooltip: {
            pointFormat: '{series.name} : <b>{point.y}%</b><br/>'
        },
        plotOptions: {
            area: {
                marker: {
                    enabled: false,
                    symbol: 'circle',
                    radius: 2,
                    states: {
                        hover: {
                            enabled: true
                        }
                    }
                }
            }
        },
        series: [{
            name: 'Au moins deux fois par semaine',
            data: [33,31,21]
        },{
            name: 'Environ une fois par semaine',
            data: [46,46,46],
            visible : false
        },{
            name: 'Jamais',
            data: [21,23,33]
        }]
    });
});