import React from 'react'
import Heading from './Heading'
import {Link} from 'gatsby'

export default function DualInfoblock({heading}) {
  return (
    <section className="my-4 py-4 bg-theme">
      <div className="container">
        <Heading title={heading} />
        <div className="row">
            <div className="col-8 mx-auto">
                <p className="lead text-white b-5">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur obcaecati, dolore veritatis cum similique illo voluptas deleniti ullam quidem? Veritatis veniam ad esse at quidem aperiam praesentium voluptatem ratione nobis architecto dolorum aut enim, hic ut non eligendi sunt, repellendus est provident fugit velit quod eveniet dicta iste! Asperiores quidem atque quas ipsam? Veritatis itaque velit quos porro harum minus voluptates ullam adipisci fugit quae dicta ea dolor, ex libero soluta nemo numquam corporis nihil alias dignissimos! Sequi expedita mollitia saepe ipsam. Quod commodi itaque harum iure labore, odit ipsum nostrum iste officia eaque fugiat deserunt provident, maxime, numquam molestiae?
                </p>
            </div>
            <div className="col-4">
            <div className="card bg-dark">
  <img src="https://images.pexels.com/photos/4443160/pexels-photo-4443160.jpeg?auto=compress&cs=tinysrgb&w=400" className="card-img-top" alt="image goes here"/>
  <div className="card-body">
    <h5 className="card-title text-success">Card title</h5>
    <p className="card-text text-white">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" className="btn btn-warning btn-block">{heading}</a>
  </div>
</div>
            </div>
        </div>
      </div>
    </section>
  )
}
