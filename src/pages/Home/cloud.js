import React from 'react'
// import {useQuery} from '@apollo/react-hooks'
import { useQuery } from "@apollo/client";

import withTitle from '../../components/common/with-title'

import {GET_POSTS_BY_CATEGORIES_QUERY} from '../../queries/posts'
import { PostGrid } from '../../components/common';

const catIds = [7]

export default function Cloud ({history}) {
    
    const {data, error} = useQuery(GET_POSTS_BY_CATEGORIES_QUERY, {
        variables: {
            cat_ids: catIds
        }
    })

    if (error) {
        return 'Something went wrong.'
    }

    return withTitle(
        'Cloud',
        data?.posts
            ? <PostGrid posts={data.posts} />
            : 'Loading'

    )
}