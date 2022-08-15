import React from 'react';

import Layout from '../components/Layout';
import Footer from '../components/Footer';
import Header from '../components/Header';
import SideFooter from '../components/SideFooter';

import heroImage from '../assets/images/MG bio.png';
import pic2 from '../assets/images/pic02.jpg';
import Gallery from '../components/Gallery';
import ContactForm from '../components/ContactForm';
import { Link } from 'gatsby';

const img_set_1 = [
  {
    src: require('../assets/images/ashw.png'),
    thumbnail: require('../assets/images/ashw.png'),
    title: 'Ashwaghanda',
    desc: 'Soaring Free Superfoods Potent Plant Ashwaghanda',
    full: true,
  },
  {
    src: require('../assets/images/immunity.png'),
    thumbnail: require('../assets/images/immunity.png'),
    title: 'Immunity',
    desc: 'Soaring Free Superfoods Potent Plant Immunity',
  },
  {
    src: require('../assets/images/lionsM.png'),
    thumbnail: require('../assets/images/lionsM.png'),
    title: 'Lions Mane',
    desc: 'Soaring Free Superfoods Potent Plant Lions Mane',
  },
  {
    src: require('../assets/images/mucuna.png'),
    thumbnail: require('../assets/images/mucuna.png'),
    title: 'Mucuna',
    desc: 'Soaring Free Superfoods Potent Plant Mucuna',
    full: true,
  },
];
const img_set_2 = [
  {
    src: require('../assets/images/gallery/fulls/05.jpg'),
    thumbnail: require('../assets/images/gallery/thumbs/05.jpg'),
    title: 'Any Curiosity',
    desc: 'Be one with the curiosity',
    full: true,
  },
  {
    src: require('../assets/images/gallery/fulls/06.jpg'),
    thumbnail: require('../assets/images/gallery/thumbs/06.jpg'),
    title: 'Any source of enlightenment',
    desc: 'Be one with the soul',
  },
  {
    src: require('../assets/images/gallery/fulls/07.jpg'),
    thumbnail: require('../assets/images/gallery/thumbs/07.jpg'),
    title: 'Be in present',
    desc: 'Be one with the present',
  },
];
const img_set_3 = [
  {
    src: require('../assets/images/gallery/fulls/08.jpg'),
    thumbnail: require('../assets/images/gallery/thumbs/08.jpg'),
    title: 'Give away',
    desc: 'Be one with the empathy',
  },
  {
    src: require('../assets/images/gallery/fulls/09.jpg'),
    thumbnail: require('../assets/images/gallery/thumbs/09.jpg'),
    title: 'Moment',
    desc: 'Be one with the moment',
  },
  {
    src: require('../assets/images/gallery/fulls/10.jpg'),
    thumbnail: require('../assets/images/gallery/thumbs/10.jpg'),
    title: 'Serenity',
    desc: 'Be one with the purity',
    full: true,
  },
];
const IndexPage = () => (
  <Layout>
    <div id="wrapper">
      <section className="intro">
        <Header />
        <div className="content">
          <span className="image fill" data-position="center">
            <img src={heroImage} alt="" />
          </span>
        </div>
      </section>

      <section id="first">
        <header>
          <h2>Including Ceremony into Daily Living</h2>
        </header>
        <div className="content">
          <p>
            <strong>ixCacao Journeys</strong> is a birth from my own journey of
            health since the time cacao entered my life. To share the embodiment teachings
            of ixCacao, I had to live in a way that cultivated space within to honour
            the process of being Human. <br/>
            What does this mean? Living in awareness that All things
            are sacred. Through recognising that each moment is a ceremony where we can drop our masks
            and be fully present, is the catalyst for sustainable, everlasting growth. In a conscious way,
            we can create new ways (habits) of engaging in the world that uplifts our experiences and moves us
            to achieving what we really desire and aspire towards.<br/>
            These journeys were created with the intention to support the integration of the medicinal plant
            teachings so that we can embody the healing they bring for us. When we journey with an
            intention for a certain period of time, we can allow time for our bodies to encode the
            healing and wisdom. It gives time for new pathways to form in the body.
            Experiences and feelings through the body are important factors of
            the embodiment journey.<br/>
            These journeys intend for you to experience the sensations and healing of
            daily spiritual practices coupled with medicinal foods. New outcomes (magic) in life naturally
            begin to arise as we forge new pathways within the body. The prayer is that this sparks inspiration
            in your own Being to keep nurturing this embodiment journey. The wisdom of the plants received
            are keys to finding how this could feed your life and your beloveds around you.
          </p>
          <span className="image main">
            <img src={pic2} alt="" />
          </span>
        </div>
      </section>

      <section>
        <header>
          <h2>Sustainable Steps into Healthy Living</h2>
        </header>
        <div className="content">
          <p>
            <strong>Nutritional Technology</strong> (NT) is a concept of breaking down
            the many facets of healthy living and learning how to apply that in our
            own lives for personal mastery. When we have cultivated a beautiful relationship
            with our own bodies, it becomes easier to listen to how to nourish it. Living
            from a place of our own Truth, rather than what science says is healthy, is what <strong>NT</strong> is all about.
            Using <strong>NT</strong> wisdom, these first wave of journeys will take us step by step
            into a place where we can allow more sustainable energy to flow through us. We begin as follows:
          </p>
          <ul className="feature-icons">
            <li>- Nervous System Health (Vitality) <strong>29 Aug - 2 Sept</strong></li>
            <li>- Making Space within (2 week cleanse) <strong>16 Sept - 30 Sept</strong></li>
            <li >- Increasing Chi through Sunlight <strong>7 Oct - 14 Oct</strong></li>
            <li >- Radiate your Energy (Express your Divinity) <strong>4 Nov - 9 Nov</strong></li>
          </ul>
          <p>
            First we look at the nervous system and how to nourish it to build our capacity to expand
            into higher levels of being. We will then enter into a gentle, gradual cleanse of two weeks
            to make space within for more energy to flow through. After which, we will engage in practices
            and nourishment that will raise our Fire (Spirit) by grounding the Sunlight into our cells. Lastly,
            we will end off with nurturing what we have cultivated through our journeys and radiate our new growth
            in Spirit, Body, Mind.
          </p>
        </div>
      </section>

      <section>
        <header>
          <h2>A Global Sacred Container</h2>
        </header>
        <div className="content">
          <p>
            Each journey will be held within sacred space and maintained primarily by Matthew Gabriel, the
            facilitator, until it has been completed. A sacred container is an energetic field
            coded with specific prayers and intentions for each journey. Within this field,
            we become connected and share an intimate process together. ixCacao will be our
            main plant ally and guide during this container. In the comfort of your own home
            and sacred space, you will be able to safely journey with ixCacao with the guidance
            of your own ancestors, plant allies, and spirit guides.

          </p>
          <span className="image main">
            <img src={pic2} alt="" />
          </span>
        </div>
      </section>

      <section>
        <header>
          <h2>Ally ixCacao ~ Unwavering Love</h2>
        </header>
        <div className="content">
          <p>
            <strong>ixCacao</strong> is both a superfood and a Hand Maiden who will
            support us during this journey into the body. With just the right amount,
            cacao enhances the effects of the nutrients that nourish, cleanse, and revitalise.
          </p>

          <section>
            <header>
              <h3>Cacao Love</h3>
              <p>
              Cacao also helps us tune deeper into the consciousness of our bodies
              (embodiment) so that we can FEEL how our NS is being nourished on a cellular level.
              It is through this feeling that we begin to INNERstand the importance of our NS for our
              health and spiritual growth. This experience intends to encode your body with nutritional tools
              for vital living that will support you in all endeavours of life.

              </p>
            </header>
            <div className="content">
              <Gallery images={img_set_1} />
            </div>
          </section>

          <section>
            <header>
              <h3>Adaptogen Care</h3>
              <p>
                These are our Allies for restoration and rejuvenation. When we have burnt
                ourselves to the core with too much fire, adaptogens are the waters that
                cool and nourish. Where fire is our main element in an active world, adaptogens
                serve as a counter balance to restore the harmony within. They help build our
                nervous system and vitality to increase the capacity at which we can function
                in our lives.
              </p>
            </header>
            <div className="content">
              <div className="gallery">
                <Gallery images={img_set_2} />
              </div>
            </div>
          </section>

          <section>
            <header>
              <h3>Functional Foods</h3>
              <p>
                Having access to foods that have a functional support to our experience of life is a
                necessity. With our current agricultural situation, we are not always getting our
                daily nutrients from the conventional foods we are buying from the store. Our soils
                have been stripped of their fertility, diversity, and intricate ecosystem. Many of
                the foods offered on these journeys are here to help support the intentions of these
                journeys. They serve as a medicine and a food that we can take daily. With the addition
                of these functional foods, we are providing the body with the raw materials it needs
                to expand. The body, our vessel, needs to be taken care of as we raise our vibration.
                This is the Embodiment Process. The health of our vessel, is the capacity at which
                we can safely, sustainably, and wholly experience higher vibrations of living.

              </p>
            </header>
            <div className="content">
              <div className="gallery">
                <Gallery images={img_set_3} />
              </div>
            </div>
          </section>
        </div>
      </section>

      <section>
        <header>
          <h2>Exchange</h2>
        </header>
        <div className="content">
          <p>
            Each journey is a sliding scale option of R 777 - R 1111. <br/>For international rates it is
            $55 - $77.<br/>
            There are discounts on request to those who desire to attend 2 or more of these offerings. Please
            request this in the email below. Energetic exchange of any kind is also open for those who
            feel the call of these journeys but do not have the means to financially commit.
          </p>
          <ul className="actions">
          {/*  <li>
              <Link to="/Elements" className="button primary large">
                Goto Elements Page
              </Link>
            </li>
             <li>
              <a href="/#" className="button large">
                Learn More
              </a>
            </li> */}
          </ul>
        </div>
      </section>

      <section>
        <ContactForm />
        <SideFooter />
      </section>

      <Footer />
    </div>
  </Layout>
);

export default IndexPage;
