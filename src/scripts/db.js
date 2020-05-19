
require("materialize-css/dist/js/materialize")
const idb = require("./idb");

const dbx = idb.open('weltster_db', 1, upgradeDb => {
    switch (upgradeDb.oldVersion) {
      case 0:
        upgradeDb.createObjectStore('teams', { 'keyPath': 'id' })
    }

});

const getFavoriteTeam = () => {
    return dbx.then(db => {
        var tx = db.transaction('teams', 'readonly');
        var store = tx.objectStore('teams');
        return store.getAll();
    });
}

const addFavoriteTeam = (team) => {
    dbx.then(db => {
        var tx = db.transaction('teams', 'readwrite');
        var store = tx.objectStore('teams')
        team.createdAt = new Date().getTime()
        store.put(team);
        return tx.complete;
    }).then(() => {
        M.toast({ html: `${team.name} saved to favorite!` })
    }).catch(err => {
        console.error('Error Store to DB ', err);
    });
}
  
const delFavoriteTeam = (teamId) => {
    dbx.then(db => {
        var tx = db.transaction('teams', 'readwrite');
        var store = tx.objectStore('teams');
        store.delete(teamId);
        return tx.complete;
    }).then(() => {
        M.toast({ html: 'Team has been deleted from favorite!' });
        getFavoriteTeam();
    }).catch(err => {
        console.error('Error: ', err);
    });
}

module.exports = {
    getFavoriteTeam,
    addFavoriteTeam,
    delFavoriteTeam
}
  
