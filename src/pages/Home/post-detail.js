import { Card } from 'antd';
import React from 'react'
import Comment from './comment';

const PostDetail = () => {

    return (

        <main className="home">
            <section className="container">
                <div className="row">
                    <section className="featured-posts-container">
                        <Card title="Default size card" extra={<a href="#">More</a>} style={{ width: 300 }}>
                            <p>Card Başlık</p>
                            <p>Card İçerik</p>
                            <p>Card Özet</p>
                            <Comment></Comment>
                        </Card>

                    </section>
                </div>
            </section>
        </main>

    );
}


export default PostDetail;