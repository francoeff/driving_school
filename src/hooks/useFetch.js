import {useState} from 'react';

const useFetch = ( { api, params } ) => {

    const [isFetching, setIsFetching] = useState( false );
    const [dataFeched, setDataFeched] = useState({});

    const fetchData = () => {
        setIsFetching(true);
        api( params )
          .then( data => {
            setDataFeched( data );
          })
          .catch( err => new Error( err ) )
          .finally( () => {
            setIsFetching( false );
          });
    }

    return [ fetchData, dataFeched, setDataFeched, isFetching ];
};

export default useFetch;