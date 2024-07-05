import './career.css';
import React, { useState } from 'react';
import { Tabs, Tab } from 'react-bootstrap';
import Button from '../Button/Button';

function Career() {
  const [key, setKey] = useState('home');
  return (
    <div className="career" name="career">
      <p>
        Our team of expert of Diamond industry, with over 45 years of combined
        experience, will bring your vision to life. Trust us to deliver
        functional and beautiful diamonds that exceed expectations. We have
        vacancies now! You can apply now
      </p>
      <Tabs
        id="controlled-tab-example"
        activeKey={key}
        onSelect={(k) => setKey(k)}
        className="mb-3"
      >
        <Tab eventKey="manager" title="Manager">
          <div>
            Manager: Lorem Ipsum is simply dummy text of the printing and
            typesetting industry. Lorem Ipsum has been the industry's standard
            dummy text ever since the 1500s, when an unknown printer took a
            galley of type and scrambled it to make a type specimen book. It has
            survived not only five centuries, but also the leap into electronic
            typesetting, remaining essentially unchanged. It was popularised in
            the 1960s with the release of Letraset sheets containing Lorem Ipsum
            passages, and more recently with desktop publishing software like
            Aldus PageMaker including versions of Lorem Ipsum.
          </div>
        </Tab>
        <Tab eventKey="senioral" title="Senioral">
          <div>
            Senioral: Lorem Ipsum is simply dummy text of the printing and
            typesetting industry. Lorem Ipsum has been the industry's standard
            dummy text ever since the 1500s, when an unknown printer took a
            galley of type and scrambled it to make a type specimen book. It has
            survived not only five centuries, but also the leap into electronic
            typesetting, remaining essentially unchanged. It was popularised in
            the 1960s with the release of Letraset sheets containing Lorem Ipsum
            passages, and more recently with desktop publishing software like
            Aldus PageMaker including versions of Lorem Ipsum.
          </div>
        </Tab>
        <Tab eventKey="engineers" title="Engineers">
          <div>
            Engineers: Lorem Ipsum is simply dummy text of the printing and
            typesetting industry. Lorem Ipsum has been the industry's standard
            dummy text ever since the 1500s, when an unknown printer took a
            galley of type and scrambled it to make a type specimen book. It has
            survived not only five centuries, but also the leap into electronic
            typesetting, remaining essentially unchanged. It was popularised in
            the 1960s with the release of Letraset sheets containing Lorem Ipsum
            passages, and more recently with desktop publishing software like
            Aldus PageMaker including versions of Lorem Ipsum.
          </div>
        </Tab>
      </Tabs>
      <div className="mt-4">
        <p>Manager is responsible for bla bla bla</p>
        <div>
          <Button text="Apply now" url="/contact" />
        </div>
      </div>
    </div>
  );
}

export default Career;
