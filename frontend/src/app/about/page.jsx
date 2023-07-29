import AboutBanner from '@/components/AboutBanner';
import AboutTopic from '@/components/AboutTopic';
import Banner from '@/components/Banner';
import { Calistoga } from 'next/font/google';
import Link from 'next/link';
import React from 'react'

const page = () => {
  return (
    <>
                <AboutBanner />
                <div className='w-full lg:w-10/12 flex flex-col items-center '>
<AboutTopic title="How do we do this?" description="At FeatureMatch, we hold ourselves to high standards in finding the finest products and services. Our dedicated team thoroughly researches and tests products, providing comprehensive comparison lists, reviews, guides, and more. Our scoring system, based on extensive data analysis, ensures transparency and reliability. Click here to learn more about our scoring process"/>
<AboutTopic title="Our Revenue Model?" description="
As our platform and community have flourished, our purpose has grown as well. What started as a small endeavor has now blossomed into a company with a diverse team of hundreds, including skilled researchers, analysts, web technicians, product developers, and editors.

We take pride in offering our services completely free of charge, ensuring accessible and valuable content for all users. To sustain our commitment to quality, we may earn commissions through affiliate links with our partners. These partnerships influence the products' positioning and presentation on our site."/>
<AboutTopic title="Understanding Affiliate Links" description="
Throughout our website, you may encounter links in reviews, comparison tables, and articles that could earn us a commission or referral bonus when clicked. Occasionally, we feature articles in partnership with one or more of our affiliates (clearly marked as sponsored content).

While our reviews are not paid, they may contain affiliate links or buttons redirecting you to our partners' websites. Rest assured, our reviews are always honest and thoroughly researched by our team at FeatureMatch. We prioritize transparency and integrity in our recommendations."/>

<Link
      href="/contact" 
      className="inline-block bg-[#533aa7] m-2 text-white px-4 py-2 rounded-md text-base transition duration-300"
    >
      Contact us
    </Link>

                </div>


         
            </>
        );
    };


export default page