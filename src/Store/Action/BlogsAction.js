export  function getAllblog()
{
    return {
        type: 'GET_ALL_BLOGS'
    }
}

export function getOneBlogById(id)
{
    return {
        type: 'GET_ONE_BLOGS',
        id
    }
}