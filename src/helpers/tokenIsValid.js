import jwt_decode from 'jwt-decode';

function tokenIsValid( _token, _expMin ) {

    const decodedToken = jwt_decode(_token);

    const dateNow = new Date() / 1000; // in seconden
    const dateIat = new Date(decodedToken.iat);
    const difTime = -dateIat.getTime() + dateNow;

    // Als token niet meer goed is dan wordt de token verwijderd uit local storage
    if (Math.floor(difTime / 30) > _expMin){
        localStorage.removeItem('token');
        return false
    }else{
        return true
    }
}

export default tokenIsValid;