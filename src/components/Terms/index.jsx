import React from 'react';
import styled from 'styled-components/macro';

const Container = styled.div`
  font-size: calc(0.75em + 0.5vw);
  font-family: ${props => props.theme.fontFamily.main}, sans-serif;
  width: 70%;
  margin: auto;
`;

const TermTitle = styled.p`
  margin-top: 1.75em;
  font-size: 1.25em;
  text-transform: uppercase;
`;

const List = styled.ol`
  margin-left: 1.5em;
  padding-left: 0;
  counter-reset: item;

  > li {
    margin-left: 0;
    padding-left: 0;
    counter-increment: item;
    list-style: none inside;
  }
  > li:before {
    content: '(' counter(item) ')';
    padding-right: 0.5em;
  }
`;

const Text = styled.p`
  margin-bottom: 1em;
`;
const PreListText = styled(Text)`
  margin-bottom: 0;
`;
const BoldText = styled(Text.withComponent('span'))`
  font-weight: bold;
  display: inline-block;
`;

const Terms = ({ className }) => (
  <Container className={className}>
    <TermTitle>TERMS OF USE:</TermTitle>
    <Text>
      Thank you for using this website, owned and operated by Neighbor Health.
      This page provides the Terms of Use Agreement (hereafter to be referred as
      “the Agreement”) and is to be understood as a legally binding Agreement
      between you, the user of our site, and Neighbor Health. Please read this
      Agreement thoroughly prior to using this website and our services.
    </Text>
    <Text>
      As the user, you agree to be bound by each of the terms and conditions
      herein contained in this Agreement. By accessing, using, viewing any
      information or graphics, and accessing any page in our website, the user
      is deemed to have read and understood the terms and condition of this
      Agreement. Furthermore, this Agreement is to be equivalent to a written,
      signed agreement between you, the user, and Neighbor Health, and is to be
      equally binding before the law.
    </Text>
    <BoldText>
      IF the user does not agree to one or any of the terms and conditions of
      this Agreement, they must immediately stop the use of any of the tools,
      functions and information herein provided by Neighbor Health.
    </BoldText>
    <Text>
      Neighbor Health reserves the right to amend or modify this Agreement
      without notice to the users. The user is, then, responsible for re-viewing
      said changes, amendments, and revisions. The user’s continued use of our
      website and information deems the user legally bound to these changes.
    </Text>
    <Text>
      The user agrees not to use any information on this site for commercial
      purposes.
    </Text>
    <TermTitle>LIMITATION OF LIABILITY AND DESCRIPTION OF SERVICE:</TermTitle>
    <Text>
      Neighbor Health specializes in providing general information regarding
      dental tourism and dental services available outside the USA and Canada.
      As such, Neighbor Health obtains publicly available information to help
      users make better decisions regarding their dental treatment options
      available to them.
    </Text>
    <Text>
      At Neighbor Health, we strive to provide our users with up-to-date
      information regarding specialist clinics and services offered. However,
      Neighbor Health is not, and does not claim to be a medical referral
      service. The information presented by Neighbor Health is not reviewed or
      prepared by medical or dental professionals and is not designed as a
      substitute advice obtained from certified medical and dental
      professionals. Thus, Neighbor Health will not discuss or advise the user
      on any issue relating to medical or dental treatment.
    </Text>
    <Text>
      Neighbor Health does not endorse, recommend, or approve any healthcare
      provider listed. In some cases, Neighbor Health may have received
      compensation from a health care or a service provider to be mentioned in
      this site. In which case, all information presented, including relevant
      data, statistics, and graphics have been entirely and voluntarily provided
      by the healthcare or service provider.
    </Text>
    <Text>
      At Neighbor Health, we facilitate the user’s due diligence and
      investigative research, and bridge any contact and information gaps about
      doctors located outside the USA and Canada. We provide information about
      service providers’ credentials, facilities, and history. Furthermore, we
      provide special discounted rates to tourist destinations and attractions,
      and discounted access to accommodation in the users’ chosen destination.
    </Text>
    <Text>
      Our aim at Neighbor Health is to provide you with a peace of mind package
      that minimizes the amount of risk posed to you. However, you assume all
      responsibility, legal or otherwise, regarding the final choice of your
      procedure, clinic, and doctor. Neighbor Health assumes no responsibility
      or liability whatsoever for any treatment or other services performed by
      any doctor, malpractice claims that may arise directly or indirectly, from
      receiving such advice, treatment, or any other service performed on the
      user.
    </Text>
    <Text>
      You, as the user, are encouraged to discuss any and all medical concerns
      regarding medical treatment options with your family physician or medical
      or dental health professional before participating in any type of medical
      treatment outside of your home state or province.
    </Text>
    <TermTitle>DISCLAIMER:</TermTitle>
    <Text>
      Links to other, third-party, websites are meant to facilitate user
      experience. If the user is directed to one of these third-party websites
      of health or dental care practitioners, Neighbor Health bears no
      responsibility for the accuracy of content and information found therein.
    </Text>
    <Text>
      At Neighbor Health we attempt to provide you with up-to-date and precise
      information. However, the site may include inaccuracies or grammatical or
      input errors – these, as previously mentioned can be changed and corrected
      without prior notice to the user. Any information has been gathered from
      publicly available datasets and websites and Neighbor Health cannot be
      held responsible for the accuracy of the content (including
      advertisements, product information, and payments made through a
      third-party site) found within.
    </Text>
    <Text>
      Neighbor Health assumes no responsibility to the fullest extent of the
      applicable law. Neighbor Health does not grant any warranties, express or
      implied, relating to the services received by the user nor by any other
      affiliated partner – not limited to accommodation, transportation, and
      tourist attraction partners. These services are used by the user at their
      own risk and Neighbor Health is not liable for acts that may cause
      physical or any other harm to the user or their property – including
      economic and non-economic losses.
    </Text>
    <Text>
      Neighbor Health does not claim to engage in ANY type of Medicinal or
      Dental Practice. Nor does it claim to have any type of Medical, Dental, or
      Technical know-how. Rather, the information published in the site is
      presented “as is.”
    </Text>
    <Text>
      THE USER AGREES and ACKNOLEDGES: that they have not been coerced into
      using Neighbor Health, rather that the user has reasonably assessed the
      associated risks involved with using Neighbor Health and that the user has
      voluntarily and without inducement chosen to freely participate.
    </Text>
    <Text>
      TO THE MAXIMUM EXTENT PERMITTED BY LAW, THE USER RELEASES AND PROMISES NOT
      TO SUE NEIGHBOR HEALTH FOR ANY CLAIMS, DEMANDS, CAUSES OF ACTIONS, LOSES
      (ECONOMIC AND NON-ECONOMIC), DAMAGES, EXPENSES, COSTS OR LIABILITY OF ANY
      NATURE WHATSOEVER ARISING FROM OR IN CONNECTION WITH NEIGHBOR HEALTH,
      WHETHER BASED ON TORTS (INCLUDING NEGLIGENCE), OR ANY OTHER LEGAL THEORY.
      Furthermore, ANY OTHER INDIVIDUAL ACTING IN YOUR BEHALF – Including and
      not limited to administrators, next of kin, or executors – ALSO AGREE TO
      FOREVER REALEASE and DISCHARGE THEIR RIGHT TO PARTICIPATE IN THE
      AFOREMENTIONED LEGAL ACTION.
    </Text>
    <Text>
      If you reside in the state of California, you expressly waive the
      protection of Section 1542 of the California Civil Code (“Section 1542”),
      which provides: A GENERAL RELEASE DOES NOT EXTEND TO CLAIMS WHICH THE
      CREDITOR DOES NOT KNOW OR SUSPECT TO EXIST IN HIS/HER FAVOR AT THE TIME OF
      EXECUTING THE RELEASE, WHICH IF KNOWN BY HIM/HER MUST HAVE MATERIALLY
      AFFECTED HIS/HER SETTLEMENT WITH THE DEBTOR. You understand and agree that
      claims or facts in addition to or different from those which are now known
      or believed by you to exist may hereafter be discovered.
    </Text>
    <Text>
      The user agrees that under ABSOLUTELY NO CIRCUMSTANCE WILL NEIGHBOR HEALTH
      OR ANY OF ITS DIRECTORS, MEMBERS, EMPLOYEES, AGENTS, REPRESENTATIVES,
      SERVANTS, ATTORNEYS, SUCCESORS or ASSIGNS BE LIABLE FOR ANY INDIRECT,
      INCIDETAL, SPECIAL, PUNITIVE, EXEMPLARY or CONSEQUENTIAL DAMAGES ARISING
      FROM ANY PRODUCT, SERVICE OR ARRANGMENTS MADE THROUGH INFORMATION
      AVAILABLE ON THE SITE, EVEN IF NEIGHBOR HEALTH HASS BEEN ADVISED OF THE
      POSSIBILITY OF DAMAGES.
    </Text>
    <PreListText>
      The user agrees not to sue NEIGHBOR HEALTH and ANY of its directors,
      officers, members, employees, agents, representatives, servants,
      attorneys, successors, or assigns for any of the claims that you have
      waived, released, or discharged herein. Further, you agree to defend,
      indemnify and hold harmless NEIGHBOR HEALTH and any of its directors,
      officers, members, employees, agents, representatives, servants,
      attorneys, successors, or assigns from any and all expenses incurred,
      claims made, or liabilities assessed against them, including but not
      limited to attorneys’ fees and litigation expenses, arising out of or
      resulting from, directly or indirectly, in whole or in part, relating to
      or arising from
    </PreListText>
    <List>
      <li>
        your use of this site, and materials obtained on or through this site,
        or any services obtained on or through this site
      </li>
      <li>
        any arrangements you make based on information obtained on or through
        this site, or{' '}
      </li>
      <li>
        your breach or failure to abide by any part of these Terms and
        Conditions.
      </li>
    </List>
    <TermTitle>Miscellaneous:</TermTitle>
    <Text>
      This Agreement and that relationship between you, the user, and Neighbor
      Health shall be henceforth governed by the laws of the state of Mexico
      without regard to conflict of law provision in any other jurisdiction. The
      User agrees that any cause of action that may arise shall be commenced and
      heard exclusively in the appropriate courts of Monterrey, Mexico.
    </Text>
    <Text>
      Failure by Neighbor Health to exercise or enforce any right or provisions
      in this Agreement does and shall not constitute a waiver of such rights
      and provisions as allowed by law. If any of this Agreement is fond by a
      court of competent jurisdiction to be unenforceable or invalid, the user
      agrees to cooperate with Neighbor Health for the reasonable application of
      such provisions in order to give the full force and effect to the Intent
      of this Agreement.
    </Text>
    <Text>
      Unless expressly indicated, all prices Quoted and Shown are IN USD, and
      are quoted in a PER PERSON basis. Quotes are valid for a three-month (3)
      period. Final quotes are always subject to a complete evaluation upon
      arriving by the chosen specialist at your destination.
    </Text>
    <TermTitle>Age and Responsibility</TermTitle>
    <Text>
      Any person under 18 years old needs the express consent of their parents
      or guardian before submitting their personal data to Neighbor Health
      through the Website. Neighbor Health assumes that if a minor accesses the
      Website is under given authorization of their parents, guardian or legal
      representative.
    </Text>
  </Container>
);

export default Terms;
