/*
  Mission Section holding the photo and our mission in the /about page
*/
import { Container, Row, Col } from "reactstrap";
import { Spring } from "react-spring";

const MissionSection = () => (
  <section className="mission-section">
    <Container>
      <Row>
        <Col md="12" className="text-center">
          <h2 className="project-detail-title">Our Mission</h2>
        </Col>
      </Row>

      <Row>
        <Col md="12" className="text-center">
          <p className="mission-body-text">
            Hack4Impact exists for both nonprofits and students. We connect
            student software developers with nonprofits and other socially
            responsible businesses to develop powerful new tools for social
            change. This enables nonprofits to further their mission and better
            engage their clients. We are committed to increasing awareness of
            technology&#39;s potential for good.
          </p>
        </Col>
      </Row>
    </Container>
    <style jsx>{`
      @media (max-width: 768px) {
        #mission-team {
          width: 100%;
        }
        .img-holder {
          overflow: hidden;
          max-width: 100%;
        }
      }
      #mission-team {
        max-width: 700px;
        margin-top: 30px;
      }
      .mission-body-text {
        color: #323648;

        font-weight: 500;
      }
    `}</style>
  </section>
);

export default MissionSection;
