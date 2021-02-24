import React, { useEffect, useState } from 'react'
import { PostMasonry, MasonryPost, PostGrid } from '../../components/common'
import trending from '../../assets/mocks/trending'
import featured from '../../assets/mocks/featured'
import axios from 'axios'
import { Row } from 'antd'

const trendingConfig = {
    1: {
        gridArea: '1 / 2 / 3 / 3',
    }
}

const featuredConfig = {
    0: {
        gridArea: '1 / 1 / 2 / 3',
        height: '300px'
    },
    1: {
        height: '300px'
    },
    3: {
        height: '630px',
        marginLeft: '30px',
        width: '630px',
    }
}

const mergeStyles = function (posts, config) {
    posts.forEach((post, index) => {
        post.style = config[index]
        post.author = 'Ferdi Tezcan'
        post.description = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo sunt tempora dolor laudantium sed optio, explicabo ad deleniti impedit facilis fugit recusandae! Illo, aliquid, dicta beatae quia porro id est.'
    })
}

const recentPosts = [...trending, ...featured, ...featured]

mergeStyles(featured, featuredConfig)
mergeStyles(trending, trendingConfig)

const lastPost = featured.pop()

export default function Home() {
    const [postState, setPostState] = useState([]);
    const loadData = () => {

        axios.get('http://localhost:50305/api/Posts/').then(r => {
            r.data.map(x => {

                featured.push({
                    "author": "author",
                    "description": "dasdasdasdasdescription",
                    "title": x.title,
                    "date": x.createdAt,
                    "categories": ['Tech Culture', 'Tech News'],
                    "link": `/post-detail/${x.id}`,
                    "image": 'anyone_can_code.jpg',
                })
            });
            setPostState(featured);
        })
    }
    useEffect(() => {
        loadData();
    }, []);

    // mergeStyles(postState, featuredConfig)


    return (
        <main className="home">
            <section className="container">
                <div className="row">
                    <section className="featured-posts-container">
                        <PostMasonry posts={postState} columns={4} tagsOnTop={true} ></PostMasonry>             
                        {/* <MasonryPost post={lastPost} tagsOnTop={true} /> */}
                    </section>
                </div>
            </section>
            <section className="bg-white">
                <section className="container">
                    <div className="row">
                        <h1>Recent Posts</h1>
                        <PostGrid posts={recentPosts} />
                    </div>
                </section>
            </section>

            <section className="container">
                <div className="row">
                    <PostMasonry posts={trending} columns={3} />
                </div>
            </section>
        </main>
    )
}