import React from 'react';

import './TermsAndConditions.scss';

// Components
import AppWrapper from '../../components/AppWrapper/AppWrapper';

function TermsAndConditions() {
  return (
    <AppWrapper title="Terms & Conditions">
      <div className="terms">
        <p className="terms__text">
          Rules for participation in the Santander & Red Hat Developer Games 2021, which take place
          from September xx to October xx, 2021. If you have questions or need additional
          information, please email to developergamesEMEA@redhat.com
        </p>

        <div className="terms__group">
          <h3 className="terms__subtitle">Who organizes it?</h3>
          <p className="terms__text">Red Hat & Banco Santander</p>
        </div>
        <div className="terms__group">
          <h3 className="terms__subtitle">Who can participate?</h3>
          <p className="terms__text">
            Any employee or existing contractor of Banco Santander can participate. Participation is
            voluntary, and subject to approval from your manager.
          </p>
          <p className="terms__text">
            Participation is part of your employment, and as such you are expected to act in a
            responsible and appropriate manner, complying with regulations and personal and
            professional ethics expected by Banco Santander.
          </p>
        </div>
        <div className="terms__group">
          <h3 className="terms__subtitle">How are the teams defined?</h3>
          <p className="terms__text">
            Teams must have a minimum of three and a maximum of four people. Each team must
            designate a Captain, who will be identified as such in the course of the competition.
            Though there is no rule around the composition of a team, it is advised that a
            combination of knowledge and skills will be valuable.
          </p>
        </div>
        <div className="terms__group">
          <h3 className="terms__subtitle">How many teams will there be?</h3>
          <p className="terms__text">
            There will be a minimum of 10 and a maximum of 20 teams. In the event of more than 20
            teams registering, selection will be made on a first-come-first-served basis.
          </p>
        </div>
        <div className="terms__group">
          <h3 className="terms__subtitle">When can teams register?</h3>
          <p className="terms__text">
            The registration period will begin on September xx, 2021 and will close on September xx,
            2021 at 11:59 p.m.
          </p>
        </div>
        <div className="terms__group">
          <h3 className="terms__subtitle">How does the competition work?</h3>
          <ul className="terms__list">
            <li className="list__item">
              Over the course of 3 weeks, teams will be tasked with completing [x] challenges that
              require using Red Hat OpenShift and Quarkus. See the full list of challenges here.
            </li>
            <li className="list__item">
              Each challenge will last for between 1 and 5 hours, depending on ability.
            </li>
            <li className="list__item">
              Teams will be required to complete each task in a set timeframe and in a dedicated
              environment.
            </li>
            <li className="list__item">Red Hat experts will be on hand to help out.</li>
            <li className="list__item">
              Work must be uploaded to a GitHub repository, from where a panel will judge it.
            </li>
          </ul>
        </div>
        <div className="terms__group">
          <h3 className="terms__subtitle">When and where does the competition take place?</h3>
          <p className="terms__text">
            The competition starts on [x] and ends on [x]. It is an online competition, though rooms
            at Red Hat or Banco Santander offices may be available on request. During the 3 weeks of
            the competition, participants will be able to work at any time, in line with their job
            responsibilities and permissions from their manager.
          </p>
        </div>
        <div className="terms__group">
          <h3 className="terms__subtitle">How do you ask questions during the competition?</h3>
          <p className="terms__text">
            A dedicated chat and email has been created for the competition. [enter details when
            available]
          </p>
        </div>
        <div className="terms__group">
          <h3 className="terms__subtitle">What are the prizes?</h3>
          <p className="terms__text">
            All participants will receive points that can be put towards Red Hat training. In
            addition, the top three teams will receive the following prizes:
          </p>
          <ul className="terms__list--nopoint">
            <li className="list__item">
              1st position: Gifts valued at € 700 for each member
            </li>
            <li className="list__item">
              2nd position: Gifts valued at €300 for each member
            </li>
            <li className="list__item">
              3rd position: Gift valued at €200 for each member
            </li>
          </ul>
          <p className="terms__text">
            If the jury considers that the projects are not of sufficient quality or do not
            sufficiently conform to the evaluation criteria, prizes may be void.
          </p>
        </div>
        <div className="terms__group">
          <h3 className="terms__subtitle">Who judges the entries?</h3>
          <p className="terms__text terms__text--nomargin">
            The judges on behalf of Red Hat will be: [x]
          </p>
          <p className="terms__text terms__text--nomargin">
            The judges on behalf of Banco Santander will be: [x]
          </p>
          <p className="terms__text">
            In addition each challenge will have judges who are experts in that field.
          </p>
          <p className="terms__text">
            For the judges to evaluate the challenges, they must be displayed on the platforms or
            uploaded in the repositories as indicated by each challenge.
          </p>
        </div>
        <div className="terms__group">
          <h3 className="terms__subtitle">Confidentiality</h3>
          <p className="terms__text">
            The platform on which participants will be developing is owned by Red Hat and Banco
            Santander and therefore may contain confidential information and / or documentation.
            Participants must consider the confidentiality of these materials as per other materials
            that belong to the bank and to which access is given in order to carry out work.
          </p>
        </div>
        <div className="terms__group">
          <h3 className="terms__subtitle">Personal data</h3>
          <p className="terms__text">
            Both during the course of the competition and at the subsequent awards ceremony,
            participants will be expected to appear in videos and photographs, which may be
            published in Banco Santander media channels. Banco Santander will save these images in
            accordance with current privacy and security regulations.
          </p>
          <p className="terms__text">
            Participants may exercise their rights of access, rectification, cancellation and
            opposition by sending an email to Benjamin Granados. [insert email address]
          </p>
          <p className="terms__text">
            The participants also assign to Banco Santander the image rights that may derive from
            the photographs, videos and their dissemination by any means, including for advertising
            or promotional purposes, without having the right to any remuneration derived from their
            dissemination.
          </p>
        </div>
        <div className="terms__group">
          <h3 className="terms__subtitle">Compliance</h3>
          <p className="terms__text">
            In order to be designated as the winner of any of the prizes, it is necessary for the
            participants to comply with each and every one of these conditions. This document is
            subject to change for the proper functioning of the competition.
          </p>
        </div>
      </div>
    </AppWrapper>
  );
}

export default TermsAndConditions;
