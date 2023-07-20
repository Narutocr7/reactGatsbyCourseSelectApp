import React from 'react'
import Heading from "./Heading"
import { Link } from 'gatsby'

export default function Infoblock({heading}) {
  return (
    <section className="bg-theme my-5 py-4">
      <div className="container">
        <Heading title={heading}/>
        <div className="row">
            <div className="col-10 col-sm-8 mx-auto text-center">
                <p className="lead text-white mb-4">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam consectetur, voluptatem illo porro quaerat labore officia earum doloremque dolor amet cupiditate tenetur? Saepe eius numquam temporibus eveniet quis similique autem eligendi excepturi mollitia rerum, cupiditate earum non qui aliquid, fugit modi pariatur officiis quia quam neque nam quod sunt. Vero perferendis fugit quo nostrum laborum at, sunt mollitia excepturi ipsa?
                </p>
                <Link to="/about/">
                    <button className="btn
                    btn-warning btn-lg">
                        {heading}
                    </button>
                </Link>
            </div>
        </div>
      </div>
    </section>
  )
}
