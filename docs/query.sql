Referential Integrity Constraint : 
Teams[teamID] ⊆ Users[teamID]
Users[userID] ⊆ Events[userID]

Domains : 
domain(ArrivalDate) = domain(eventDate) = date

domain(name) = domain(channelName) = domain(username) = domain(themeObjectif)
= domain(detailObjectif) = String

domain(roleID) = domain(channelID) = domain(userID) = varchar(25)

domain(maisonID) = domain(evenementID) = domain(evenementType) = domain(evenementPoints) = Integer

CREATE TABLE Team(
    teamId TINYINT NOT NULL,
    teamName varchar(255) NOT NULL,
    teamChannelName varchar(255) NOT NULL,
    teamChannelId UNSIGNED BIGINT NOT NULL,
    teamRoleId UNSIGNED BIGINT NOT NULL,
    CONSTRAINT pk_team_teamid PRIMARY KEY (teamId)
);

CREATE TABLE User(
    userId UNSIGNED BIGINT NOT NULL,
    userName varchar(32) NOT NULL,
    teamId TINYINT NOT NULL,
    userArrivalDate DATE NOT NULL,
    userThemeGoal TEXT,
    userDetailGoal TEXT,
    CONSTRAINT pk_user_userid PRIMARY KEY (userId),
    CONSTRAINT fk_user_teamid FOREIGN KEY (teamId) REFERENCES Team (teamId)
);

CREATE TABLE Event(
    eventId TINYINT AUTO_INCREMENT NOT NULL,
    eventType TINYINT NOT NULL,
    userId UNSIGNED BIGINT NOT NULL,
    eventPoints INT NOT NULL,
    eventtDate DATE NOT NULL,
    CONSTRAINT pk_event_eventid PRIMARY KEY (eventId),
    CONSTRAINT fk_event_userid FOREIGN KEY (userId) REFERENCES User (userId),
    CONSTRAINT ck_event_eventtype CHECK (eventType IN (0,1,2,3,4))
);

-- Insertion des valeurs des trois maisons
INSERT INTO Team (teamId, teamName, teamChannelName, teamRoleId, teamChannelId) VALUES (0, 'Les fils de Ragnar', 'fils-de-ragnar', 1021809011277967370, 1021418031898951721);
INSERT INTO Team (teamId, teamName, teamChannelName, teamRoleId, teamChannelId) VALUES (1, 'Les héritiers de Guillaume le conquérant', 'héritiers-de-guillaume-le-conquérant', 1021809132707250176, 1021418112156975155);
INSERT INTO Team (teamId, teamName, teamChannelName, teamRoleId, teamChannelId) VALUES (2, 'Les disciples d''Attila le Hun', 'disciples-dattila-le-hun', 1021809267113725973, 1021418175293821040);