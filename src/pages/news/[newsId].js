import RootLayout from "../../components/Layouts/RootLayout";
import { Card} from 'antd';
const NewsDetailPage = ({news}) => {

if(!news){
  return <p>loading...</p>
}


    return (
      <>
     
              
          <Card 
          style={{ width: 300 }}
          title={news?.title}>
              <img style={{ width: 270 }}  src={news?.image_url} />
              <p>description:{news?.description}</p>
              <p>{news?.author}</p>
              <p>{news?.release_date}</p>
              <p>{news?.comment_count}</p>
            
             
  
        </Card>
    
        
       
      </>
    );
  };
  export default NewsDetailPage;



NewsDetailPage.getLayout = function getLayout(page) {
    return <RootLayout>{page}</RootLayout>;
  };

  // export async function getStaticPaths() {
  //   const res=await fetch("http://localhost:5000/news");
  //   const newses=await res.json();
  
  //   const paths = newses.map(news => ({ params: { newsId: news.id } }));

    
  //   return {
  //     paths,
  //     fallback: true
  //   };
  // }
 



  export const getServerSideProps=async(context)=>{
    const {params}=context;
    const res=await fetch(`http://localhost:5000/news/${params.newsId}`);
    const data=await res.json();
    // console.log(data)
    return{
      props:{
        news:data,
      },
    
    };
  };