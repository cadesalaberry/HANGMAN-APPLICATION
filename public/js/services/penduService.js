// TODO SERVICE
function PenduService($http) {
    return {
        get : function() {
            return $http.get('/pendu');
        },
        update : function(id, data){
            return $http.put('/pendu/' + id, data);
        },
        create : function(data) {
            return $http.post('/pendu', data);
        },
        delete : function(id) {
            return $http.delete('/pendu/' + id);
        }
    }
};
