# Bienvenue sur le ReadMe du compostant React "marvi-modale"

> [!NOTE]
> La page du composant sur NPM est disponible ici: \
> https://www.npmjs.com/package/marvi-modale

> [!NOTE]
> Le repo github est disponible ici: \
> https://github.com/Marvinviverge/npm-modale


# Procédure d'installation et d'utilisation du module:

> [!IMPORTANT]
> Installer le module avec npm:

**npm i marvi-modale**


> [!IMPORTANT]
> Importez le composant dans votre projet:

**import { Modale } from 'marvi-modale'**


> [!TIP]
> Exemple d'utilisation du composant:

```
<Modale 
isOpen={isModalOpen} 
buttonFunction={closeModale} 
messageButton='Fermer' 
messageModale='Employee created !' 
/>
```


> [!TIP]
> Vous pouvez ensuite styliser votre composant comme vous le désirez, par exemple:
```
.modale {
    padding-top: 40px;
    height: 30%;
    position: absolute;
    top: 25%;
    left: 25%;
}
```
