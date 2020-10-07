import React from "react";
import { Icon, Row, CardTitle, Col, Card } from "react-materialize";
// function breweryCard() {
//   return (
//     <div>
//       <div className="col s12 l4">
//         <div className="card">
//           <div className="card-image">
//             <img
//               src="/assets/images/sal-gh-BV5YkMpFlj4-unsplash.jpg"
//               alt="Flight of craft beers"
//             />
//             <Link
//               to="breweries"
//               className="halfway-fab btn-floating light-blue darken-1 pulse"
//             >
//               <i className="large material-icons">local_drink</i>
//             </Link>
//           </div>
//           <div className="card-content">
//             <span className="card-title light-blue-text text-darken-1">
//               Brewery Search
//             </span>
//             <p>
//               Craft Breweries are a trend to some, and a lifestyle for others.
//               Find all your local breweries and tasting rooms for the next time
//               you need a local hazy, juicy, double IPA.
//             </p>
//           </div>
//           <div className="card-action center-align">
//             <Link className="btn light-blue darken-1" to="breweries">
//               Find a local brewery
//             </Link>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

function breweryCard() {
  return (
    <div>
      <Row>
        <Col m={12} s={12}>
          <Card
            actions={[
              <a className="btn light-blue darken-1" key="1" href="breweries">
                Find a local brewery
              </a>
            ]}
            closeIcon={<Icon>close</Icon>}
            header={
              <CardTitle image="/assets/images/sal-gh-BV5YkMpFlj4-unsplash.jpg" />
            }
            horizontal
            revealIcon={<Icon>more_vert</Icon>}
          >
            Not sure what you want to drink? Take a chance on me!
          </Card>
        </Col>
      </Row>
      ;
    </div>
  );
}

export default breweryCard;