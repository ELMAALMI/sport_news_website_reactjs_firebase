function BlogReducer (state={blogs:[{id : 1,title:"fcb"},{id : 2,title:"fcb2"}]},action)
{

    switch(action.type)
    {
        case 'GET_ALL_BLOGS' : return state;
        case "GET_ONE_BLOGS" :
            return state ;
            if(state.blogs.length != 0)
            {
                const blog  = state.blogs.find(item => item.id == action.id);
                return blog
            }
            else
            {
                return state;
            }

        default : return state;
    }
}


export default BlogReducer;