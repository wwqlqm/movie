export  default {
    path:'/movies',
    component:() => import('@/views/Movies/index'),
    children:[{
        path:'city',
        component:()=>import('@/components/city')
    },
    {
        path:'nowPlaying',
        component:()=>import('@/components/nowPlaying')
    },
    {
        path:'fastGo',
        component:()=>import('@/components/fastGo')
    },
    {
        path:'search',
        component:()=>import('@/components/search')
    },
        {
            path:'/movies',
            redirect:'nowPlaying'
        }

]
}