![Kasa Icon](/src/assets/footer-logo.png)

## Développez une application Web avec React et React Router - Kasa
### P11 - OpenClassrooms "Développeur Concepteur Logiciel"

#### Contexte du projet

Kasa vous recrute en tant que développeur Front-end en freelance pour développer leur nouvelle plateforme web. Kasa est dans le métier de la location d’appartements entre particuliers depuis près de 10 ans maintenant. Avec plus de 500 annonces postées chaque jour Kasa fait partie des leaders de la location d’appartements entre particuliers en France.

L'occasion parfaite pour vous d'ajouter une belle référence à votre portfolio de freelance !

Le site de Kasa a été codé il y a maintenant plus de 10 ans en ASP.NET avec un code legacy important. Laura, la CTO, a donc lancé une refonte totale pour passer à une stack complète en JavaScript avec NodeJS côté Back-end, et React côté Front-end. Kasa en a également profité pour commander de nouvelles maquettes auprès de son designer habituel, qui est en freelance. Un gros chantier pour cette année !

Un point est prévu avec la CTO plus tard dans la semaine, mais pour que vous puissiez vous familiariser avec les enjeux de votre mission vous trouvez le récapitulatif suivant :

***Ton objectif***

Démarrer le projet React et développer l’ensemble de l’application, les composants React, les routes React Router, en suivant les maquettes (responsives !) et toutes les infos que je te donne ci-dessous. Et ce avec un code de qualité ! 

***Back-end / data***

Le recrutement de la personne en charge du Back-End n'est pas terminé et va prendre plus de temps que prévu. Du coup, il va falloir que tu fasses sans pour le moment. Je t'ai extrait les 20 dernières annonces de logements dans [ce fichier JSON](./public/logements.json) pour que tu puisses construire le Front qui correspond.

***Design***

Voici [les maquettes](./src/assets/Kasa%20maquettes.pdf) pour le design de l'interface. 

Tu trouveras toutes les ressources dont tu as besoin directement dans la maquette (logo, icônes pour les composants, etc.). Sur les vignettes des logements, pour les images de couverture, j'ai mis une rectangle orange que tu peux remplacer par l'image.

> Quelques [**contraintes techniques**](./src/assets/Contraintes%20techniques.pdf) supplémentaires

Ça y est, vous avez toutes les informations nécessaires, vous pouvez démarrer votre développement !

#### Objectifs
- Site web créé sous React 18.2 et React Router 6.4
- Respect des [maquettes fournies](./src/assets/Kasa%20maquettes.pdf)
- Utilisation de composants réutilisables et validation des données grâce aux props React
- Gestion des événements
- Utilisation d'un service et de requêtes GET afin de récupérer les données du fichier [logements.json](./public/logements.json) (une API dans un cas réel)
- Architecture des dossiers et fichiers respectée
- Utilisation de Sass et de la méthodologie BEM
- Responsive

---

### Prerequisites

- You will need to have Node and `npm` installed locally on your machine.

---

## Project setup

### Install
```
npm install
```

### Compiles and hot-reloads for development
Runs the app in the development mode.

Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes. You may also see any lint errors in the console.
```
npm run start
```

### Running tests
Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

```
npm run test
```


### Compiles and minifies for production
```
npm run build
```

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.


### Eject
```
npm run eject
```

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

---

### Preview

![Kasa](/src/assets/Kasa.png)
<br/>
<br/>
<br/>
![Kasa](/src/assets/Kasa%203.png)
<br/>
<br/>
<br/>
![Kasa](/src/assets/Kasa%202.png)