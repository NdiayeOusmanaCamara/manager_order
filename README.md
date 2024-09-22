## Description de l'Application

Cette application est conçue pour faciliter la gestion des clients, des produits et des commandes au sein d'une entreprise. Elle offre une interface utilisateur intuitive, permettant aux utilisateurs d'effectuer des opérations CRUD (Créer, Lire, Mettre à jour, Supprimer) sur les différentes entités.

## Fonctionnalités Principales :
1. **Gestion des Clients :** Affiche tous les clients dans un tableau avec leurs informations de base.
- **Ajouter un Client** : Lorsque vous cliquez sur le bouton "Ajouter un Client", un formulaire modale s'affiche pour saisir les informations du nouveau client.
- **Modifier un Client** : En cliquant sur le l'icon d'édition dans la liste des clients, une modale s'ouvre avec un formulaire pré-rempli pour mettre à jour les informations du client sélectionné.
- **Détails du Client** : En cliquant sur l'icon oeil , une modale affiche les informations détaillées du client.

2. **Gestion des Produits :**
- **Liste des Produits :** Affiche tous les produits dans un tableau avec leurs caractéristiques principales.
- **Ajouter un Produit :** Le bouton "Ajouter un Produit" ouvre une modale contenant un formulaire pour entrer les détails du nouveau produit.
- **Modifier un Produit :** Cliquez sur l'icon d'édition pour ouvrir une modale avec un formulaire pré-rempli pour la mise à jour du produit sélectionné.
- **Détails du Produit :** L'icon oeil permet d'afficher les informations détaillées sur le produit dans une modale.

3. **Gestion des Commandes :**
- **Liste des Commandes :** Affiche toutes les commandes dans un tableau avec les informations essentielles.
- **Ajouter une Commande :** Le bouton "Ajouter une Commande" déclenche l'ouverture d'une modale contenant un formulaire pour créer une nouvelle commande.
- **Modifier une Commande :** Cliquez sur l'icon d'édition pour ouvrir une modale avec un formulaire pré-rempli pour modifier les détails de la commande sélectionnée.
- **Détails de la Commande :** Une modale affichera les détails complets de la commande lorsque vous cliquez sur l'icon oeil.

## Technologies Utilisées :
L'application utilise les technologies suivantes :

- **Vue.js :** Pour une interface réactive et dynamique.
- **Vue Router :** Pour gérer la navigation entre les différentes vues de l'application.
- **Bootstrap :** Pour des modales élégantes et réactives qui garantissent une expérience utilisateur fluide.
- **Local Storage** pour le stockage des données


## Structure de l'Application

- **Navbar** : Une barre de navigation pour basculer entre les sections "Clients", "Produits" et "Commande".
- **Pages** : 
  - Une page pour gérer les clients.
  - Une page pour gérer les produits.
  - Une page pour gérer les commandes.
  
- **Composants réutilisables** : L'application utilise des composants Vue.js modulaires et réutilisables pour maintenir un code propre et efficace.

## Installation et Lancement

1. **Cloner le repository** :
   ```bash
   git clone https://github.com/NdiayeOusmanaCamara/manager_order.git
   
2. **Naviguer dans le répertoire du projet**:
    ```bash
     cd manager_order
3. **Installer les dépendances**:
   
    ```sh
    npm install
    ```
    
4. **Lancer l'application**:  
  
  ```sh 
  npm run dev
   ```
   
   **Author**
   
  [ N'Diaye Ousmane Camara](https://github.com/NdiayeOusmanaCamara)