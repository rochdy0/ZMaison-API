
/*Maisons (maisonID, nomMaison, channelName, roleID, channelID)
    (m,n,cn,r,ci) ∈ Maisons ⇐⇒ La maison de nom n identifiée par le numéro m,
    dont le channel Discord est cn d'ID ci et dont le rôle associé est r.
*/
/*Utilisateurs (userID, username, maisonID, arriveDate, themeObjectif, detailObjectif)
    (ui, un, m, ad, o) ∈ Utilisateurs ⇐⇒ L'utilisateur de nom un identifié par ui
    arrivé le ad en intégrant la maison m et qui a pour objectif o. 
*/
/*Evenements (evenementID, evenementType, userID, evenementPoints, evenementDate)
    (ei, et, ui, p, d) ∈ Evenements ⇐⇒ L'évènement identifié par ei du type et
    réalisé par l'utilisateur ui le d rapportant p points*/
-- evenementType peut prendre 4 valeurs
-- 0 pour un entrainement
-- 1 pour une vidéo postée
-- 2 pour un message
-- 3 pour un challenge hebdomadaire
-- 4 pour une pénalité

Contraintes d'intégrité référentielles : 
Maisons[maisonID] ⊆ Utilisateurs[maisonID]
Utilisateurs ⊆ Evenements[userID]

Domaines : 
domaine(arriveDate) = domaine(evenementDate) = date

domaine(nom) = domaine(channelName) = domaine(username) = domaine(themeObjectif)
= domaine(detailObjectif) = chaîne de caractères

domaine(roleID) = domaine(channelID) = domaine(userID) = varchar(25)

domaine(maisonID) = domaine(evenementID) = domaine(evenementType) = domaine(evenementPoints) = Integer

CREATE TABLE Maisons(
    maisonID INT NOT NULL,
    nomMaison varchar(255) NOT NULL,
    channelName varchar(255) NOT NULL,
    roleID varchar(25) NOT NULL,
    channelID varchar(25) NOT NULL,
    CONSTRAINT pk_maison_maisonid PRIMARY KEY (maisonID)
);

CREATE TABLE Utilisateurs(
    userID varchar(25) NOT NULL,
    username varchar(255) NOT NULL,
    maisonID INT NOT NULL,
    arriveDate DATE NOT NULL,
    themeObjectif TEXT,
    detailObjectif TEXT,
    CONSTRAINT pk_utilisateurs_userid PRIMARY KEY (userID),
    CONSTRAINT fk_utilisateurs_maisonid FOREIGN KEY (maisonID) REFERENCES Maisons (maisonID)
);

CREATE TABLE Evenements(
    evenementID INT AUTO_INCREMENT NOT NULL,
    evenementType INT NOT NULL,
    userID varchar(25) NOT NULL,
    points INT NOT NULL,
    evenementDate DATE NOT NULL,
    CONSTRAINT pk_evenements_evenementid PRIMARY KEY (evenementID),
    CONSTRAINT fk_evenements_userid FOREIGN KEY (userID) REFERENCES Utilisateurs(userID),
    CONSTRAINT ck_evenements_evenementtype CHECK (evenementType IN (0,1,2,3,4))
);

-- Insertion des valeurs des trois maisons
INSERT INTO Maisons (maisonID, nomMaison, channelName, roleID, channelID) VALUES (0, 'Les fils de Ragnar', 'fils-de-ragnar', 1021809011277967370, 1021418031898951721);
INSERT INTO Maisons (maisonID, nomMaison, channelName, roleID, channelID) VALUES (1, 'Les héritiers de Guillaume le conquérant', 'héritiers-de-guillaume-le-conquérant', 1021809132707250176, 1021418112156975155);
INSERT INTO Maisons (maisonID, nomMaison, channelName, roleID, channelID) VALUES (2, 'Les disciples d''Attila le Hun', 'disciples-dattila-le-hun', 1021809267113725973, 1021418175293821040);