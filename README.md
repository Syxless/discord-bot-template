# **Discord Bot Template by Syxles**

Ce projet est un modèle de bot Discord.js basé sur des commandes slash. Il est conçu pour être évolutif et inclut la gestion des événements, des commandes et du statut du bot.

---

## **📦 Installation**

1. **Cloner le dépôt** :
```
git clone https://github.com/Syxless/discord-bot-template.git
```


2. **Accéder au répertoire du projet** :
```
cd discord-bot-template
```


3. **Installer les dépendances** :
```
npm install
```

---

## **🔧 Configuration**

1. **Créer un fichier `.env`** dans le dossier principal avec le contenu suivant :
```
TOKEN=VOTRE_TOKEN_ICI
```


Remplacez `VOTRE_TOKEN_ICI` par le token de votre bot Discord.

2. **Activer les intentions dans le portail développeur Discord** :
- Allez sur le [portail développeur Discord](https://discord.com/developers/applications).
- Activez les intentions suivantes :
  - **Presence Intent**
  - **Server Members Intent**
  - **Message Content Intent (si nécessaire)**

---

## **🚀 Lancement du bot**

1. Démarrez le bot avec la commande suivante :
```
npm start
``` 

2. Si tout est configuré correctement, vous verrez :
```
Connecté en tant que [VotreBot#1234] Commandes enregistrées!
```

---

## **📜 Fonctionnalités actuelles**
### **Commandes disponibles :**
- **`/ping`** : Répond avec "Pong!"
- **`/test`** : Répond avec "Test réussi!"

---

## **📚 Structure du projet**
```
/discord-bot-template
  |-- /commands
  |     |-- ping.js              # Commande de test 'ping'
  |     |-- test.js              # Commande de test 'test'
  |
  |-- /events
  |     |-- ready.js             # Gestion du statut et de la connexion du bot
  |     |-- interactionCreate.js # Gestion des commandes slash
  |
  |-- .env                       # Contient le token du bot
  |-- index.js                   # Fichier principal du bot
  |-- package.json               # Dépendances du projet
  |-- README.md                  # Guide d'utilisation du bot
```


---

## **⚙️ Personnalisation**
- **Ajouter des commandes** : Créez de nouveaux fichiers dans le dossier `/commands`.
- **Ajouter des événements** : Ajoutez de nouveaux fichiers dans le dossier `/events`.
- **Modifier le statut** : Mettez à jour le fichier `events/ready.js`.

---

## **🛠 Dépendances utilisées**
- **[discord.js](https://discord.js.org/)** : Gestion de l'API Discord.
- **[dotenv](https://www.npmjs.com/package/dotenv)** : Gestion des variables d'environnement.

---

## **💡 Conseils**
- Assurez-vous que votre bot est invité sur un serveur avec l'URL OAuth2 générée sur le [portail développeur Discord](https://discord.com/developers/applications).
- Surveillez les logs de votre console pour détecter les erreurs potentielles.

---

## **🤝 Contributions**
Les contributions sont les bienvenues ! Créez des pull requests ou ouvrez des issues sur le dépôt GitHub.

---

## **📜 Licence**
Ce projet est sous la licence MIT. Utilisez-le librement pour vos propres bots.
