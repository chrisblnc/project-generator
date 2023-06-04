// récupération de fs
let fs = require('fs');

// récupération du nom du projet
let name = process.argv[2] || false;

// vérification des parametres d'entree
if(!name) {
    console.error('missing project\'s name');
    return false;
}

// récupération des infos package
let package = JSON.parse(fs.readFileSync('package.json', 'utf8'));

// creation de l'arborescence du projet
let createTree = () => {
    let path = './' + name;
    let assets = path + '/assets';
    let src = path + '/src';
    let tests = path + '/tests';

    // creation dossier projet
    fs.mkdir(path, (err)=>{
        if(err) {
            console.error(err.message);
            return false;
        } else {
            // creation dossier assets
            fs.mkdir(assets, (err)=>{
                if(err) {
                    console.error(err.message);
                    return false;
                }
            });
            
            // creation dossier src
            fs.mkdir(src, (err)=>{
                if(err) {
                    console.error(err.message);
                    return false;
                }
            });
            
            // creation dossier tests
            fs.mkdir(tests, (err)=>{
                if(err) {
                    console.error(err.message);
                    return false;
                }
            });
        }
    });

    return true;
}

// affichage divers
console.log('script created by ' + package.author);
console.log('version ' + package.version);

if(createTree()) {
    // quand c'est fini
    console.log('done');
}