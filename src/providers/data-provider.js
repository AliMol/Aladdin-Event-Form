export default function getDataFromServer() {
    return fetch('server-data.json'
        , {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        }
    );
}