import {createRouteBundle} from 'redux-bundler';
import HomePage from 'components/pages/Home.tsx';
import PersonDetail from '../components/pages/PersonDetail.tsx';
import PeopleList from '../components/pages/PeopleList.tsx';
import SecretsList from '../components/pages/SecretsList.tsx';

export default createRouteBundle({
    '/': HomePage,
    '/people': PeopleList,
    '/people/:id': PersonDetail,
    '/secrets': SecretsList,
});
