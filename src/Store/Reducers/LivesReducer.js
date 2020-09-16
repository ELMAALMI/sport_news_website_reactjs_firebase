export default function LiveReducer (state,action)
{
    switch(action.type)
    {
        case 'GET_ALL_LIVES' : return state.blogs;
        case 'GET_ONE_LIVE' : 
        const blog  = state.blogs.find(item => item.id == action.id);
        return blog;
        default : return [];
    }
}