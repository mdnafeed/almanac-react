import React from "react";
import style from "./News.module.scss"; // Import the CSS Module
import newsDoneImg from "../../assets/news-done-.jpg";

const NewsContent = () => {
  return (
    <>
    <img src={newsDoneImg} alt="" className="w-100" />
    
    <div className={style.newsContent}>
      <section>
        <h1 className={style.title}>News and Media</h1>
        <p className={style.description}>
          News and media for an Almanac Social Welfare (Trust) website involves
          sharing impactful updates, stories, and resources that engage your
          audience and build trust. The goal is to showcase the organization’s
          work, highlight key issues, and promote collaboration with donors,
          volunteers, and CSR funders.
        </p>
      </section>

      <section>
        <h2 className={style.sectionTitle}>Impact Stories & Testimonials</h2>
        <h3 className={style.subTitle}>Success Stories</h3>
        <p className={style.description}>
          Share compelling, human-interest stories about the people your trust
          has helped. These can be in the form of interviews, written
          narratives, or video features. These stories bring a personal touch
          to your work and can inspire others to contribute.
        </p>
        <h3 className={style.subTitle}>Donor & Volunteer Testimonials</h3>
        <p className={style.description}>
          Highlight testimonials from your donors and volunteers about why they
          support your cause, which helps build trust with new supporters.
        </p>
      </section>

      <section>
        <h2 className={style.sectionTitle}>
          Fundraising Campaigns & Calls for Support
        </h2>
        <h3 className={style.subTitle}>Donation Drives</h3>
        <p className={style.description}>
          Promote ongoing fundraising campaigns or specific projects needing
          financial support. Make it easy for visitors to donate by integrating
          donation buttons or links in every relevant piece of content.
        </p>
        <h3 className={style.subTitle}>Crowdfunding</h3>
        <p className={style.description}>
          Launch crowdfunding campaigns for specific causes, especially for
          urgent needs or emergency response initiatives.
        </p>
        <h3 className={style.subTitle}>Sponsorship & Partnership Opportunities</h3>
        <p className={style.description}>
          Encourage businesses and corporations to sponsor programs or partner
          with your NGO for mutual benefit.
        </p>
      </section>


      <section>
        <h2 className={style.sectionTitle}>
        Awareness Campaigns
        </h2>
        <p className={style.description}>
        Use your platform to raise awareness about issues aligned with your Almanac Social Welfare mission on healthcare, and education.
        </p>
       
      </section>


      <section>
        <h2 className={style.sectionTitle}>
        Volunteer & Internship Opportunities
        </h2>
        <h3 className={style.subTitle}>Volunteer Callouts</h3>
        <p className={style.description}>
        Regularly post opportunities for individuals to get involved with Trust (Almanac Social Welfare), either through volunteering or internships. Include clear instructions on how to apply and what to expect.
        </p>
        <h3 className={style.subTitle}>Volunteer Spotlights</h3>
        <p className={style.description}>
        Feature stories of volunteers who have made significant contributions to your Trust. This can help motivate others to join.
        </p>
        <h3 className={style.subTitle}>Newsletters & Regular Updates</h3>
        <p className={style.description}>
        E-mail newsletters provide a subscription option for readers to receive your Trust updates directly to their inbox. Share highlights from your work, upcoming events, and new opportunities to get involved.
        </p>

        <p className={style.description}>
        Almanac Social Welfare activities, success stories, and upcoming initiatives can keep your audience informed and engaged.
        </p>
      </section>
      

      <section>
        <h2 className={style.sectionTitle}>
        Educational Resources & Reports
        </h2>
        <h3 className={style.subTitle}>Research and Reports</h3>
        <p className={style.description}>
        Publish research papers, studies, and reports that highlight your Trust findings, the impact of its programs, and insights into the communities you serve.
        </p>
        <h3 className={style.subTitle}>Educational Articles & Resources</h3>
        <p className={style.description}>
        Create articles that educate your audience about the issues you address. Share statistics, tips, and resources that can empower people to take action in their communities or understand the social challenges better.
        </p>
      </section>

      <section>
        <h2 className={style.sectionTitle}>
        Partnerships & Collaborations
        </h2>
        <h3 className={style.subTitle}>Corporate and NGO Partnerships</h3>
        <p className={style.description}>
        Share stories of partnerships with corporations, other NGOs, Trust, or international organizations that have helped amplify your impact.
        </p>
        <h3 className={style.subTitle}>Community Collaboration</h3>
        <p className={style.description}>
        Highlight how your NGO/Trust collaborates with local governments, communities, and other entities to achieve shared goals.
        </p>
      </section>


      <section>
        <h2 className={style.sectionTitle}>
        Social Media Integration
        </h2>
        <h3 className={style.subTitle}>Social Media Highlights</h3>
        <p className={style.description}>
        Integrate your Almanac Social Welfare social media posts with your website to showcase real-time updates, successes, and campaigns.
        </p>
        <h3 className={style.subTitle}>Hashtags & Community Engagement</h3>
        <p className={style.description}>
        Create and promote hashtags related to your initiatives to increase visibility and engagement on platforms like Twitter, Instagram, LinkedIn, YouTube and Facebook.
        </p>
      </section>

      <section>
        <h2 className={style.sectionTitle}>
        Multimedia Content (Photos, Videos, and Infographics)
        </h2>
        <h3 className={style.subTitle}>Impactful Visuals</h3>
        <p className={style.description}>
        Include high-quality images and videos that showcase the people you serve, your programs in action, and the impact you’re making. Visual content can evoke stronger emotions and help tell a more compelling story.
        </p>
        <h3 className={style.subTitle}>Infographics</h3>
        <p className={style.description}>
        Use infographics to display complex data in a visually appealing way. This could be the impact of your projects, statistics on issues you're addressing, or how donations are being used.
        </p>
      </section>

      <section>
        <h2 className={style.sectionTitle}>
        Ethical & Transparent Reporting
        </h2>
        <h3 className={style.subTitle}>Financial Transparency</h3>
        <p className={style.description}>
        Share your financial reports and ensure that donors and supporters understand where funds are going. This is important for building trust and transparency.
        </p>
        <h3 className={style.subTitle}>Accountability</h3>
        <p className={style.description}>
        Regularly update your audience on the progress of long-term projects and goals, showing both successes and areas where improvement is needed.
        </p>
      </section>
    </div>
    </>
  );
};

export default NewsContent;
