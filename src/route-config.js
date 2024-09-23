import {lazy} from 'react';

const Home=lazy(()=>import('./Components/Home'));


const routes=[
    {path:'/', component:Home}
]

export default routes;