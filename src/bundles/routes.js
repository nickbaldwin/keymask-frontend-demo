import {createRouteBundle} from 'redux-bundler';
import HomePage from 'components/../pages/Home.tsx';
import PersonDetail from '../pages/PersonDetail.tsx';
import PeopleList from '../pages/PeopleList.tsx';
import SecretsList from '../pages/SecretsList.tsx';

export default createRouteBundle({
    '/': HomePage,
    '/people': PeopleList,
    '/people/:id': PersonDetail,
    '/secrets': SecretsList,
});
