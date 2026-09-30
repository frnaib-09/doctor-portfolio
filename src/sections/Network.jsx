import React from 'react'
import Head from '../components/Head'
import NetCard from '../components/NetCard';

const Network = () => {
  return (
    <div className="section-y section-x text-center">
      <Head
        headtitle={"professional network"}
        headexp={"Professional Memberships & Affiliations"}
        pragraph={
          "Actively contributing to global standards of clinical cardiac care through national and international medical societies."
        }
      />
      <div className="grid grid-cols-12 mt-10 sm:mt-14 gap-4 sm:gap-6">
        <NetCard
          memship={"FACC (Fellow)"}
          company={"American College of Cardiology"}
          explain={
            "Representing high professional achievement and credentialed status among cardiovascular medical specialists."
          }
        />
        <NetCard
          memship={"Professional Member"}
          company={"American Heart Association"}
          explain={
            "Active contributor to standardizing emergency cardiovascular therapy and public health education programs."
          }
        />
        <NetCard
          memship={"Active Member"}
          company={"Society for Cardiovascular Angiography"}
          explain={
            "Fostering professional development and training standards in invasive catheter-based structural therapies."
          }
        />
        <NetCard
          memship={"Associate Member"}
          company={"Heart Rhythm Society"}
          explain={
            "Aligning on the research, diagnosis, and regulation of patient cardiac rhythm management systems."
          }
        />
      </div>
    </div>
  );
}

export default Network