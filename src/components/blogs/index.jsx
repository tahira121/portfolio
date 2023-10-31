import React from "react";

import Section from "../shared/section";
import BlogCard from "./blog-card";
import Blog1 from "../../images/blogs/blog-thumb-1.jpg";
import Blog2 from "../../images/blogs/blog-thumb-2.jpg";
import Blog3 from "../../images/blogs/blog-thumb-3.jpg";

import "./style.scss";

const Blogs = () => {
    return (
        <Section
            id="blogs"
            title="Blogs & Articles"
            background="dark"
        >
            <div className="blogs-content-wrapper">
                <BlogCard
                    user="Tahira Shabban"
                    date="Nov 28 2023"
                    image={Blog1}
                    title="How to promote your website on Facebook"
                    description="Facebook allows you to target audiences with your content based on demographics, location, interests, and more. Spend time to set these filters to the people you want to see your content"
                />
                <BlogCard
                    user="Tahira Shabban"
                    date="Nov 28 2023"
                    image={Blog2}
                    title="How to promote your website on LinkedIn"
                    description="If your website hosts your online business, then you’ll probably want to create a LinkedIn company page as well."
                />
                <BlogCard
                    user="Tahira Shabban"
                    date="Nov 28 2023"
                    image={Blog3}
                    title="What is the difference between SEO and SEM?"
                    description="The main difference is that Search Engine Optimization (SEO) is focused on optimizing a website in order to get traffic from organic search results. "
                />
            </div>
        </Section>
    );
};

export default Blogs;
