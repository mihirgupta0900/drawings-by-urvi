import React from "react";
import Layout from "../components/Layout";
import Image from "next/image";

export const getStaticProps = async () => {
  const res = await fetch("https://picsum.photos/v2/list?page=2");
  const imagesList = await res.json();

  return {
    props: { imagesList },
  };
};

const Wallpapers = ({
  imagesList,
}: {
  imagesList: {
    url: string;
    download_url: string;
    width: number;
    height: number;
    author: string;
  }[];
}) => {
  return (
    <Layout>
      <div className="w-full font-heading text-6xl md:mt-20 mb-32 text-center">
        Wallpapers
      </div>
      <div className="md:mx-32 masonry-with-columns">
        {imagesList &&
          imagesList.map((image) => (
            <a href="/" className="w-full inline-block mr-4 mb-6">
              <div className="rounded-lg imgContainer">
                <div className="img">
                  <Image
                    layout="responsive"
                    loading="lazy"
                    width={image.width}
                    height={image.height}
                    src={image.download_url}
                    alt=""
                  />
                </div>
              </div>
              <span>{image.author}</span>
            </a>
          ))}
      </div>
    </Layout>
  );
};

export default Wallpapers;
