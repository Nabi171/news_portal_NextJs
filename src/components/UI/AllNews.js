import { Card,Row } from 'antd';
import React, { useState } from 'react';
import { Button, Space } from 'antd';
import Link from 'next/link';
const contentListNoTitle = {
  article: <p>article content</p>,
  app: <p>app content</p>,
  project: <p>project content</p>,
};
const AllNews = ({allNews}) => {

  return (
    <>
    {allNews?.map((news)=>(
        <Row  key={news.id} className="gutter-row" span={6}>
            
        <Card 
        style={{ width: 300 }}
        title={news?.title}>
            <img style={{ width: 270 }}  src={news?.image_url} />
            <p>description:{news?.description}</p>
            <p>{news?.author}</p>
            <p>{news?.release_date}</p>
            <p>{news?.comment_count}</p>
          
            <Link
             href={`/news/${news?.id}`}
            >
            <Button type="dashed">Dashed Button</Button> 
            </Link>

      </Card>
      </Row>
    ))}
      
     
    </>
  );
};
export default AllNews;