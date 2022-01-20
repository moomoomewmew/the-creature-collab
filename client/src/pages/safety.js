import React from 'react';
import '../styles/safety.css';
const Safety = () => {
  return (
    <div className="safety-info">
      <section className="guidelines-about-info">
        <h1 className="guidelines-title">Our Community Guidelines</h1>
        <p className="guidelines">
          Our goal is to make Creature Collab accessible, safe, and enjoyable
          for everyone. As such, we ask that our users abide by the following
          guidelines:
        </p>
      </section>
      <section className="guidelines-list">
        <h3 className="guideline-list-title">
          1. NEVER GIVE OUT YOUR REAL, PERSONAL INFORMATION ONLINE.
        </h3>
        <p className="guideline-list-info">
          Creature Collab is designed as a fantasy realm for our favorite
          fictional friends. We ask that you remain in character when
          interacting through our platform. As for your real-life identity-in
          the wise words of Gandalf-"Keep it secret; keep it safe."
        </p>
        <img
          className="disguise"
          src="https://tabletopjoab.com/wp-content/uploads/2021/02/Tabletop-Joab-Disguise-Kit-Cover-1.jpg"
          alt="disguise"
        />
        <h3 className="guideline-list-title">
          2. When attending events, practice common sense!
        </h3>
        <p className="guideline-list-info">
          Go with a friend, or let a roommate, relative, or other trusted human
          know where you are going, and when you plan to return. Arrange
          check-in times with said human.
        </p>
        <img
          className="buddy-system"
          src="https://1.bp.blogspot.com/-fMpiDkvJznw/W0qpxbmDvMI/AAAAAAAATUQ/tMe-iF7Wrtw3mFZnxSWZN0AzIaXvyO-LwCLcBGAs/s1600/Buddy-system.jpg"
          alt="buddy system"
        />
        <h3 className="guideline-list-title">
          3. Creature Collab is an inclusive environment for all Creatures.
        </h3>
        <p className="guideline-list-info">
          Be kind and respectful in all your interactions with other characters,
          both online and in-person. Creature Collab does not tolerate bullying,
          harrassment, trolling, or bigotry of any kinds. Creature Collab
          maintains a zero-tolerance policy against discrimination in all forms.
          Violators will be exiled from Creature Collab. Please report any
          incidents of harm and/or violence of these kinds to an admin.
        </p>
        <img
          className="friendship"
          src="https://static2.cbrimages.com/wordpress/wp-content/uploads/2020/07/Pathfinder-Class-Diversity.jpg"
          alt="friendship"
        />
        <h3 className="guideline-list-title">
          4. Help Make Creature Collab Accessible!{' '}
        </h3>
        <p className="guideline-list-info">
          When planning events, please take into consideration the diverse needs
          of different users to keep your events open to all. For example, is
          the venue of your in-person event accessible for wheelchair users?
          What about options for social distancing? Do you have closed captions
          available for your online event? These are just some of the ways you
          can help us make Creature Collab enjoyable for all! Furthermore, if
          you have suggestions on making Creature Collab more accessible, please
          be sure to let an admin know!
        </p>
        <img
          className="accessibility"
          src="https://pbs.twimg.com/media/EujMSffXAAEejd3.jpg"
          alt="combat wheelchair"
        />
        <h3 className="guideline-list-title">
          5. Keep Creature Collab Fun For All!
        </h3>
        <p className="guideline-list-info">
          Please keep interactions through Creature Collab positive and
          welcoming, and refrain from posting content depicting nudity or sexual
          material, graphic violence and/or illicit activities. Members agree to
          our terms of use upon registering for an account. Violation of these
          terms will result in account deactivation and banishment from the
          Creature Collab realm.
        </p>
        <img
          className="fun"
          src="https://cdn.vox-cdn.com/thumbor/q_SVzxattFAyRI_XZaLAkY1WI_Y=/1400x0/filters:no_upscale()/cdn.vox-cdn.com/uploads/chorus_asset/file/19764081/lotr1_movie_screencaps.com_2162.jpg"
          alt="Bilbo birthday party"
        />
      </section>
    </div>
  );
};

export default Safety;
